import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { Tag } from '@/structures/types';
import queryString from 'query-string';

export type GetTagsParams = {
  search?: string;
  tag?: number[];
};

const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<Tag[], GetTagsParams>({
      query: (params: GetTagsParams) => ({
        url: ApiEndpoint.TAGS,
        params: queryString.stringify(params) as unknown as Record<string, any>,
      }),
      providesTags: ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
