import Routes from './routes';
import { Loader } from './components';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const Home = lazy(() => import('./pages/home'));
  const Error = lazy(() => import('./pages/error'));
  const Products = lazy(() => import('./pages/products'));
  const ProductImage = lazy(() => import('./pages/productImage'));
  const Shopping = lazy(() => import('./pages/shop'));

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Routes />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products/:id',
          element: <Products />,
        },
        {
          path: '/products/:id/1',
          element: <ProductImage />,
        },
        {
          path: '/shop',
          element: <Shopping />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};

export default App;
