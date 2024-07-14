import { Helmet, HelmetProvider } from 'react-helmet-async';
import { cartsUserSlice } from '@/entities/products-cart';
import { Cart } from '@/features/cart';
import { useAppSelector } from '@/shared/lib/redux';
import styles from './cart-page.module.css';
export const CartPage = () => {
  const cartProducts = useAppSelector(cartsUserSlice?.selectors?.getCarts);

  return (
    <HelmetProvider>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.cartContainer}>
        <h2 className={styles.title_cart}>My cart</h2>
        <div className={styles.setup_container}>
          {cartProducts?.total ? <Cart cartProducts={cartProducts} /> : <div className={styles.empty_cart}>No items</div>}
        </div>
      </section>
    </HelmetProvider>
  );
};
