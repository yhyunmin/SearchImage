import { Toaster } from '@/shared/ui/toaster';
import { Footer } from '@/widget/Footer';
import { Header } from '@/widget/Header';
import { MainBanner } from '@/widget/MainBanner';
import { SubNavBar } from '@/widget/SubNavBar';
import { Provider } from 'jotai';
import { Outlet } from 'react-router-dom';

export const HomePage = () => {
  return (
    <>
      <Provider>
        <Header />
        <main className="flex flex-col">
          <SubNavBar />
          <MainBanner />
          <Outlet />
        </main>
        <Footer />
        <Toaster />
      </Provider>
    </>
  );
};
