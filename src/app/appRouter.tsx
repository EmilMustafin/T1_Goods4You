import { createBrowserRouter } from 'react-router-dom';
import { CartPage } from '@/pages/cart-page';
import { ErrorPage } from '@/pages/error-page';
import { HomePage } from '@/pages/home-page';
import { ProductPage } from '@/pages/product-page';
import { ROUTER_PATHS } from '@/shared/constants';
import AppLayout from './layouts/appLayout/appLayout';

export const appRouter = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTER_PATHS.PRODUCT,
        element: <ProductPage />,
      },
      {
        path: ROUTER_PATHS.CART,
        element: <CartPage />,
      },
    ],
  },
]);
