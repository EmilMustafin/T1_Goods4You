import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Catalog, FAQ, MainInfo } from '@/features';

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
