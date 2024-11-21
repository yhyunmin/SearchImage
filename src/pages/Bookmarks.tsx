import { Toaster } from '@/shared/ui/toaster';
import { Header } from '@/widget/Header';
import { Provider } from 'jotai';
import { Outlet } from 'react-router-dom';

export const Bookmarks = () => {
  return (
    <>
      <Provider>
        <Header />
        <main className="flex flex-col">
          <Outlet />
        </main>
        <Toaster />
      </Provider>
    </>
  );
};
