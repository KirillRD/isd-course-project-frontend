import useGetReviewById from '@/hooks/api/review/useGetReviewById';
import { useParams } from 'react-router-dom';

export default function useFullReviewDescription() {
  const params = useParams();
  const { review } = useGetReviewById(Number(params.reviewId));

  return { review };
}
