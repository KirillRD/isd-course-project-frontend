import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, object, string } from 'yup';
import { LoginFormBody } from '@/components/LoginForm';

const loginValidationSchema: ObjectSchema<LoginFormBody> = object({
  email: string()
    .email('email.format')
    .required('email.required')
    .max(50, 'email.length'),
  password: string().required('password.required'),
});

export default function useLoginForm(submit: (values: LoginFormBody) => void) {
  const [t] = useTranslation('translation', { keyPrefix: 'validation.user' });

  const formik = useFormik<LoginFormBody>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: LoginFormBody) => {
      submit(values);
    },
  });

  const isEmailError = formik.touched.email && !!formik.errors.email;
  const isPasswordError = formik.touched.password && !!formik.errors.password;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    emailValue: formik.values.email,
    isEmailError,
    emailError: isEmailError && t(formik.errors.email!),
    passwordValue: formik.values.password,
    isPasswordError,
    passwordError: isPasswordError && t(formik.errors.password!),
  };
}
