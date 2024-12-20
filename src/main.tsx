import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/app';
import { RouterProvider } from 'react-router-dom';
import { Route } from '@/app/';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Route} />
  </StrictMode>
);
