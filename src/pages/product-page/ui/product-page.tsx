import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ProductDetail } from '@/features';
import { productDetail } from '../model/constants';

export const ProductPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Essence Mascara Lash Princess | Goods4you/</title>
      </Helmet>
      <ProductDetail {...productDetail} />
    </HelmetProvider>
  );
};
