import { Link } from 'react-router-dom';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles.footer__container}>
        <Link to='/' className={styles.footer_logo}>
          Goods4you
        </Link>
        <div className={styles.footer_nav}>
          <Link to='/#catalog' className={styles.footer_item}>
            Catalog
          </Link>
          <Link to='/#faq' relative='path' className={styles.footer_item}>
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};
