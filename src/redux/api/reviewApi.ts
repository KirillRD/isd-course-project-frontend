import api from '@/redux/api';
import { ApiEndpoint, CreationCategory } from '@/structures/enums';
import { Review } from '@/structures/types';
import { HttpMethod } from 'http-enums';
import queryString from 'query-string';

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

export const reviewOrderOptions = [
  'review-create-date-desc',
  'review-create-date-asc',
  'review-title-asc',
  'review-title-desc',
  'review-grade-desc',
  'review-grade-asc',
] as const;

export type ReviewOrderOption = typeof reviewOrderOptions[number];

export type GetReviewCountParams = {
  review?: string;
  creation?: number;
  tag?: number[];
  'creation-category'?: CreationCategory[];
};

export type GetReviewsParams = {
  page: number;
  size: number;
  order: ReviewOrderOption;
} & GetReviewCountParams;

const reviewApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<Review[], GetReviewsParams>({
      query: (params: GetReviewsParams) => ({
        url: ApiEndpoint.REVIEWS,
        params: queryString.stringify(params) as unknown as Record<string, any>,
      }),
      providesTags: ['Reviews'],
    }),
    getReviewCount: builder.query<number, GetReviewCountParams>({
      query: (params: GetReviewCountParams) => ({
        url: `${ApiEndpoint.REVIEWS}/count`,
        params: queryString.stringify(params) as unknown as Record<string, any>,
      }),
      providesTags: ['Reviews'],
    }),
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
      invalidatesTags: ['Reviews', 'Tags'],
    }),
    updateReview: builder.mutation<Review, UpdateReviewBody>({
      query: ({ id, ...body }) => ({
        url: `${ApiEndpoint.REVIEWS}/${id}`,
        method: HttpMethod.PUT,
        body,
      }),
      invalidatesTags: ['Reviews', 'Tags'],
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
  useGetReviewsQuery,
  useGetReviewCountQuery,
  useGetReviewByIdQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useDeleteReviewMutation,
} = reviewApi;
