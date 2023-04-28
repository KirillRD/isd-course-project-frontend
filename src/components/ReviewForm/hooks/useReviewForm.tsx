import { ReviewFormBody } from '@/components/ReviewForm';
import { MAX_GARDE, MIN_GRADE } from '@/utils/constants';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, array, number, object, string } from 'yup';

const reviewFormValidationSchema: ObjectSchema<ReviewFormBody> = object({
  title: string().required('title.required').max(150, 'title.length'),
  body: string().required('body.required'),
  grade: number()
    .required('grade.required')
    .min(MIN_GRADE, 'grade.min')
    .max(MAX_GARDE, 'grade.max')
    .integer('grade.format'),
  tags: array()
    .of(
      object({
        id: number().optional(),
        name: string().optional().max(30, 'tag.name.length'),
      })
    )
    .optional(),
  images: array().optional(),
});

export default function useReviewForm(
  submit: (values: ReviewFormBody) => void,
  reviewFormBody?: ReviewFormBody
) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'validation.review',
  });

  const formik = useFormik<ReviewFormBody>({
    initialValues: reviewFormBody ?? {
      title: '',
      body: '',
      grade: 0,
      tags: [],
      images: [],
    },
    validationSchema: reviewFormValidationSchema,
    onSubmit: (values: ReviewFormBody) => {
      submit(values);
    },
  });

  const isTitleError = formik.touched.title && !!formik.errors.title;
  const isBodyError = formik.touched.body && !!formik.errors.body;
  const isGradeError = formik.touched.grade && !!formik.errors.grade;
  const isTagsError = formik.touched.tags && !!formik.errors.tags;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    setFieldValue: formik.setFieldValue,

    titleValue: formik.values.title,
    isTitleError,
    titleError: isTitleError && t(formik.errors.title!),

    bodyValue: formik.values.body,
    isBodyError,
    bodyError: isBodyError && t(formik.errors.body!),

    gradeValue: formik.values.grade,
    isGradeError,
    gardeError: isGradeError && t(formik.errors.grade!),

    tagsValue: formik.values.tags,
    isTagsError,
    tagsError: isTagsError && t(formik.errors.tags!),

    imagesValue: formik.values.images,
  };
}
