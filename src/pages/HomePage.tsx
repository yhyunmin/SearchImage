import { Header } from '@/widget/Header';
import { MainBanner } from '@/widget/MainBanner';
import { SubNavBar } from '@/widget/SubNavBar';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <SubNavBar />
        <MainBanner />
        <Outlet />
      </main>
    </>
  );
};
