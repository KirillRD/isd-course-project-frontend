import {
  CreateReviewCommentBody,
  useCreateReviewCommentMutation,
} from '@/redux/api/reviewCommentApi';

export default function useCreateReviewComment() {
  const [createReviewCommentMutation] = useCreateReviewCommentMutation();

  const createReviewComment = async (
    createReviewCommentBody: CreateReviewCommentBody
  ) => {
    return createReviewCommentMutation(createReviewCommentBody).unwrap();
  };

  return { createReviewComment };
}
