import { configureStore } from '@reduxjs/toolkit';
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { cartsUserSlice } from '@/entities/user';
import { Icons, IMAGES } from '@/shared/assets';
import { formatPrice } from '@/shared/lib';
import { Icon } from '@/shared/ui';
import { Button } from '@/shared/ui/button';
import { Counter } from '@/shared/ui/counter/ui/counter';
import { ProductCard } from './product-cards';
import styles from './product-cards.module.css';

const store = configureStore({
  reducer: {
    [cartsUserSlice.name]: cartsUserSlice.reducer,
  },
});
const cart = {
  quantity: 1,
};
const productExample = {
  id: 1,
  title: 'Essence Mascara Lash Princess',
  price: 110,
  thumbnail: IMAGES.PRODUCT_CATALOG,
  discountPercentage: 10,
  stock: 10,
};

type Story = StoryObj<typeof ProductCard>;

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <div style={{ height: '370px', width: '370px' }}>
            <Story />
          </div>
        </Provider>
      </MemoryRouter>
    ),
  ],
  args: {
    product: productExample,
  },
};

export default meta;

export const Default: Story = {
  render: () => <ProductCard product={productExample} />,
};

export const Hovered: Story = {
  name: 'После добавления в корзину',
  render: () => (
    <>
      <h1 style={{ width: '600px', paddingBottom: '20px' }}>После добавление в корзину</h1>
      <div className={styles.productCard}>
        <div className={styles.imageWrapper}>
          <img src={productExample.thumbnail} width='370px' height='300px' />
          <div className={styles.overlay}>
            <span>Show details</span>
          </div>
        </div>
        <div className={styles.sub_container}>
          <div className={styles.info}>
            <h3 className={styles.productName}>{productExample.title}</h3>
            <p className={styles.productPrice}>{formatPrice(productExample.price)}</p>
          </div>
          <div className={styles.actions}>
            {cart ? (
              <Counter counter={cart.quantity} onIncrement={() => {}} onDecrement={() => {}} />
            ) : (
              <Button className={styles.addToCart}>
                <Icon icon={Icons.CART} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  ),
};
