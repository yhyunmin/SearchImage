import { BaseInput } from '@/components/common/BaseInput';
import bannerBg from '@/assets/banner-bg.png';

export const MainBanner = () => {
  return (
    <>
      <section className="w-dvw bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bannerBg})` }}>
        <div className="mx-auto my-20 flex max-w-[820px] flex-col gap-4 text-white">
          <h2 className="my-4 text-5xl font-black tracking-tighter">
            프로젝트 01:오픈 API를 활용한 이미지 검색 사이트 만들기
          </h2>
          <div className="flex flex-col gap-2">
            <p className="font-black tracking-tight">인터넷 시각자료 출처입니다.</p>
            <p className="font-black tracking-tight">모든지역에 있는 크리에이터들의 지원을 받습니다.</p>
          </div>
          <BaseInput type="search" className="relative cursor-pointer" />
        </div>
      </section>
    </>
  );
};
