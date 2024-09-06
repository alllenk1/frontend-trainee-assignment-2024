import { StrictMode, useEffect, useState } from 'react';
import { PagesComposition } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MoviesListPage from '@/pages/movies-list';
import CurrentMoviePage from '@/pages/current-movie';

import './styles/index.scss';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MoviesListPage />
    },
    {
      path: 'movie',
      element: <CurrentMoviePage />
    }
  ]);

  return (
    <StrictMode>
      <PagesComposition />
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;
