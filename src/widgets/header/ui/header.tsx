import { Link } from 'react-router-dom';
import { cartsUserSlice } from '@/entities/products-cart';
import { Icons } from '@/shared/assets';
import { useAppSelector } from '@/shared/lib/redux';
import { Icon } from '@/shared/ui/icon';
import styles from './header.module.css';
export const Header = () => {
  const totalQuantity = useAppSelector(cartsUserSlice.selectors.getTotalQuantity);
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        Goods4you
      </Link>
      <nav className={styles.nav}>
        <a href='/#catalog' className={styles.navItem}>
          Catalog
        </a>
        <a href='/#faq' className={styles.navItem}>
          FAQ
        </a>
        <div className={styles.navItem}>
          <Link to='/cart' className={styles.cart}>
            <div className={styles.cart_text}>Cart</div>
            <Icon icon={Icons.CART} />
            <div className={styles.cart_circle}>
              <span className={styles.cartCount}>{totalQuantity}</span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>Johnson Smith</div>
      </nav>
    </header>
  );
};
