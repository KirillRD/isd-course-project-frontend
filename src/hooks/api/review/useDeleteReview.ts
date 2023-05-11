import { useDeleteReviewMutation } from '@/redux/api/reviewApi';

export default function useDeleteReview() {
  const [deleteReviewMutation] = useDeleteReviewMutation();

  const deleteReview = (id: number) => {
    void deleteReviewMutation(id);
  };

  return { deleteReview };
}
