import useGetReviewComments from '@/hooks/api/review-comment/useGetReviewComments';
import { useParams } from 'react-router-dom';

export default function useReviewComments() {
  const params = useParams();
  const { reviewComments } = useGetReviewComments({
    reviewId: Number(params.reviewId),
  });

  return { reviewComments };
}
