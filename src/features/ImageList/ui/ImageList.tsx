import { ImageDataType } from '@/app/types';
import { ImageCard } from '@/features/ImageList';
import useImageList from '@/features/ImageList/hooks/useImageList';

const ImageList = () => {
  const { imageList } = useImageList();
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

export default ImageList;
