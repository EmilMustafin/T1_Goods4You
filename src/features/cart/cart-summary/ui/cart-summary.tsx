import { formatPrice } from '@/shared/lib/format-number';
import styles from './cart-summary.module.css';

interface Props {
  totalCount: number;
  totalPriceWithoutDiscount: number;
  totalPrice: number;
}

export const CartSummary = ({ totalCount, totalPriceWithoutDiscount, totalPrice }: Props) => {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.summary_items}>
        <div className={styles.summaryItem}>
          <span className={styles.text_totalCount}>Total count</span>
          <span className={styles.totalCount}>{totalCount} items</span>
        </div>
        <div className={styles.summaryItem}>
          <span className={styles.text_priceWithoutDiscount}>Price without discount</span>
          <span className={styles.priceWithoutDiscount}>
            {formatPrice(totalPriceWithoutDiscount)}
          </span>
        </div>
      </div>
      <div className={styles.summaryTotal}>
        <span className={styles.text_totalPrice}>Total price</span>
        <span className={styles.totalPrice}>{formatPrice(totalPrice)}</span>
      </div>
    </div>
  );
};
