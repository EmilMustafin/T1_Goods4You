import { cartsUserSlice } from '@/entities/products-cart';
import { IProductFormat } from '@/shared/api';
import { formatPrice } from '@/shared/lib/format-number';
import { useAppSelector } from '@/shared/lib/redux';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import { ImageSlider } from '@/shared/ui/image-slider/ui/image-slider';
import { Star } from '@/shared/ui/star/ui/star';
import styles from './product-detail.module.css';

export interface Props {
  productDetail: IProductFormat;
}
export const ProductDetail = ({ productDetail }: Props) => {
  const carts = useAppSelector((state) =>
    cartsUserSlice.selectors.searchCartProduct(state, productDetail.id),
  );
  const discountPrice =
    productDetail.price - productDetail.price * (productDetail.discountPercentage / 100);
  return (
    <div className={styles.productDetail}>
      <ImageSlider images={productDetail.images} />
      <div className={styles.productInfo}>
        <h1 className={styles.title_product}>{productDetail.title}</h1>
        <div className={styles.rating}>
          <Star stars={productDetail.rating} />
          <span className={styles.category}>{productDetail.tags.join(',')}</span>
        </div>
        <p className={styles.stock}>In Stock - Only {productDetail.stock} left!</p>
        <p className={styles.description}>{productDetail.description}</p>
        <div className={styles.warranty_container}>
          <p className={styles.warranty}>{productDetail.warrantyInformation}</p>
          <p className={styles.shipping}>{productDetail.shippingInformation}</p>
        </div>
        <div className={styles.buy}>
          <div className={styles.price_container}>
            <div className={styles.current_price}>{formatPrice(discountPrice)}</div>
            <div className={styles.original_price}>{formatPrice(productDetail.price)}</div>
          </div>
          <div className={styles.discount_container}>
            <div className={styles.text_discount}>Your discount:</div>
            <span className={styles.percent_discount}>{productDetail.discountPercentage}%</span>
          </div>
          {carts ? <Counter counter={carts.quantity} /> : <Button size='l'>Add to cart</Button>}
        </div>
      </div>
    </div>
  );
};
