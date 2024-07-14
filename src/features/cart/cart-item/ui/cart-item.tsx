import { Link } from 'react-router-dom';
import { CartProducts } from '@/shared/api';
import { Icons } from '@/shared/assets';
import { Icon } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import styles from './cart-item.module.css';

interface Props {
  items: CartProducts | undefined;
}

export const CartItem = ({ items }: Props) => {
  return (
    <div className={styles.cartItems}>
      {items?.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <img
            src={item.thumbnail}
            alt={item.title}
            className={styles.cartImage}
            width={100}
            height={100}
          />
          <div className={styles.itemDetails}>
            <Link to={`/product/${item.id}`} className={styles.itemName}>
              {item.title}
            </Link>
            <p className={styles.itemPrice}>{item.price} $</p>
          </div>
          {item ? (
            <div className={styles.itemQuantity}>
              <Counter counter={item.quantity} />
            </div>
          ) : (
            <Button size='s'>
              <Icon icon={Icons.CART} />
            </Button>
          )}
          <Button className={styles.deleteButton}>Delete</Button>
        </div>
      ))}
    </div>
  );
};
