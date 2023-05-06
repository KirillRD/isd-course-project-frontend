import { ReviewFormBody } from '@/components/ReviewForm';
import useUpdateReview from '@/hooks/api/review/useUpdateReview';
import { Review } from '@/structures/types';

export default function useHandleSubmit(reviewId: number) {
  const { updateReview } = useUpdateReview();

  const handleSubmit = async (body: ReviewFormBody): Promise<Review> => {
    return updateReview({ id: reviewId, ...body });
  };

  return { handleSubmit };
}
