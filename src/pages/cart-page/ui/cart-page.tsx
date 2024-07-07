import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CartSetup } from '@/features/cart-setup';
import { cartProducts } from '@/shared/api';
import styles from './cart-page.module.css';
export const CartPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.cartContainer}>
        <h2 className={styles.title_cart}>My cart</h2>
        <div className={styles.setup_container}>
          <CartSetup products={cartProducts} />
        </div>
      </section>
    </HelmetProvider>
  );
};
