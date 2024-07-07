import { Images } from '@/shared/assets';
import { Image } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Star } from '@/shared/ui/star/ui/star';
import styles from './product-detail.module.css';

export interface Props {
  id: number;
  name: string;
  category: string;
  rate: number;
  count: number;
  description: string;
  image: Images;
  discount: number;
  price: number;
  originalPrice: number;
}
export const ProductDetail = ({
  name,
  category,
  rate,
  count,
  description,
  image,
  discount,
  price,
  originalPrice,
}: Props) => {
  return (
    <div className={styles.productDetail}>
      <div className={styles.productImage}>
        <Image image={image} widthAndHeight='520px' />
        <div className={styles.thumbnailContainer}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Image
              key={num}
              className={styles.thumbnail}
              alt={`Thumbnail ${num}`}
              image={image}
              widthAndHeight='70px'
            />
          ))}
        </div>
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.title_product}>{name}</h1>
        <div className={styles.rating}>
          <Star stars={rate} />
          <span className={styles.category}>{category}</span>
        </div>
        <p className={styles.stock}>In Stock - Only {count} left!</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.warranty_container}>
          <p className={styles.warranty}>1 month warranty</p>
          <p className={styles.shipping}>Ships in 1 month</p>
        </div>
        <div className={styles.buy}>
          <div className={styles.price_container}>
            <div className={styles.current_price}>{price}$</div>
            <div className={styles.original_price}>{originalPrice} $</div>
          </div>
          <div className={styles.discount_container}>
            <div className={styles.text_discount}>Your discount:</div>
            <span className={styles.percent_discount}>{discount}%</span>
          </div>
          <Button size='l'>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};
