import { ReviewCommentFormBody } from '@/components/ReviewCommentForm';
import useCreateReviewComment from '@/hooks/api/review-comment/useCreateReviewComment';
import useCheckAuthUser from '@/hooks/useCheckAuthUser';
import { useParams } from 'react-router-dom';

export default function useSubmit() {
  const { createReviewComment } = useCreateReviewComment();
  const { checkAuthUser } = useCheckAuthUser();
  const params = useParams();

  const submit = (body: ReviewCommentFormBody) => {
    const userId = checkAuthUser();
    if (userId) {
      void createReviewComment({
        ...body,
        reviewId: Number(params.reviewId),
        userId,
      });
    }
  };

  return { submit };
}
