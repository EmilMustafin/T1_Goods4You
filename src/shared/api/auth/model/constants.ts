import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '@/shared/lib/localStorage';
import { IGetAuthResponse } from './types';
export const BASE_AUTH = 'https://dummyjson.com/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_AUTH,
    prepareHeaders: (headers) => {
      const token = getAccessToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export const GetAuthFormat = (data: IGetAuthResponse) => {
  return {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
  };
};
