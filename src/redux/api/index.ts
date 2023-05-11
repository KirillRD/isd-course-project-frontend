import { AccessTokenResponse, ErrorResponse } from '@/redux/api/types';
import { resetAuth, setAccessToken } from '@/redux/slices/authSlice';
import { RootState } from '@/redux/store';
import { ApiEndpoint, Exception } from '@/structures/enums';
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

type ApiBaseQueryType = ReturnType<typeof fetchBaseQuery>;

const CSRF_TOKEN_ENDPOINT = `${ApiEndpoint.AUTH}/csrf-token`;
const REFRESH_TOKENS_ENDPOINT = `${ApiEndpoint.AUTH}/refresh-token/refresh-tokens`;

const CSRF_HEADER = 'csrf-token';
const AUTH_HEADER = 'Authorization';
const ACCESS_TOKEN_BEARER = 'Bearer ';
const MUTATION = 'mutation';

type CsrfTokenResponse = {
  csrfToken: string;
};

const commonBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  credentials: 'include',
});

const baseQueryWithPrepareHeaders = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  credentials: 'include',
  prepareHeaders: async (headers, api) => {
    if (api.type == MUTATION) {
      const csrfTokenResponse = await commonBaseQuery(
        CSRF_TOKEN_ENDPOINT,
        api as BaseQueryApi,
        {}
      );
      headers.set(
        CSRF_HEADER,
        (csrfTokenResponse.data as CsrfTokenResponse).csrfToken
      );
    }
    const accessToken = (api.getState() as RootState).auth.accessToken;
    if (accessToken)
      headers.set(AUTH_HEADER, ACCESS_TOKEN_BEARER + accessToken);
    return headers;
  },
});

const baseQueryWithReAuth: ApiBaseQueryType = async (
  args,
  api,
  extraOptions
) => {
  let response = await baseQueryWithPrepareHeaders(args, api, extraOptions);

  if (response.error) {
    const message = (response.error as ErrorResponse).data.message;
    if (message == Exception.JWT_ACCESS_TOKEN_EXPIRATION) {
      const refreshResult = await commonBaseQuery(
        REFRESH_TOKENS_ENDPOINT,
        api,
        extraOptions
      );

      if (refreshResult.data) {
        api.dispatch(
          setAccessToken(
            (refreshResult.data as AccessTokenResponse).accessToken
          )
        );
        response = await baseQueryWithPrepareHeaders(args, api, extraOptions);
      } else {
        api.dispatch(resetAuth());
      }
    } else if (message == Exception.USER_IS_LOCK) {
      api.dispatch(resetAuth());
    } else if (message == Exception.USER_ROLE_ACCESS_DENIED) {
      window.location.reload();
    }
  }

  return response;
};

const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: [
    'AuthUser',
    'Users',
    'Reviews',
    'Creations',
    'Tags',
    'ReviewComments',
  ],
  endpoints: () => ({}),
});

export default api;
