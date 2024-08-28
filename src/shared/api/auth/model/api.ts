import { authApi, GetAuthFormat } from './constants';
import { IAuthArgs, IAuthResponse, IGetAuthFormat } from './types';

export const loginApi = authApi.injectEndpoints({
  endpoints: (build) => ({
    getAuth: build.query<IGetAuthFormat, void>({
      query: () => ({
        url: '/me',
      }),
      transformResponse: GetAuthFormat,
    }),
    authLogin: build.mutation<IAuthResponse, IAuthArgs>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),

      transformResponse: (data: IAuthResponse) => ({
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        token: data.token,
      }),
    }),
  }),
});

export const { useAuthLoginMutation, useGetAuthQuery } = loginApi;
