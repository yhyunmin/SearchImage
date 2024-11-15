import { FolderButton } from '@/widget/ImageList/ui';
import { Heart } from 'lucide-react';

export const ImageCard = () => {
  return (
    <>
      <li className="relative flex flex-col gap-4">
        <div className="relative h-48 w-full rounded-xl bg-zinc-200">
          <FolderButton />
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold">
            <h3>조회한 이미지에 대한 설명란입니다.</h3>
            <h3>조회한 이미지에 대한 설명란입니다.</h3>
          </div>
          <div className="flex justify-between">
            <p className="flex gap-1">
              게시일: <span>2014-11-15</span>
            </p>
            <p className="flex gap-1">
              <Heart className="w-4 fill-red-500 stroke-red-500" />
              <span>1,000</span>
            </p>
          </div>
        </div>
      </li>
    </>
  );
};
