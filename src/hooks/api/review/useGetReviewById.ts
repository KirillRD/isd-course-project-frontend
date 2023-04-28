import useCheckExists from '@/hooks/useCheckExists';
import { useGetReviewByIdQuery } from '@/redux/api/reviewApi';
import { ResponseError } from '@/structures/types';

export default function useGetReviewById(id: number) {
  const { data, error } = useGetReviewByIdQuery(id);

  useCheckExists(error as ResponseError);

  return { review: data };
}
