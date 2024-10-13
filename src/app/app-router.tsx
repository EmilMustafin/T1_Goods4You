import { createBrowserRouter } from 'react-router-dom';
import { CartPage } from '@/pages/cart-page';
import { HomePage } from '@/pages/home-page';
import { ProductPage } from '@/pages/product-page';
import { SignInPage } from '@/pages/sign-in-page';
import { ROUTER_PATHS } from '@/shared/constants';
import { Error } from '@/widgets/error';
import { RootLayout } from '@/widgets/root-layout';
import { AuthRedirect } from './auth-redirect';

const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <AuthRedirect>
            <HomePage />
          </AuthRedirect>
        ),
      },

      {
        path: ROUTER_PATHS.PRODUCT,
        element: (
          <AuthRedirect>
            <ProductPage />
          </AuthRedirect>
        ),
      },
      {
        path: ROUTER_PATHS.CART,
        element: (
          <AuthRedirect>
            <CartPage />
          </AuthRedirect>
        ),
      },
      {
        path: ROUTER_PATHS.SIGN_IN,
        element: (
          <AuthRedirect>
            <SignInPage />
          </AuthRedirect>
        ),
      },
    ],
  },
]);

export default router;
