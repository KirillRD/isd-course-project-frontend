import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { Review } from '@/structures/types';
import { HttpMethod } from 'http-enums';

export type TagBody = {
  id?: number;
  name?: string;
};

export type ReviewImageBody = {
  file: string;
};

export type CreateReviewBody = {
  userId: number;
  creationId: number;
  title: string;
  body: string;
  grade: number;
  tags?: TagBody[];
  images?: ReviewImageBody[];
};

export type UpdateReviewBody = {
  id: number;
  title: string;
  body: string;
  grade: number;
  tags?: TagBody[];
  images?: ReviewImageBody[];
};

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviewById: builder.query<Review, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.REVIEWS}/${id}`,
      }),
      providesTags: ['Reviews'],
    }),
    createReview: builder.mutation<Review, CreateReviewBody>({
      query: (body: CreateReviewBody) => ({
        url: ApiEndpoint.REVIEWS,
        method: HttpMethod.POST,
        body,
      }),
      invalidatesTags: ['Reviews'],
    }),
    updateReview: builder.mutation<Review, UpdateReviewBody>({
      query: ({ id, ...body }) => ({
        url: `${ApiEndpoint.REVIEWS}/${id}`,
        method: HttpMethod.PUT,
        body,
      }),
      invalidatesTags: ['Reviews'],
    }),
    deleteReview: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `${ApiEndpoint.REVIEWS}/${id}`,
        method: HttpMethod.DELETE,
      }),
      invalidatesTags: ['Reviews'],
    }),
  }),
});

export const {
  useGetReviewByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
