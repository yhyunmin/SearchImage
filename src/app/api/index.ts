import { toast } from '@/shared/hooks/use-toast';
import axios from 'axios';

const API_KEY = 'RtXdVXs2b2QhLghvC4Rg-bM2lZABj6sXq3Aa74AQ7D8';
const BASE_URL = 'https://api.unsplash.com/search/photos';

export const fetchImages = async (queryId: string, pageId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}?query=${queryId}&page=${pageId}&per_page=30&client_id=${API_KEY}`);
    toast({
      title: 'API 호출 성공',
      className: 'bg-white',
    });
    return response.data;
  } catch (e) {
    console.error('fetchImages', e);
    toast({
      variant: 'destructive',
      title: 'Unsplash API 호출 실패',
      description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
      className: 'bg-white',
    });
    throw e;
  }
};
