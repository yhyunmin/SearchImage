import { HomePage } from '@/pages';
import { ImageList } from '@/widget/ImageList/ImageList';
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
