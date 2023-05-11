import { CreateCreationBody } from '@/redux/api/creationApi';
import { CreationCategory } from '@/structures/enums';
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
  imageFile: string().required('image.required'),
});

export default function useCreationForm(
  submit: (values: CreateCreationBody) => void
) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'validation.creation',
  });

  const formik = useFormik<CreateCreationBody>({
    initialValues: {
      title: '',
      category: null as unknown as CreationCategory,
      description: '',
      imageFile: '',
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
  const isImageFileError =
    formik.touched.imageFile && !!formik.errors.imageFile;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    setFieldValue: formik.setFieldValue,

    titleValue: formik.values.title,
    isTitleError,
    titleError: isTitleError && t(formik.errors.title!),

    categoryValue: formik.values.category,
    isCategoryError,
    categoryError: isCategoryError && t(formik.errors.category!),

    descriptionValue: formik.values.description,
    isDescriptionError,
    descriptionError: isDescriptionError && t(formik.errors.description!),

    imageFileValue: formik.values.imageFile,
    isImageFileError,
    imageFileError: isImageFileError && t(formik.errors.imageFile!),
  };
}
