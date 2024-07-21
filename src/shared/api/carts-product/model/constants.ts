import { ICartsResponse, IProductResponse, IProductsSearch } from './types';

export const transformQuantity = (response: ICartsResponse) => {
  return response.carts.map((item) => {
    return {
      id: item.id,
      userId: item.userId,
      totalQuantity: item.totalQuantity,
    };
  });
};

export const transformProduct = (product: IProductResponse) => {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
    rating: product.rating,
    stock: product.stock,
    tags: product.tags,
    sku: product.sku,
    warrantyInformation: product.warrantyInformation,
    shippingInformation: product.shippingInformation,
    images: product.images,
  };
};

export const transformSearchProduct = (productSearch: IProductsSearch) => {
  const products = productSearch.products.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      stock: item.stock,
      discountPercentage: item.discountPercentage,
    };
  });
  return {
    products: products,
    total: productSearch.limit,
    skip: productSearch.skip,
    limit: productSearch.limit,
  };
};
