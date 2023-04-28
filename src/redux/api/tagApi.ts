import api from '@/redux/api';
import { ApiEndpoint } from '@/structures/enums';
import { Tag } from '@/structures/types';

export type GetTagsParams = {
  search: string;
};

const tagApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTags: builder.query<Tag[], GetTagsParams>({
      query: (params: GetTagsParams) => ({
        url: ApiEndpoint.TAGS,
        params,
      }),
      providesTags: ['Tags'],
    }),
  }),
});

export const { useGetTagsQuery } = tagApi;
