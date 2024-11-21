import { ImageDataType } from '@/app/types';
import { ImageCard } from '@/features/ImageList';
import { getBookmark } from '@/shared/utils/localStorage';
import { useState, useEffect } from 'react';

export const BookmarksList = () => {
  const [imageList, setImageList] = useState<ImageDataType[]>([]);

  useEffect(() => {
    const data = getBookmark();
    console.log(data, 'data');
    setImageList(data);
  }, []);

  return (
    <>
      <ul className="mx-auto grid max-w-[1440px] grid-cols-5 gap-7 p-7">
        {imageList &&
          imageList.map((image: ImageDataType) => {
            return <ImageCard data={image} key={image.id} />;
          })}
      </ul>
    </>
  );
};
