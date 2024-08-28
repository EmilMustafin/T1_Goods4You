import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformProduct, transformSearchProduct } from './constants';
import { IProductFormat, ISearchArgs, ISearchProductFormat } from './types';
import { BASE_URL } from '../../constants';

export const cardsProductApi = createApi({
  reducerPath: 'cardsProductApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getSearchProducts: build.query<ISearchProductFormat, ISearchArgs>({
      query: ({ query, limit, skip }) => ({
        url: `/products/search?q=${query}&limit=${limit}&skip=${skip}`,
      }),
      transformResponse: transformSearchProduct,
    }),
    getSingleProduct: build.query<IProductFormat, string>({
      query: (productId) => ({
        url: `/products/${productId}`,
      }),
      transformResponse: transformProduct,
    }),
  }),
});

export const { useGetSearchProductsQuery, useGetSingleProductQuery } = cardsProductApi;
