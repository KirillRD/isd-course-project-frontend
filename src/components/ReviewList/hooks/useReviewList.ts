import useGetReviews from '@/hooks/api/review/useGetReviews';
import { ReviewOrderOption } from '@/redux/api/reviewApi';
import { CreationCategory } from '@/structures/enums';
import { DataViewPageEvent } from 'primereact/dataview';
import { useMemo } from 'react';

export default function useReviewList() {
  const { reviews, reviewCount, reviewsParams, setParams } = useGetReviews();
  const firstRowIndex = useMemo(
    () => (reviewsParams.page - 1) * reviewsParams.size,
    [reviewsParams]
  );

  const handlePage = (event: DataViewPageEvent) => {
    setParams({
      ...reviewsParams,
      page: ++event.page,
    });
  };

  const handleReviewOrderChange = (order: ReviewOrderOption) => {
    setParams({
      ...reviewsParams,
      order,
    });
  };

  const handleReviewChange = (review: string | undefined) => {
    setParams({
      ...reviewsParams,
      review,
    });
  };

  const handleCreationChange = (creation: number | undefined) => {
    setParams({
      ...reviewsParams,
      creation,
    });
  };

  const handleTagsChange = (tags: number[] | undefined) => {
    setParams({
      ...reviewsParams,
      tag: tags,
    });
  };

  const handleCreationCategoriesChange = (
    creationCategories: CreationCategory[] | undefined
  ) => {
    setParams({
      ...reviewsParams,
      'creation-category': creationCategories,
    });
  };

  return {
    reviews,
    reviewCount,
    pageSize: reviewsParams.size,
    firstRowIndex,
    handlePage,

    reviewOrderValue: reviewsParams.order,
    handleReviewOrderChange,

    reviewValue: reviewsParams.review,
    handleReviewChange,

    creationValue: reviewsParams.creation,
    handleCreationChange,

    tagsValue: reviewsParams.tag,
    handleTagsChange,

    creationCategoriesValue: reviewsParams['creation-category'],
    handleCreationCategoriesChange,
  };
}
