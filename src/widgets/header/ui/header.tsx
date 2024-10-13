import { Link } from 'react-router-dom';
import { cartsUserSlice, userSlice } from '@/entities/user';
import { Icons } from '@/shared/assets';
import { useAppSelector } from '@/shared/lib/redux';
import { Spinner } from '@/shared/ui';
import { Icon } from '@/shared/ui/icon';
import styles from './header.module.css';
export const Header = () => {
  const user = useAppSelector(userSlice.selectors.getUsers);
  const cartsStatus = useAppSelector(cartsUserSlice.selectors.selectUserCartsStatus);
  const totalQuantity = useAppSelector(cartsUserSlice.selectors.getTotalQuantity);
  if (cartsStatus === 'idle') {
    return <Spinner />;
  }
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        Goods4you
      </Link>
      <nav className={styles.nav}>
        <Link to='/#catalog' className={styles.navItem}>
          Catalog
        </Link>
        <Link to='/#faq' className={styles.navItem}>
          FAQ
        </Link>
        <div className={styles.navItem}>
          <Link to='/cart' className={styles.cart}>
            <div className={styles.cart_text}>Cart</div>
            <Icon icon={Icons.CART} />
            {totalQuantity > 0 && (
              <>
                <div className={styles.cart_circle}>
                  <span className={styles.cartCount}>{totalQuantity}</span>
                </div>
              </>
            )}
          </Link>
        </div>
        {user && (
          <div className={styles.navItem}>
            {user?.firstName} {user?.lastName}
          </div>
        )}
      </nav>
    </header>
  );
};
