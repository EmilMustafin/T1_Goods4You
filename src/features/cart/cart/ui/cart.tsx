import { ICart } from '@/shared/api';
import styles from './cart.module.css';
import { CartItem } from '../../cart-item/ui/cart-item';
import { CartSummary } from '../../cart-summary/ui/cart-summary';

interface Props {
  cartProducts: ICart;
}
export const Cart = ({ cartProducts }: Props) => {
  return (
    <div className={styles.cart}>
      <CartItem items={cartProducts.products} />
      <CartSummary
        totalCount={cartProducts.totalProducts}
        totalPriceWithoutDiscount={cartProducts.total}
        totalPrice={cartProducts.discountedTotal}
      />
    </div>
  );
};
