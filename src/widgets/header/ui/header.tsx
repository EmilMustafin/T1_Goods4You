import { Link} from 'react-router-dom';
import { Icons } from '@/shared/assets';
import { Icon } from '@/shared/ui/icon';
import styles from './header.module.css';
export const Header = () => {
 


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
              <span className={styles.cartCount}>1</span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>Johnson Smith</div>
      </nav>
    </header>
  );
};
