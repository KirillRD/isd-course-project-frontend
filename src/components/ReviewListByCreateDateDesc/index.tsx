import ReviewListByParams from '@/components/ReviewListByParams';
import { GetReviewsParams } from '@/redux/api/reviewApi';

const translatePrefix = 'create-date-desc';

const getParams = (): GetReviewsParams => {
  return {
    page: 1,
    size: 5,
    order: 'review-create-date-desc',
  };
};

export default function ReviewListByCreateDateDesc() {
  return (
    <ReviewListByParams
      translatePrefix={translatePrefix}
      params={getParams()}
    />
  );
}
