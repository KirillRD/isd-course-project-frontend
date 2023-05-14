import { UpdateUserBody } from '@/redux/api/userApi';
import { Role } from '@/structures/enums';
import { User } from '@/structures/types';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

type EditUserData = {
  isLock: boolean;
  roles: Role[];
};

const validate = (values: EditUserData) => {
  let errors = {};

  if (!values.roles.length) {
    errors = {
      ...errors,
      roles: 'roles.length',
    };
  }

  return errors;
};

export default function useEditUserForm(
  user: User,
  onSubmit: (updateUserBody: UpdateUserBody) => void
) {
  const [t] = useTranslation('translation', { keyPrefix: 'validation.user' });
  const formik = useFormik<EditUserData>({
    initialValues: {
      isLock: user.isLock,
      roles: user.roles,
    },
    validate,
    onSubmit: (values: EditUserData) => onSubmit({ id: user.id, ...values }),
  });

  const isRolesError = formik.touched.roles && !!formik.errors.roles;

  return {
    handleSubmit: formik.handleSubmit,
    handleChange: formik.handleChange,
    isLockValue: formik.values.isLock,
    rolesValue: formik.values.roles,
    isRolesError,
    rolesError: isRolesError && t(formik.errors.roles!),
  };
}
