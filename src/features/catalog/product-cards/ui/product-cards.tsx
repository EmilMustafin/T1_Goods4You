import { Link } from 'react-router-dom';
import { cartsUserSlice } from '@/entities/products-cart';
import { IProductCard } from '@/shared/api';
import { Icons } from '@/shared/assets';
import { formatPrice } from '@/shared/lib/format-number';
import { useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import { Icon } from '@/shared/ui/icon';
import styles from './product-cards.module.css';

interface Props {
  product: IProductCard;
}

export const ProductCard = ({ product }: Props) => {
  const cart = useAppSelector((state) => {
    return cartsUserSlice.selectors.searchCartProduct(state, product.id);
  });
  return (
    <div className={styles.productGrid}>
      <Link key={product.id} to={`/product/${product.id}`} className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img src={product.thumbnail} width='370px' height='300px' />
          <div className={styles.overlay}>
            <span>Show details</span>
          </div>
        </div>
        <div className={styles.sub_container}>
          <div className={styles.info}>
            <h3 className={styles.productName}>{product.title}</h3>
            <p className={styles.productPrice}>{formatPrice(product.price)}</p>
          </div>
          <div className={styles.actions}>
            {cart ? (
              <Counter counter={cart.quantity} />
            ) : (
              <Button className={styles.addToCart}>
                <Icon icon={Icons.CART} />
              </Button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
