import useGetReviewById from '@/hooks/api/review/useGetReviewById';
import { useParams } from 'react-router-dom';

export default function useReviewUpdate() {
  const params = useParams();

  const { review } = useGetReviewById(Number(params.reviewId));

  return { review };
}
