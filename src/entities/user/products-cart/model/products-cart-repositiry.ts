import { BASE_URL, ICartProducts } from '@/shared/api';
import { IUpdateCart } from './types';

export const cartsUserRepository = {
  getCartsUser: (userId: number) => {
    return fetch(`${BASE_URL}/carts/user/${userId}`).then((res) => res.json());
  },
  updateCartsUser: ({
    cartsId,
    products,
  }: {
    cartsId: number | undefined;
    products: IUpdateCart[] | undefined;
  }) => {
    return fetch(`${BASE_URL}/carts/${cartsId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        merge: false,
        products: products,
      }),
    }).then((res) => res.json());
  },
  addCartsUser: ({
    cartsId,
    products,
  }: {
    cartsId: number | undefined;
    products: IUpdateCart | ICartProducts[] | undefined;
  }) => {
    return fetch(`${BASE_URL}/carts/${cartsId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        merge: false,
        products: [products],
      }),
    }).then((res) => res.json());
  },
};
