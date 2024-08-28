import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Catalog } from '@/features/catalog';
import { FAQ } from '@/features/faq';
import { MainInfo } from '@/features/main-info';

export const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Catalog | Goods4you</title>
      </Helmet>
      <MainInfo />
      <Catalog />
      <FAQ />
    </HelmetProvider>
  );
};
