import productJpg from '../home/product.jpg';
import product1Jpg from '../home/product1.jpg';
export enum Images {
  PRODUCT_CATALOG = 'PRODUCT_CATALOG',
  PRODUCT_1 = 'PRODUCT_1',
}
export const IMAGES: Record<Images, string> = {
  [Images.PRODUCT_CATALOG]: productJpg,
  [Images.PRODUCT_1]: product1Jpg,
};
