import ReviewCreate from '@/components/ReviewCreate';
import useReviewCreate from '@/pages/ReviewCreatePage/hooks/useReviewCreate';

export default function ReviewCreatePage() {
  const { userId, creation } = useReviewCreate();

  return (
    <div className="col-5">
      {creation && <ReviewCreate userId={userId!} creation={creation} />}
    </div>
  );
}
