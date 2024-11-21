import BookmarksList from '@/features/BookmarkList/BookmarksList';
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
    path: '/bookmarks',
    element: <Bookmarks />,
    children: [{ path: '/bookmarks', Component: () => <BookmarksList /> }],
  },
]);
