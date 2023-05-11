import ReviewUpdate from '@/components/ReviewUpdate';
import useReviewUpdate from '@/pages/ReviewUpdatePage/hooks/useReviewUpdate';

export default function ReviewUpdatePage() {
  const { review } = useReviewUpdate();

  return (
    <div className="xl:col-6 lg:col-8 md:col-10 col-12">
      {review && <ReviewUpdate review={review} />}
    </div>
  );
}
