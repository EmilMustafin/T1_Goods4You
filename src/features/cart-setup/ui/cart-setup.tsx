import { useEffect, useState } from 'react';
import { CartSummary } from '@/entities';
import { CartItem } from '@/entities/cart-item';
import { Products } from '@/shared/api';

interface Props {
  products: Products;
}
export const CartSetup = ({ products }: Props) => {
  const [carts, setCarts] = useState<Products>(products);
  const [total, setTotal] = useState({
    totalPriceWithoutDiscount: carts.reduce((prev, curr) => prev + curr.priceTotal, 0),
    count: carts.reduce((prev, curr) => prev + curr.count, 0),
    price: carts.reduce(
      (prev, curr) => prev + curr.priceTotal - ((curr.discount || 0) * curr.priceTotal) / 100,
      0,
    ),
  });
  const deleteProduct = (id: number) => {
    setCarts((carts) => carts.filter((product) => id !== product.id));
  };
  useEffect(() => {
    setTotal({
      totalPriceWithoutDiscount: carts.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: carts.reduce((prev, curr) => prev + curr.count, 0),
      price: carts.reduce(
        (prev, curr) => prev + curr.priceTotal - ((curr.discount || 0) * curr.priceTotal) / 100,
        0,
      ),
    });
  }, [carts]);

  return (
    <>
      <CartItem items={carts} updateCart={setCarts} onDelete={deleteProduct} />
      <CartSummary
        totalCount={total.count}
        totalPriceWithoutDiscount={total.totalPriceWithoutDiscount}
        totalPrice={total.price}
      />
    </>
  );
};
