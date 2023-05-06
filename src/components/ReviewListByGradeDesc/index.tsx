import Card from '@/components/ui/Card';
import ReviewItem from '@/components/ui/ReviewItem';
import { GetReviewsParams, useGetReviewsQuery } from '@/redux/api/reviewApi';
import { Review } from '@/structures/types';
import { DataView } from 'primereact/dataview';
import { useTranslation } from 'react-i18next';

const params: GetReviewsParams = {
  page: 1,
  size: 5,
  order: 'review-grade-desc',
};

export default function ReviewListByGradeDesc() {
  const [t] = useTranslation('translation', {
    keyPrefix: 'review.list.grade-desc',
  });
  const { data } = useGetReviewsQuery(params);

  const itemTemplate = (review: Review) => {
    return <ReviewItem review={review} />;
  };

  return (
    <Card>
      <h2 className="mt-0">{t('title')}</h2>
      <DataView value={data} dataKey="id" itemTemplate={itemTemplate} />
    </Card>
  );
}
