import { ReviewFormBody } from '@/components/ReviewForm';
import useCreateReview from '@/hooks/api/review/useCreateReview';
import { Review } from '@/structures/types';

export default function useHandleSubmit(userId: number, creationId: number) {
  const { createReview } = useCreateReview();

  const handleSubmit = async (body: ReviewFormBody): Promise<Review> => {
    return createReview({ userId, creationId, ...body });
  };

  return { handleSubmit };
}
