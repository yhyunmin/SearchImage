import { BookmarksList } from '@/features/BookmarkList';
import { ImageList } from '@/features/ImageList';
import { HomePage, Bookmarks } from '@/pages';

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
  {
    path: '/bookmark',
    element: <Bookmarks />,
    children: [{ path: '/bookmark', Component: () => <BookmarksList /> }],
  },
]);
