import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { ReviewComment } from '@/structures/types';
import { HttpMethod } from 'http-enums';

export type GetReviewCommentsParams = {
  reviewId: number;
};

export type CreateReviewCommentBody = {
  reviewId: number;
  userId: number;
  comment: string;
};

const reviewCommentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviewComments: builder.query<ReviewComment[], GetReviewCommentsParams>({
      query: (params: GetReviewCommentsParams) => ({
        url: ApiEndpoint.REVIEW_COMMENTS,
        params,
      }),
      providesTags: ['ReviewComments'],
    }),
    createReviewComment: builder.mutation<void, CreateReviewCommentBody>({
      query: (body: CreateReviewCommentBody) => ({
        url: ApiEndpoint.REVIEW_COMMENTS,
        method: HttpMethod.POST,
        body,
      }),
      invalidatesTags: ['ReviewComments', 'Reviews'],
    }),
  }),
});

export const { useGetReviewCommentsQuery, useCreateReviewCommentMutation } =
  reviewCommentApi;
