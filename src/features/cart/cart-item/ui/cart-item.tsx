import { Link } from 'react-router-dom';
import { updateCartsUser } from '@/entities/user';
import { CartProducts } from '@/shared/api';
import { Icons } from '@/shared/assets';
import { calculateDiscountedPrice } from '@/shared/lib';
import { useAppDispatch } from '@/shared/lib/redux';
import { Icon } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import styles from './cart-item.module.css';

interface Props {
  items: CartProducts | undefined;
}
export const CartItem = ({ items }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.cartItems}>
      {items?.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <div className={`${styles.itemDetails} ${!item.quantity ? styles.opacity : ''}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className={styles.cartImage}
              width={100}
              height={100}
            />
            <div className={styles.itemInfo}>
              <Link to={`/product/${item.id}`} className={styles.itemName}>
                {item.title}
              </Link>
              <p className={styles.itemPrice}>
                {calculateDiscountedPrice(item.price, item.discountPercentage)}
              </p>
            </div>
          </div>
          {item.quantity ? (
            <>
              <div className={styles.itemQuantity}>
                <Counter
                  counter={item.quantity}
                  onIncrement={() =>
                    dispatch(
                      updateCartsUser({
                        updateCarts: { id: item.id, quantity: item.quantity - 1 },
                      }),
                    )
                  }
                  onDecrement={() =>
                    dispatch(
                      updateCartsUser({
                        updateCarts: { id: item.id, quantity: item.quantity + 1 },
                      }),
                    )
                  }
                />
              </div>
              <div>
                <Button
                  className={styles.deleteButton}
                  onClick={() =>
                    dispatch(
                      updateCartsUser({
                        updateCarts: { id: item.id, quantity: null },
                      }),
                    )
                  }
                >
                  Delete
                </Button>
              </div>
            </>
          ) : (
            <Button
              size='s'
              onClick={() => dispatch(updateCartsUser({ updateCarts: { id: item.id } }))}
            >
              <Icon icon={Icons.CART} />
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};
