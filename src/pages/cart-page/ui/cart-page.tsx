import { Helmet, HelmetProvider } from 'react-helmet-async';
import { cartsUserSlice } from '@/entities/user';
import { Cart } from '@/features/cart';
import { useAppSelector } from '@/shared/lib/redux';
import styles from './cart-page.module.css';
export const CartPage = () => {
  const cartProducts = useAppSelector(cartsUserSlice?.selectors?.getCarts);
  const status = useAppSelector((state) => state.userCarts.status);
  if (status === 'failed') {
    return <div>Ошибка</div>;
  }
  return (
    <HelmetProvider>
      <Helmet>
        <title>My cart | Goods4you</title>
      </Helmet>
      <section className={styles.cartContainer}>
        <h1 className={styles.title_cart}>My cart</h1>
        <div className={styles.setup_container}>
          {cartProducts ? (
            <Cart cartProducts={cartProducts} />
          ) : (
            <div className={styles.empty_cart}>No items</div>
          )}
        </div>
      </section>
    </HelmetProvider>
  );
};
