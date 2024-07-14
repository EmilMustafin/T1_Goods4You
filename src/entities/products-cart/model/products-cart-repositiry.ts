import { BASE_URL } from '@/shared/api';
import { IUpdateCart } from './types';

export const cartsUserRepository = {
  getCartsUser: (userId: number) => {
    return fetch(`${BASE_URL}/carts/user/${userId}`).then((res) => res.json());
  },
  updateCartsUser: ({
    userId,
    products,
  }: {
    userId: number;
    products: IUpdateCart;
  }) => {
    return fetch(`${BASE_URL}/carts/1`, {
      method: 'PUT',
      body: JSON.stringify({
        merge: true,
        userId: userId,
        products: [{ id: products.id, quantity: products.quantity }],
      }),
    }).then((res) => res.json());
  },
};
