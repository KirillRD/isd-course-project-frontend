import { useGetReviewByIdQuery } from '@/redux/api/reviewApi';

export default function useGetReviewById(id: number) {
  const { data, error } = useGetReviewByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  return { review: data, error };
}
