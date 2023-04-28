import {
  UpdateReviewBody,
  useUpdateReviewMutation,
} from '@/redux/api/reviewApi';
import { Review } from '@/structures/types';

export default function useUpdateReview() {
  const [updateReviewMutation] = useUpdateReviewMutation();

  const updateReview = async (
    updateReviewBody: UpdateReviewBody
  ): Promise<Review> => {
    return updateReviewMutation(updateReviewBody).unwrap();
  };

  return { updateReview };
}
