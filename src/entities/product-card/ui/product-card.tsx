import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/shared/api';
import { Icons } from '@/shared/assets';
import { Image } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import { Icon } from '@/shared/ui/icon';
import styles from './product-card.module.css';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const [cart, setCart] = useState<Product>(product);
  const [isVisible, setisVisible] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setisVisible(!isVisible);
  };
  const increase = (id: number) => {
    setCart((cart) => {
      if (cart.id === id) {
        return {
          ...cart,
          count: cart.count + 1,
          priceTotal: (cart.count + 1) * cart.price,
        };
      }
      return product;
    });
  };
  const decrease = (id: number) => {
    setCart((cart) => {
      if (cart.id === id) {
        const newCount = cart.count - 1 > 1 ? cart.count - 1 : 1;
        return {
          ...cart,
          count: newCount,
          priceTotal: newCount * cart.price,
        };
      }
      return product;
    });
  };
  return (
    <Link to={`/product/${product.id}`} className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <Image image={product.image} width='370px' height='300px' />
        <div className={styles.overlay}>
          <span>Show details</span>
        </div>
      </div>
      <div className={styles.sub_container}>
        <div className={styles.info}>
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>{product.price} $</p>
        </div>
        <div className={styles.actions}>
          {isVisible ? (
            <Counter
              id={product.id}
              counter={cart.count}
              decrease={() => decrease(product.id)}
              increase={() => increase(product.id)}
            />
          ) : (
            <Button onClick={handleAddToCart} className={styles.addToCart}>
              <Icon icon={Icons.CART}   />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};
