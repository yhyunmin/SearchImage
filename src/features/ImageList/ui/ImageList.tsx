import { getApiAtom } from '@/app';
import { ImageDataType } from '@/app/types';
import { ImageCard } from '@/features/ImageList';
import useFetchImgList from '@/features/ImageList/hooks/useFetchImgList';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const ImageList = () => {
  const { results } = useFetchImgList();
  return (
    <>
      <ul className="mx-auto grid max-w-[1440px] grid-cols-5 gap-7 p-7">
        {results &&
          results.map((image: ImageDataType) => {
            return <ImageCard data={image} key={image.id} />;
          })}
      </ul>
    </>
  );
};

export default ImageList;
