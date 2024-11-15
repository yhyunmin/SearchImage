import { ImageCard } from '@/widget/ImageList/ui';

export const ImageList = () => {
  return (
    <ul className="mx-auto grid min-w-[1440px] grid-cols-5 gap-20 p-7">
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
      <ImageCard />
    </ul>
  );
};
