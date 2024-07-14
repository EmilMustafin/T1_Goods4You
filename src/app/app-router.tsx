import { createBrowserRouter } from 'react-router-dom';
import { CartPage } from '@/pages/cart-page';
import { HomePage } from '@/pages/home-page';
import { ProductPage } from '@/pages/product-page';
import { ROUTER_PATHS } from '@/shared/constants';
import { Error } from '@/widgets/error';
import { RootLayout } from '@/widgets/root-layout';

export const appRouter = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <RootLayout />,
    errorElement: <Error />,
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
