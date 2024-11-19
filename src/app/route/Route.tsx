import { ImageList } from '@/features/ImageList';
import { HomePage } from '@/pages';
import { createBrowserRouter } from 'react-router-dom';

export const Route = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: '/',
        Component: () => <ImageList />,
      },
    ],
  },
]);
