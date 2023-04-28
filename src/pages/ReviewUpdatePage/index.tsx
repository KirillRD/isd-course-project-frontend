import ReviewUpdate from '@/components/ReviewUpdate';
import useReviewUpdate from '@/pages/ReviewUpdatePage/hooks/useReviewUpdate';

export default function ReviewUpdatePage() {
  const { review } = useReviewUpdate();

  return (
    <div className="col-5">{review && <ReviewUpdate review={review} />}</div>
  );
}
