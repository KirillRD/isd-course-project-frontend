import api from '@/redux/api';
import { AccessTokenResponse } from '@/redux/api/types';
import { ApiEndpoint } from '@/structures/enums';
import { User } from '@/structures/types';
import { HttpMethod } from 'http-enums';

export enum AuthEndpoint {
  SIGN_UP = '/sign-up',
  LOGIN = '/login',
  GOOGLE_LOGIN = '/google-login',
  LOGOUT = '/refresh-token/logout',
  PROFILE = '/profile',
}

export type SignUpBody = {
  email: string;
  name: string;
  password: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export type CredentialBody = {
  credential: string;
};

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AccessTokenResponse, SignUpBody>({
      query: (body: SignUpBody) => ({
        url: `${ApiEndpoint.AUTH}${AuthEndpoint.SIGN_UP}`,
        method: HttpMethod.POST,
        body,
      }),
    }),
    login: builder.mutation<AccessTokenResponse, LoginBody>({
      query: (body: LoginBody) => ({
        url: `${ApiEndpoint.AUTH}${AuthEndpoint.LOGIN}`,
        method: HttpMethod.POST,
        body,
      }),
    }),
    googleLogin: builder.mutation<AccessTokenResponse, CredentialBody>({
      query: (body: CredentialBody) => ({
        url: `${ApiEndpoint.AUTH}${AuthEndpoint.GOOGLE_LOGIN}`,
        method: HttpMethod.POST,
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${ApiEndpoint.AUTH}${AuthEndpoint.LOGOUT}`,
        method: HttpMethod.POST,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => ({
        url: `${ApiEndpoint.AUTH}${AuthEndpoint.PROFILE}`,
      }),
      providesTags: ['AuthUser'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useGoogleLoginMutation,
  useLogoutMutation,
  useGetProfileQuery,
} = authApi;
