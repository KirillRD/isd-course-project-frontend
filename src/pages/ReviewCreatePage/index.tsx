import ReviewCreate from '@/components/ReviewCreate';
import useReviewCreate from '@/pages/ReviewCreatePage/hooks/useReviewCreate';

export default function ReviewCreatePage() {
  const { userId, creation } = useReviewCreate();

  return (
    <div className="xl:col-6 lg:col-8 md:col-10 col-12">
      {creation && <ReviewCreate userId={userId!} creation={creation} />}
    </div>
  );
}
