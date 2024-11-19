import { fetchApi } from '@/app/store';
import { toast } from '@/shared/hooks/use-toast';

export const fetchImages = async (searchValue: string) => {
  try {
    const res = await fetchApi(searchValue);
    console.log(res.data);
    if (res.status === 200 && res.data) {
      toast({
        title: '검색 성공',
        className: 'bg-white',
      });
      return res.data.results;
    }
  } catch (e) {
    console.log(e);
    toast({
      variant: 'destructive',
      title: 'Unsplash API 호출 실패!!',
      description: 'API 호출을 위한 필수 파라미터 값을 체크해보세요!',
      className: 'bg-white',
    });
  }
};
