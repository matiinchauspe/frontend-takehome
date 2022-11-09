import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import { Creation } from '@pages/creation';
import { ErrorPage } from '@pages/error-page';
import { Layout } from '@components/shared';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/collections',
        element: <Creation />,
        index: true,
      },
      {
        path: '/my-saved-collections',
        element: <div>Saved collections list</div>,
      },
      {
        path: '/',
        element: <Navigate to="/collections" replace />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
