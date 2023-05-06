import useReviewCommentForm from '@/components/ReviewCommentForm/hooks/useReviewCommentForm';
import useSubmit from '@/components/ReviewCommentForm/hooks/useSubmit';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { classNames } from 'primereact/utils';
import { useTranslation } from 'react-i18next';

export type ReviewCommentFormBody = {
  comment: string;
};

type ReviewCommentFormProps = {
  className?: string;
};

export default function ReviewCommentForm({
  className,
}: ReviewCommentFormProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review-comment' });
  const { submit } = useSubmit();
  const {
    handleSubmit,
    handleChange,
    commentValue,
    isCommentError,
    commentError,
  } = useReviewCommentForm(submit);

  return (
    <form
      className={`flex flex-column p-fluid ${className!}`}
      onSubmit={handleSubmit}
    >
      <div className="field">
        <InputTextarea
          className={classNames({ 'p-invalid': isCommentError })}
          id="comment"
          value={commentValue}
          onChange={handleChange}
          placeholder={t('comment')!}
          rows={5}
          autoResize
          style={{ resize: 'vertical' }}
        />
        <small className="p-error">{commentError}</small>
      </div>

      <Button
        type="submit"
        label={t('add-form.submit-button')!}
        className="max-w-min align-self-end"
      />
    </form>
  );
}
