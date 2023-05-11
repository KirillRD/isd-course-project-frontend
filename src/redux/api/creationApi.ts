import api from '@/redux/api';
import { ApiEndpoint, CreationCategory } from '@/structures/enums';
import { Creation } from '@/structures/types';
import { HttpMethod } from 'http-enums';

export type GetCreationsParams = {
  search: string;
};

export type CreateCreationBody = {
  title: string;
  description: string;
  category: CreationCategory;
  imageFile: string;
};

const creationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCreationById: builder.query<Creation, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.CREATIONS}/${id}`,
      }),
      providesTags: ['Creations'],
    }),
    getCreations: builder.query<Creation[], GetCreationsParams>({
      query: (params: GetCreationsParams) => ({
        url: ApiEndpoint.CREATIONS,
        params,
      }),
      providesTags: ['Creations'],
    }),
    createCreation: builder.mutation<Creation, CreateCreationBody>({
      query: (body: CreateCreationBody) => ({
        url: ApiEndpoint.CREATIONS,
        method: HttpMethod.POST,
        body,
      }),
      invalidatesTags: ['Creations'],
    }),
  }),
});

export const {
  useGetCreationByIdQuery,
  useGetCreationsQuery,
  useCreateCreationMutation,
} = creationApi;
