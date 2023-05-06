import CreationAutoComplete from '@/components/ReviewList/components/CreationAutoComplete';
import CreationCategoryMultiselect from '@/components/ReviewList/components/CreationCategoryMultiselect';
import ReviewInputText from '@/components/ReviewList/components/ReviewInputText';
import ReviewOrderDropdown from '@/components/ReviewList/components/ReviewOrderDropdown';
import TagMultiselect from '@/components/ReviewList/components/TagMultiselect';
import { ReviewOrderOption } from '@/redux/api/reviewApi';
import { CreationCategory } from '@/structures/enums';
import { useTranslation } from 'react-i18next';

type ReviewListHeaderProps = {
  reviewOrderValue: ReviewOrderOption;
  onReviewOrderChange: (order: ReviewOrderOption) => void;
  reviewValue: string | undefined;
  onReviewChange: (review: string | undefined) => void;
  creationValue: number | undefined;
  onCreationChange: (creation: number | undefined) => void;
  tagsValue: number[] | undefined;
  onTagsChange: (tags: number[] | undefined) => void;
  creationCategoriesValue: CreationCategory[] | undefined;
  onCreationCategoriesChange: (
    creationCategories: CreationCategory[] | undefined
  ) => void;
};

export default function ReviewListHeader({
  reviewOrderValue,
  onReviewOrderChange,
  reviewValue,
  onReviewChange,
  creationValue,
  onCreationChange,
  tagsValue,
  onTagsChange,
  creationCategoriesValue,
  onCreationCategoriesChange,
}: ReviewListHeaderProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'review.list.header',
  });

  return (
    <div className="grid p-fluid">
      <div className="col-6">
        <div className="field m-0">
          <label htmlFor="creation">{t('creation')}</label>
          <CreationAutoComplete
            inputId="creation"
            value={creationValue}
            onChange={onCreationChange}
          />
        </div>
      </div>
      <div className="col-6">
        <div className="field m-0">
          <label htmlFor="review">{t('review')}</label>
          <ReviewInputText
            inputId="review"
            value={reviewValue}
            onChange={onReviewChange}
          />
        </div>
      </div>
      <div className="col-5">
        <div className="field m-0">
          <label htmlFor="creation-categories">
            {t('creation-categories')}
          </label>
          <CreationCategoryMultiselect
            inputId="creation-categories"
            value={creationCategoriesValue}
            onChange={onCreationCategoriesChange}
          />
        </div>
      </div>
      <div className="col-5">
        <div className="field m-0">
          <label htmlFor="tags">{t('tags')}</label>
          <TagMultiselect
            inputId="tags"
            value={tagsValue}
            onChange={onTagsChange}
          />
        </div>
      </div>
      <div className="col-2">
        <div className="field m-0">
          <label htmlFor="order">{t('order')}</label>
          <ReviewOrderDropdown
            inputId="order"
            value={reviewOrderValue}
            onChange={onReviewOrderChange}
          />
        </div>
      </div>
    </div>
  );
}
