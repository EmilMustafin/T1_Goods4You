import { Dispatch } from 'react';
import { Link } from 'react-router-dom';
import { Products } from '@/shared/api';
import { Image } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import styles from './cart-item.module.css';

interface Props {
  items: Products;
  updateCart: Dispatch<React.SetStateAction<Products>>;
  onDelete: (id: number) => void;
}

export const CartItem = ({ items, updateCart, onDelete }: Props) => {
  const increase = (id: number) => {
    updateCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id: number) => {
    updateCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  return (
    <div className={styles.cartItems}>
      {items.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <Image
            image={item.image}
            alt={item.name}
            style={{ borderRadius: '4px' }}
            widthAndHeight='100px'
          />
          <div className={styles.itemDetails}>
            <Link to={`/product/${item.id}`} className={styles.itemName}>
              {item.name}
            </Link>
            <p className={styles.itemPrice}>{item.price} $</p>
          </div>
          <div className={styles.itemQuantity}>
            <Counter
              id={item.id}
              counter={item.count}
              increase={() => increase(item.id)}
              decrease={() => decrease(item.id)}
            />
          </div>
          <Button className={styles.deleteButton} onClick={() => onDelete(item.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
