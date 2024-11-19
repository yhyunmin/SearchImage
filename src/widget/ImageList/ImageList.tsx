import { ImageDataType } from '@/app/types';
import { useToast } from '@/shared/hooks/use-toast';
import { fetchApi, pageAtom, searchValueAtom } from '@/app/store';
import { ImageCard } from '@/widget/ImageList/ui';
import { useAtom } from 'jotai';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';

export const ImageList = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [page, setPage] = useAtom(pageAtom);
  const { toast } = useToast();

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetchApi(searchValue, page);
      if (res.status === 200 && res.data) {
        setImages(res.data.results);
        toast({
          title: 'UNSPLASH API호출 성공 ',
          className: 'bg-white rounded-xl border-none',
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'UNSPLASH API호출 실패',
          description: 'API호출을 위한 필수 파라미터 값을 체크하기',
          className: 'bg-white rounded-xl border-none',
        });
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }, []);
  useLayoutEffect(() => {
    fetchImages();
  }, [fetchImages]);
  return (
    <ul className="mx-auto grid max-w-[1440px] grid-cols-5 gap-7 p-7">
      {images.map((image: ImageDataType) => {
        return <ImageCard data={image} key={image.id} />;
      })}
    </ul>
  );
};
