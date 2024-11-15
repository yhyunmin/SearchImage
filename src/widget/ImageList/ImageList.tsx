import { ImageCard } from '@/widget/ImageList/ImageCard';

export const ImageList = () => {
  return (
    <ul className="mx-auto grid max-w-[1440px] grid-cols-5 gap-7 p-7">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </ul>
  );
};
