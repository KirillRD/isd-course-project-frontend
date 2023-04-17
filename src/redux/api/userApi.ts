import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { User } from '@/structures/types';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query<User, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.USERS}${id}`,
      }),
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
