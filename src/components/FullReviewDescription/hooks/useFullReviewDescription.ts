import useGetReviewById from '@/hooks/api/review/useGetReviewById';
import useCheckExists from '@/hooks/useCheckExists';
import { useParams } from 'react-router-dom';

export default function useFullReviewDescription() {
  const params = useParams();
  const { review, error } = useGetReviewById(Number(params.reviewId));
  useCheckExists(error);

  return { review };
}
