import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartsUserRepository, cartsUserSlice } from '@/entities/products-cart';
import { cardsProductApi } from '@/shared/api';

export const extraArgument = {
  cartsUserRepository,
};
export const rootReducer = combineReducers({
  [cartsUserSlice.name]: cartsUserSlice.reducer,
  [cardsProductApi.reducerPath]: cardsProductApi.reducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } }).concat(cardsProductApi.middleware),
});
