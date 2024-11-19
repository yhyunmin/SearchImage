import { apiImageAtom } from '@/app';
import { ImageDataType } from '@/app/types';
import { ImageCard } from '@/features/ImageList';
import useFetchImgList from '@/features/ImageList/hooks/useFetchImgList';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const ImageList = () => {
  const [images] = useAtom(apiImageAtom);
  useFetchImgList();

  useEffect(() => {
    console.log('ImageList 호출');
    console.log('ImageList 렌더링: images 갯수', images, images.length);
  }, [images]);

  return (
    <>
      <ul className="mx-auto grid max-w-[1440px] grid-cols-5 gap-7 p-7">
        {images.map((image: ImageDataType) => {
          return <ImageCard data={image} key={image.id} />;
        })}
      </ul>
    </>
  );
};

export default ImageList;
