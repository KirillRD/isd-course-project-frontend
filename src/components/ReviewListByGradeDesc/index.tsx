import ReviewListByParams from '@/components/ReviewListByParams';
import { GetReviewsParams } from '@/redux/api/reviewApi';

const translatePrefix = 'grade-desc';

const params: GetReviewsParams = {
  page: 1,
  size: 5,
  order: 'review-grade-desc',
};

export default function ReviewListByGradeDesc() {
  return (
    <ReviewListByParams translatePrefix={translatePrefix} params={params} />
  );
}
