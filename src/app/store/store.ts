import { toast } from '@/shared/hooks/use-toast';
import axios from 'axios';
import { atom } from 'jotai';

// TODO data fetching
// const idAtom = atom(1);
// const dataAtom = atom(async (get) => {
//   const id = get(idAtom);
//   const res = await fetch(`https://reqres.in/api/posts/${id}`);
//   const data = await res.json();
//   return data;
// });

//get
export const apiPageAtom = atom<any>(null);
export const apiImageAtom = atom<any>([]);
export const searchValueAtom = atom<string>('seoul');
export const asyncSearchValueAtom = atom(async (get) => {
  const searchValue = get(searchValueAtom);
  return searchValue;
});
export const pageAtom = atom<number>(1);

//set

export const fetchApiAtom = atom(null, async (get: any, set: any) => {
  const API_KEY = 'RtXdVXs2b2QhLghvC4Rg-bM2lZABj6sXq3Aa74AQ7D8';
  const BASE_URL = 'https://api.unsplash.com/search/photos';
  // TODO searchValue 상태 업데이트되도 먹통.
  const page = get(pageAtom);
  const searchValue = get(searchValueAtom);
  console.log(searchValue, 'jotai에서의 searchValue확인');
  // const apiResponse = get(apiResponseAtom);
  try {
    const response = await axios.get(`
    ${BASE_URL}?query=${searchValue}&page=${page}per_page=30&client_id=${API_KEY}
    `);
    set(apiPageAtom, response.data.total_pages);
    set(apiImageAtom, response.data.results);
    toast({
      title: 'API호출 성공',
      className: 'bg-white',
    });
  } catch (e) {
    console.log('api 호출 실패', e);
    toast({
      variant: 'destructive',
      title: 'Unsplash API 호출 실패',
      description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
      className: 'bg-white',
    });
  } finally {
    // 로딩
    console.log('api 호출 성공 ');
  }
});
