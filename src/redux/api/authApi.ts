import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import {
  AccessTokenResponse,
  LoginData,
  SignUpData,
  User,
} from '@/structures/types';
import { HttpMethod } from 'http-enums';

type SignUpRequest = {
  email: string;
  name: string;
  password: string;
};

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<AccessTokenResponse, SignUpRequest>({
      query: (body: SignUpData) => ({
        url: ApiEndpoint.SIGN_UP,
        method: HttpMethod.POST,
        body: {
          email: body.email,
          name: body.name,
          password: body.password,
        },
      }),
    }),
    login: builder.mutation<AccessTokenResponse, LoginData>({
      query: (body: LoginData) => ({
        url: ApiEndpoint.LOGIN,
        method: HttpMethod.POST,
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: ApiEndpoint.LOGOUT,
        method: HttpMethod.POST,
      }),
    }),
    getProfile: builder.query<User, void>({
      query: () => ({
        url: ApiEndpoint.PROFILE,
      }),
      providesTags: ['AuthUser'],
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLogoutMutation,
  useGetProfileQuery,
} = authApi;
