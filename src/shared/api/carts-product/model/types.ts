interface IDimensions {
  width: number;
  height: number;
  depth: number;
}

interface IReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface IMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
export interface IProductCard
  extends Pick<IProductResponse, 'id' | 'title' | 'price' | 'thumbnail' | 'discountPercentage'> {}
export type ISearchProductFormat = {
  products: IProductCard[];
  total: number;
  skip: number;
  limit: number;
};
export type IProductFormat = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  tags: string[];
  stock: number;
  sku: string;
  warrantyInformation: string;
  shippingInformation: string;
  images: string[];
};
export interface IProductResponse {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: IDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: IReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: IMeta;
  images: string[];
  thumbnail: string;
}
export interface IProductsSearch {
  products: IProductResponse[];
  total: number;
  skip: number;
  limit: number;
}
export interface ICartQuantity extends Pick<ICart, 'id' | 'userId' | 'totalQuantity'> {}
export type CartProducts = ICartProducts[];
export interface ICartProducts {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
export interface ICart {
  id: number;
  products: ICartProducts[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface ICartsResponse {
  carts: ICart[];
  total: number;
  skip: number;
  limit: number;
}
export interface ISearchArgs {
  query: string;
  limit: number;
  skip: number;
}
