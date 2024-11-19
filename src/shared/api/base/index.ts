// TODO 공통 fetchapi는 이쪽으로

import { apiResponseAtom } from '@/app';
import axios from 'axios';

export const fetchApi = async (searchValue: string, page: number = 1) => {
  const API_KEY = 'RtXdVXs2b2QhLghvC4Rg-bM2lZABj6sXq3Aa74AQ7D8';
  const BASE_URL = 'https://api.unsplash.com/search/photos';

  try {
    const res = await axios.get(`${BASE_URL}?query=${searchValue}&page=${page}&per_page=30&client_id=${API_KEY}`);
    set(apiResponseAtom, res);
    return res; // 필요한 데이터만 반환
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    throw error; // 오류를 던져서 나중에 처리할 수 있게 함
  }
};
