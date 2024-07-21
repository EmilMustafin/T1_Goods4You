import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartsUserSlice, userSlice } from '@/entities/user';
import { authApi, cardsProductApi } from '@/shared/api';
import { Router } from './app-router';

export const extraArgument = {
  Router,
  userSlice,
  cartsUserSlice,
};
export const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [cartsUserSlice.name]: cartsUserSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [cardsProductApi.reducerPath]: cardsProductApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(
      authApi.middleware,
      cardsProductApi.middleware,
    ),
});
