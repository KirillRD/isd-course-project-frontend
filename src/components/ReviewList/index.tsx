import ReviewListHeader from '@/components/ReviewList/components/ReviewListHeader';
import useReviewList from '@/components/ReviewList/hooks/useReviewList';
import Card from '@/components/ui/Card';
import ReviewItem from '@/components/ui/ReviewItem';
import { Review } from '@/structures/types';
import { DataView } from 'primereact/dataview';
import { useTranslation } from 'react-i18next';

export default function ReviewList() {
  const [t] = useTranslation('translation', { keyPrefix: 'review.list' });
  const {
    reviews,
    reviewCount,
    pageSize,
    firstRowIndex,
    handlePage,
    reviewOrderValue,
    handleReviewOrderChange,
    reviewValue,
    handleReviewChange,
    creationValue,
    handleCreationChange,
    tagsValue,
    handleTagsChange,
    creationCategoriesValue,
    handleCreationCategoriesChange,
  } = useReviewList();

  const itemTemplate = (review: Review) => {
    return <ReviewItem review={review} />;
  };

  return (
    <Card>
      <h2 className="mt-0">{t('title')}</h2>
      <DataView
        value={reviews}
        dataKey="id"
        lazy
        paginator
        onPage={handlePage}
        totalRecords={reviewCount}
        rows={pageSize}
        first={firstRowIndex}
        itemTemplate={itemTemplate}
        header={
          <ReviewListHeader
            reviewOrderValue={reviewOrderValue}
            onReviewOrderChange={handleReviewOrderChange}
            reviewValue={reviewValue}
            onReviewChange={handleReviewChange}
            creationValue={creationValue}
            onCreationChange={handleCreationChange}
            tagsValue={tagsValue}
            onTagsChange={handleTagsChange}
            creationCategoriesValue={creationCategoriesValue}
            onCreationCategoriesChange={handleCreationCategoriesChange}
          />
        }
      />
    </Card>
  );
}
