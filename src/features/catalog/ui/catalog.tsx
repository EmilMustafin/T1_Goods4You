import { ProductCard } from '@/entities';
import { products } from '@/shared/api';
import { Button } from '@/shared/ui/button';
import styles from './catalog.module.css';

export const Catalog = () => {
  return (
    <section id='catalog' className={styles.catalog}>
      <h1 className={styles.catalog_title}>Catalog</h1>
      <input type='text' placeholder='Search for...' className={styles.searchInput} />
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.show_more}>
        <Button size='l'>Show more</Button>
      </div>
    </section>
  );
};
