import {
  asyncThunkCreator,
  buildCreateSlice,
  createAsyncThunk,
  createSelector,
  ThunkAction,
  UnknownAction,
} from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
/* eslint-disable boundaries/element-types */
/* eslint-disable boundaries/entry-point */
import { extraArgument, store } from '@/app/app-store';
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppStore = useStore.withTypes<typeof store>();
export const createAppSelector = createSelector.withTypes<AppState>();
export type AppThunk<R = void> = ThunkAction<R, AppState, typeof extraArgument, UnknownAction>;
export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: typeof extraArgument;
}>();

export const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});
