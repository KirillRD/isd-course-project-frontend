import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, object, ref, string } from 'yup';
import { SignUpFormBody } from '@/components/SignUpForm';

const signUpValidationSchema: ObjectSchema<SignUpFormBody> = object({
  email: string()
    .email('email.format')
    .required('email.required')
    .max(50, 'email.length'),
  name: string().required('name.required').max(100, 'name.length'),
  password: string().required('password.required'),
  confirmPassword: string()
    .required('confirm-password.required')
    .oneOf([ref('password')], 'confirm-password.format'),
});

export default function useSignUpForm(
  submit: (values: SignUpFormBody) => void
) {
  const [t] = useTranslation('translation', { keyPrefix: 'validation.user' });

  const formik = useFormik<SignUpFormBody>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values: SignUpFormBody) => {
      submit(values);
    },
  });

  const isEmailError = formik.touched.email && !!formik.errors.email;
  const isNameError = formik.touched.name && !!formik.errors.name;
  const isPasswordError = formik.touched.password && !!formik.errors.password;
  const isConfirmPasswordError =
    formik.touched.confirmPassword && !!formik.errors.confirmPassword;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    emailValue: formik.values.email,
    isEmailError,
    emailError: isEmailError && t(formik.errors.email!),
    nameValue: formik.values.name,
    isNameError,
    nameError: isNameError && t(formik.errors.name!),
    passwordValue: formik.values.password,
    isPasswordError,
    passwordError: isPasswordError && t(formik.errors.password!),
    confirmPasswordValue: formik.values.confirmPassword,
    isConfirmPasswordError,
    confirmPasswordError:
      isConfirmPasswordError && t(formik.errors.confirmPassword!),
  };
}
