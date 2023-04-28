import {
  CreateReviewBody,
  useCreateReviewMutation,
} from '@/redux/api/reviewApi';
import { Review } from '@/structures/types';

export default function useCreateReview() {
  const [createReviewMutation] = useCreateReviewMutation();

  const createReview = async (
    createReviewBody: CreateReviewBody
  ): Promise<Review> => {
    return createReviewMutation(createReviewBody).unwrap();
  };

  return { createReview };
}
