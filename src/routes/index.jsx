import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import { ErrorPage } from '@pages';
import { Layout } from '@components/layout';
import { Loading } from '@components/shared';

import { ROUTE_PATHS } from './routes.constants';

const LazyCreation = lazy(() => import('@pages/creation/creation'));
const LazyList = lazy(() => import('@pages/saved-list/saved-list'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATHS.CREATION,
        element: (
          <Suspense fallback={<Loading />}>
            <LazyCreation />
          </Suspense>
        ),
        index: true,
      },
      {
        path: ROUTE_PATHS.LIST,
        element: (
          <Suspense fallback={<Loading />}>
            <LazyList />
          </Suspense>
        ),
      },
      {
        path: '/',
        element: <Navigate to={ROUTE_PATHS.CREATION} replace />,
      },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
