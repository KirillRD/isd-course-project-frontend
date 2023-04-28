import { GetTagsParams, useGetTagsQuery } from '@/redux/api/tagApi';

export default function useGetTags(params: GetTagsParams) {
  const { data } = useGetTagsQuery(params, {
    refetchOnMountOrArgChange: true,
    skip: !params.search,
  });

  return { tags: data };
}
