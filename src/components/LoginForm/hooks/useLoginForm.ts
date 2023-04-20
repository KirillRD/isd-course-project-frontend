import { useRef } from 'react';
import useLogin from '@/components/LoginForm/hooks/useLogin';
import { LoginData } from '@/structures/types';
import { useFormik } from 'formik';
import { Messages } from 'primereact/messages';
import { useTranslation } from 'react-i18next';
import { ObjectSchema, object, string } from 'yup';

const loginValidationSchema: ObjectSchema<LoginData> = object({
  email: string()
    .email('email.format')
    .required('email.required')
    .max(50, 'email.length'),
  password: string().required('password.required'),
});

export default function useLoginForm() {
  const [t] = useTranslation('translation', { keyPrefix: 'validation' });
  const errorMessage = useRef<Messages>(null);
  const { login } = useLogin(errorMessage);

  const formik = useFormik<LoginData>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values: LoginData) => {
      login(values);
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
    errorMessage,
  };
}
