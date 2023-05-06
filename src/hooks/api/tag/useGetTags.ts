import { GetTagsParams, useGetTagsQuery } from '@/redux/api/tagApi';

type UseGetTagsArgs = {
  stop?: boolean;
  params?: GetTagsParams;
};

export default function useGetTags({ stop, params }: UseGetTagsArgs) {
  const { data } = useGetTagsQuery(params!, {
    skip: stop ?? !params?.search,
  });

  return { tags: data };
}
