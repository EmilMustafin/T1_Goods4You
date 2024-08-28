import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserCarts } from '@/entities/user/products-cart/model/products-cart-store';
import { IGetAuthFormat, loginApi } from '@/shared/api';
import { ROUTER_PATHS } from '@/shared/constants';
import { getAccessToken, removeTokensFromStorage } from '@/shared/lib/localStorage';
import { createAppAsyncThunk } from '@/shared/lib/redux';

interface UserState {
  user: IGetAuthFormat | null;
  error: string | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IGetAuthFormat | null>) {
      if (action.payload === null) {
        state.user = null;
      } else {
        state.user = {
          ...action.payload,
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        };
      }
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setAuthData(state, action: PayloadAction<IGetAuthFormat>) {
      state.user = action.payload;
    },
  },
  selectors: {
    getUsers: (state) => state.user,
  },
});
export const auth = createAppAsyncThunk<void, void>('auth/fetchAuth', async (_, thunkAPI) => {
  const {
    dispatch,
    extra: { Router },
  } = thunkAPI;
  dispatch(userSlice.actions.setLoading(true));
  const isAuth = !!getAccessToken();
  if (isAuth) {
    const { data, error } = await dispatch(loginApi.endpoints.getAuth.initiate());
    if (data) {
      dispatch(userSlice.actions.setAuthData(data));
      await dispatch(fetchUserCarts(data));
    } else if (error) {
      removeTokensFromStorage();
      await dispatch(fetchUserCarts(null));
    }
  } else {
    await dispatch(fetchUserCarts(null));
    await Router.navigate(ROUTER_PATHS.SIGN_IN);
  }
  dispatch(userSlice.actions.setLoading(false));
});
