import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { HttpMethod } from 'http-enums';

export type CreationRatingBody = {
  creationId: number;
  userId: number;
  rating: number;
};

export type DeleteCreationRatingBody = {
  creationId: number;
  userId: number;
};

const creationRatingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createCreationRating: builder.mutation<void, CreationRatingBody>({
      query: (body: CreationRatingBody) => ({
        url: ApiEndpoint.CREATION_RATINGS,
        method: HttpMethod.POST,
        body,
      }),
      invalidatesTags: ['Creations', 'Reviews'],
    }),
    updateCreationRating: builder.mutation<void, CreationRatingBody>({
      query: (body: CreationRatingBody) => ({
        url: ApiEndpoint.CREATION_RATINGS,
        method: HttpMethod.PUT,
        body,
      }),
      invalidatesTags: ['Creations', 'Reviews'],
    }),
    deleteCreationRating: builder.mutation<void, DeleteCreationRatingBody>({
      query: (body: DeleteCreationRatingBody) => ({
        url: ApiEndpoint.CREATION_RATINGS,
        method: HttpMethod.DELETE,
        body,
      }),
      invalidatesTags: ['Creations', 'Reviews'],
    }),
  }),
});

export const {
  useCreateCreationRatingMutation,
  useUpdateCreationRatingMutation,
  useDeleteCreationRatingMutation,
} = creationRatingApi;
