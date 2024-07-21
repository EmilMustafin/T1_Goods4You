import { Link } from 'react-router-dom';
import { cartsUserSlice, updateCartsUser } from '@/entities/user';
import { IProductCard } from '@/shared/api';
import { Icons } from '@/shared/assets';
import { calculateDiscountedPrice} from '@/shared/lib';
import { useAppDispatch, useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import { Icon } from '@/shared/ui/icon';
import styles from './product-cards.module.css';

interface Props {
  product: IProductCard;
}

export const ProductCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
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
            <h1 className={styles.productName}>{product.title}</h1>
            <p className={styles.productPrice}>
              {calculateDiscountedPrice(product.price, product.discountPercentage)}
            </p>
          </div>
          <div className={styles.actions}>
            {cart?.quantity ? (
              <Counter
                stock={product.stock}
                counter={cart.quantity}
                onIncrement={() =>
                  dispatch(
                    updateCartsUser({
                      updateCarts: { id: cart.id, quantity: cart.quantity - 1 },
                    }),
                  )
                }
                onDecrement={() =>
                  dispatch(
                    updateCartsUser({
                      updateCarts: { id: cart.id, quantity: cart.quantity + 1 },
                    }),
                  )
                }
              />
            ) : (
              <Button
                className={styles.addToCart}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(updateCartsUser({ updateCarts: product }));
                }}
              >
                <Icon icon={Icons.CART} />
              </Button>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
