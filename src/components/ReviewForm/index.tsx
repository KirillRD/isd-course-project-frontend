import { useTranslation } from 'react-i18next';
import { Editor, EditorTextChangeEvent } from 'primereact/editor';
import { InputNumber } from 'primereact/inputnumber';
import { AutoComplete } from 'primereact/autocomplete';
import {
  GRADE_STEP,
  MAX_GRADE,
  MAX_IMAGE_SIZE,
  MIN_GRADE,
} from '@/utils/constants';
import useSubmit from './hooks/useSubmit';
import useReviewForm from './hooks/useReviewForm';
import useTags from './hooks/useTags';
import useImages from './hooks/useImages';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { ReviewImageBody, TagBody } from '@/redux/api/reviewApi';
import { Review } from '@/structures/types';

export type ReviewFormBody = {
  title: string;
  body: string;
  grade: number;
  tags?: TagBody[];
  images?: ReviewImageBody[];
};

type ReviewFormProps = {
  onSubmit: (reviewFormBody: ReviewFormBody) => Promise<Review>;
  reviewFormBody?: ReviewFormBody;
};

export default function ReviewForm({
  onSubmit,
  reviewFormBody,
}: ReviewFormProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });
  const { submit } = useSubmit(onSubmit);
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    titleValue,
    isTitleError,
    titleError,
    bodyValue,
    isBodyError,
    bodyError,
    gradeValue,
    isGradeError,
    gradeError,
    tagsValue,
    isTagsError,
    tagsError,
    imagesValue,
  } = useReviewForm(submit, reviewFormBody);
  const { filteredTags, handleTagsChange, handleTagsCompleteMethod } = useTags(
    tagsValue!,
    setFieldValue
  );
  const { reviewImages, handleImageSelect, handleImageRemove } = useImages(
    imagesValue!,
    setFieldValue
  );

  const handleBodyChange = (event: EditorTextChangeEvent) => {
    void setFieldValue('body', event.htmlValue);
  };

  const translatePagePrefix = reviewFormBody ? 'edit-form' : 'add-form';

  return (
    <form
      className="flex flex-column p-fluid p-4 surface-card border-round border-1 surface-border"
      onSubmit={handleSubmit}
    >
      <h2 className="mt-0">{t(`${translatePagePrefix}.header`)}</h2>

      <div className="field">
        <label htmlFor="title">{t('title')}</label>
        <InputText
          className={classNames({ 'p-invalid': isTitleError })}
          id="title"
          type="text"
          value={titleValue}
          onChange={handleChange}
        />
        <small className="p-error">{titleError}</small>
      </div>

      <div className="field">
        <label htmlFor="body">{t('body')}</label>
        <Editor
          id="body"
          value={bodyValue}
          onTextChange={handleBodyChange}
          style={{ minHeight: '300px' }}
        />
        <small className="p-error">{bodyError}</small>
      </div>

      <div className="field w-9rem">
        <label htmlFor="grade">{t('grade')}</label>
        <InputNumber
          className={classNames({ 'p-invalid': isGradeError })}
          id="grade"
          value={gradeValue}
          onValueChange={handleChange}
          min={MIN_GRADE}
          max={MAX_GRADE}
          step={GRADE_STEP}
          showButtons
          buttonLayout="horizontal"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
        <small className="p-error">{gradeError}</small>
      </div>

      <div className="field">
        <label htmlFor="tags">{t('tags')}</label>
        <AutoComplete
          className={classNames({ 'p-invalid': isTagsError })}
          id="tags"
          value={tagsValue}
          onChange={handleTagsChange}
          field="name"
          multiple
          suggestions={filteredTags}
          completeMethod={handleTagsCompleteMethod}
          forceSelection
        />
        <small className="p-error">{tagsError}</small>
      </div>

      <div className="field">
        <label htmlFor="images">{t('images')}</label>
        <FileUpload
          ref={reviewImages}
          id="images"
          onSelect={handleImageSelect}
          onRemove={handleImageRemove}
          multiple
          accept="image/*"
          maxFileSize={MAX_IMAGE_SIZE}
          uploadOptions={{ className: 'hidden' }}
          cancelOptions={{ className: 'hidden' }}
        />
      </div>

      <Button
        className="w-9rem align-self-end"
        type="submit"
        label={t(`${translatePagePrefix}.submit-button`)!}
      />
    </form>
  );
}
