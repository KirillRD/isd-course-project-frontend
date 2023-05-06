import { ReviewCommentFormBody } from '@/components/ReviewCommentForm';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, object, string } from 'yup';

const reviewCommentValidationSchema: ObjectSchema<ReviewCommentFormBody> =
  object({
    comment: string().required('comment.required').max(2000, 'comment.length'),
  });

export default function useReviewCommentForm(
  submit: (values: ReviewCommentFormBody) => void
) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'validation.review-comment',
  });

  const formik = useFormik<ReviewCommentFormBody>({
    initialValues: {
      comment: '',
    },
    validationSchema: reviewCommentValidationSchema,
    onSubmit: (values: ReviewCommentFormBody) => {
      submit(values);
      formik.resetForm();
    },
  });

  const isCommentError = formik.touched.comment && !!formik.errors.comment;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,

    commentValue: formik.values.comment,
    isCommentError,
    commentError: isCommentError && t(formik.errors.comment!),
  };
}
