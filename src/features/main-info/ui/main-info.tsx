import { Button } from '@/shared/ui/button';
import styles from './main-info.module.css';

export const MainInfo = () => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContent}>
        <h1 className={styles.mainTitle}>
          Any products from famous brands with worldwide delivery
        </h1>
        <p className={styles.mainSubtitle}>
          We sell smartphones, laptops, clothes, shoes, and many other products at low prices
        </p>
        <Button anchor='#catalog' size='l'>
          Go to shopping
        </Button>
      </div>
      <div className={styles.highlight}>Goods4you</div>
    </section>
  );
};
