import { Images } from '@/shared/assets';

export interface ProductDetail {
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
