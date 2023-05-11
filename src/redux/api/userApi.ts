import api from '@/redux/api';
import { ApiEndpoint, Role } from '@/structures/enums';
import { User } from '@/structures/types';
import { HttpMethod } from 'http-enums';

export type GetUserCountParams = {
  search?: string;
};

export type GetUsersParams = {
  page: number;
  size: number;
} & GetUserCountParams;

export type UpdateUserBody = {
  id: number;
  email?: string;
  name?: string;
  isLock?: boolean;
  roles?: Role[];
};

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.USERS}/${id}`,
      }),
      providesTags: ['Users', 'Reviews'],
    }),
    getUsers: builder.query<User[], GetUsersParams>({
      query: (params: GetUsersParams) => ({
        url: ApiEndpoint.USERS,
        params,
      }),
      providesTags: ['Users'],
    }),
    getUserCount: builder.query<number, GetUserCountParams>({
      query: (params: GetUserCountParams) => ({
        url: `${ApiEndpoint.USERS}/count`,
        params,
      }),
      providesTags: ['Users'],
    }),
    updateUser: builder.mutation<void, UpdateUserBody>({
      query: ({ id, ...body }) => ({
        url: `${ApiEndpoint.USERS}/${id}`,
        method: HttpMethod.PATCH,
        body,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.USERS}/${id}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetUsersQuery,
  useGetUserCountQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
