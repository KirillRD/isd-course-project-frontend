import { GetTagsParams, useGetTagsQuery } from '@/redux/api/tagApi';

type UseGetTagsArgs = {
  params?: GetTagsParams;
  stop?: boolean;
};

export default function useGetTags({ params, stop }: UseGetTagsArgs) {
  const { data } = useGetTagsQuery(params!, {
    skip: stop ?? !params?.search,
  });

  return { tags: data };
}
