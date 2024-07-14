import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ICartsResponse } from '@/shared/api';
import { createAppAsyncThunk } from '@/shared/lib/redux';
import { IUpdateCart } from './types';

interface UserCartState {
  cartsUser: ICartsResponse | null;
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

const initialState: UserCartState = {
  cartsUser: null,
  status: 'idle',
  error: null,
};

export const cartsUserSlice = createSlice({
  name: 'userCarts',
  initialState,
  selectors: {
    getCarts: (state) => {
      if (state?.cartsUser?.carts && state.cartsUser.carts.length > 0) {
        return state.cartsUser.carts[0];
      }
      return null;
    },
    getProducts: (state) => {
      if (state?.cartsUser?.carts && state.cartsUser.carts.length > 0) {
        return state.cartsUser.carts[0].products;
      }
      return null;
    },
    searchCartProduct: createSelector(
      [
        (state: UserCartState) => state?.cartsUser?.carts[0]?.products,
        (_: UserCartState, id: number) => id,
      ],
      (state, id) => {
        if (state) {
          const selectedState = state.find((item) => item.id === id);
          return selectedState;
        }
      },
    ),
    getTotalQuantity: (state) => {
      if (state?.cartsUser?.carts && state.cartsUser.carts.length > 0) {
        return state.cartsUser.carts[0].totalQuantity;
      }
      return 0;
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserCarts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserCarts.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartsUser = action.payload;
      })
      .addCase(fetchUserCarts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(updateCartsUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateCartsUser.fulfilled, (state, action) => {
        state.status = 'success';
        if (state?.cartsUser?.carts && state.cartsUser.carts.length > 0) {
          state.cartsUser.carts = action.payload;
        }
        state.error = null;
      })
      .addCase(updateCartsUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

const updateCartsUser = createAppAsyncThunk(
  'cart/updateCartsUser',
  async ({ userId, products }: { userId: number; products: IUpdateCart }, thunkAPI) =>
    thunkAPI.extra.cartsUserRepository.updateCartsUser({ userId: userId, products: products }),
);
const fetchUserCarts = createAppAsyncThunk<ICartsResponse, number>(
  'cart/userById',
  async (userId: number, thunkAPI) => thunkAPI.extra.cartsUserRepository.getCartsUser(userId),
);

export const userCartsStore = {
  actions: {
    fetchUserCarts,
    updateCartsUser,
  },
};
