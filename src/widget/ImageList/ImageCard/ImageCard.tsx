import { Heart } from 'lucide-react';

export const ImageCard = () => {
  return (
    <>
      <li className="flex w-[250px] flex-col">
        <div className="h-full w-full flex-1 rounded-xl bg-zinc-200">s</div>
        <div className="flex flex-col gap-2">
          <h3>조회한 이미지에 대한 설명란입니다.</h3>
          <h3>조회한 이미지에 대한 설명란입니다.</h3>
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
