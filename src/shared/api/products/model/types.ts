import { Images } from '@/shared/assets';
export type Products = Product[];
export interface Product {
  id: number;
  name: string;
  price: number;
  image: Images;
  discount?: number;
  count: number;
  priceWithoutDiscount: number;
  priceTotal: number;
}
