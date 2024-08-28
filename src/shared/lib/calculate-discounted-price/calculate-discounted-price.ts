import { formatPrice } from '../format-number/format-price';

export const calculateDiscountedPrice = (price: number, discount: number): string => {
  return formatPrice(price - (price * discount) / 100);
};
