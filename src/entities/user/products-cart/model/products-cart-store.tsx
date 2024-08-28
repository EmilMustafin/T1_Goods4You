import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ICartsResponse, IGetAuthFormat } from '@/shared/api';
import { createAppAsyncThunk } from '@/shared/lib/redux';
import { cartsUserRepository } from './products-cart-repositiry';
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
    selectUserCartsStatus: (state) => state.status,
    selectUpdateCartUser: createSelector(
      [
        (state: UserCartState) => state?.cartsUser?.carts[0].products,
        (_: UserCartState, updateQuantity: IUpdateCart) => updateQuantity,
      ],
      (products, updateQuantity) => {
        if (!products) return [];

        let found = false;
        const updatedProducts = products.map((item) => {
          if (item.id === updateQuantity.id) {
            found = true;
            return {
              id: updateQuantity.id,
              quantity: updateQuantity.quantity === 0 ? null : updateQuantity.quantity,
            };
          }
          return {
            id: item.id,
            quantity: item.quantity,
          };
        });

        if (!found) {
          updatedProducts.push({ id: updateQuantity.id, quantity: updateQuantity.quantity });
        }

        return updatedProducts;
      },
    ),
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
        if (state.cartsUser && state.cartsUser.carts) {
          state.cartsUser.carts[0] = action.payload;
        }
        state.error = null;
      })
      .addCase(updateCartsUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const updateCartsUser = createAppAsyncThunk(
  'cart/updateCartsUser',
  async ({ updateCarts }: { updateCarts: IUpdateCart }, thunkAPI) => {
    const cartsId = thunkAPI.getState().userCarts.cartsUser?.carts[0].id;
    const updateProducts = cartsUserSlice.selectors.selectUpdateCartUser(
      thunkAPI.getState(),
      updateCarts,
    );

    const response = await cartsUserRepository.updateCartsUser({
      cartsId: cartsId,
      products: updateProducts,
    });

    return response;
  },
);

export const fetchUserCarts = createAppAsyncThunk<ICartsResponse, IGetAuthFormat | null>(
  'cart/userById',
  async (data, thunkAPI) => {
    const { dispatch, getState } = thunkAPI;
    dispatch(thunkAPI.extra.userSlice.actions.setUser(data ? data : null));
    const userData = getState().user.user;
    if (!userData) {
      return null;
    }
    const cartsResponse = await cartsUserRepository.getCartsUser(userData.id);
    return cartsResponse;
  },
);
