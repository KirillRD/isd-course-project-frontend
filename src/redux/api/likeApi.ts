import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { HttpMethod } from 'http-enums';

export type LikeBody = {
  userId: number;
  reviewId: number;
};

const likeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createLike: builder.mutation<void, LikeBody>({
      query: (body: LikeBody) => ({
        url: ApiEndpoint.LIKES,
        method: HttpMethod.POST,
        body,
      }),
      invalidatesTags: ['Reviews', 'ReviewComments'],
    }),
    deleteLike: builder.mutation<void, LikeBody>({
      query: (body: LikeBody) => ({
        url: ApiEndpoint.LIKES,
        method: HttpMethod.DELETE,
        body,
      }),
      invalidatesTags: ['Reviews', 'ReviewComments'],
    }),
  }),
});

export const { useCreateLikeMutation, useDeleteLikeMutation } = likeApi;
