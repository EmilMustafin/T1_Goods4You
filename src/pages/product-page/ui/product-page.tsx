import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { ProductDetail } from '@/features/product-details';
import { useGetSingleProductQuery } from '@/shared/api';
import { Spinner } from '@/shared/ui';
import { Error } from '@/widgets/error';

export const ProductPage = () => {
  const { productId } = useParams<string>();
  const { data: productDetail, isLoading, isError } = useGetSingleProductQuery(productId ?? '');
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>{productDetail?.title} | Goods4you</title>
      </Helmet>
      {productDetail && <ProductDetail productDetail={productDetail} />}
    </HelmetProvider>
  );
};
