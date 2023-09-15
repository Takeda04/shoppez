import Routes from './routes';
import { Loader } from './components';
import { lazy, Suspense, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const Home = lazy(() => import('./pages/home'));
  const Error = lazy(() => import('./pages/error'));
  const Products = lazy(() => import('./pages/products'));
  const ProductImage = lazy(() => import('./pages/productImage'));
  const Shopping = lazy(() => import('./pages/shop'));
  const MyCart = lazy(() => import('./pages/mycarts'));

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
        {
          path: '/my-carts',
          element: <MyCart />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  // useEffect(() => {
  //   alert('The site has been updated');
  // }, []);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
};

export default App;
