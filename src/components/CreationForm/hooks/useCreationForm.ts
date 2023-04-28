import useErrorMessage from '@/hooks/useErrorMessage';
import { CreateCreationBody } from '@/redux/api/creationApi';
import { CreationCategory } from '@/structures/enums';
import { ErrorMessage } from '@/structures/types';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, mixed, object, string } from 'yup';

const creationFormValidationSchema: ObjectSchema<CreateCreationBody> = object({
  title: string().required('title.required').max(150, 'title.length'),
  category: mixed<CreationCategory>()
    .oneOf(Object.values(CreationCategory))
    .required('category.required'),
  description: string()
    .required('description.required')
    .max(1000, 'description.length'),
});

export default function useCreationForm(
  submit: (values: CreateCreationBody) => void,
  error: ErrorMessage | undefined
) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'validation.creation',
  });
  const { errorMessage } = useErrorMessage(error);

  const formik = useFormik<CreateCreationBody>({
    initialValues: {
      title: '',
      category: null as unknown as CreationCategory,
      description: '',
    },
    validationSchema: creationFormValidationSchema,
    onSubmit: (values: CreateCreationBody) => {
      submit(values);
    },
  });

  const isTitleError = formik.touched.title && !!formik.errors.title;
  const isCategoryError = formik.touched.category && !!formik.errors.category;
  const isDescriptionError =
    formik.touched.description && !!formik.errors.description;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,

    titleValue: formik.values.title,
    isTitleError,
    titleError: isTitleError && t(formik.errors.title!),

    categoryValue: formik.values.category,
    isCategoryError,
    categoryError: isCategoryError && t(formik.errors.category!),

    descriptionValue: formik.values.description,
    isDescriptionError,
    descriptionError: isDescriptionError && t(formik.errors.description!),

    errorMessage,
  };
}
