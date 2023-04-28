import useEditUserForm from '@/components/UserTable/components/EditUserForm/hooks/useEditUserForm';
import { User } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import { InputSwitch } from 'primereact/inputswitch';
import { Role } from '@/structures/enums';
import RoleTag from '@/components/ui/RoleTag';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { UpdateUserBody } from '@/redux/api/userApi';

type EditUserFormProps = {
  user: User;
  onSubmit: (updateUserBody: UpdateUserBody) => void;
  onHide: () => void;
};

export default function EditUserForm({
  user,
  onSubmit,
  onHide,
}: EditUserFormProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'user.edit-dialog.form',
  });
  const {
    handleSubmit,
    handleChange,
    isLockValue,
    rolesValue,
    isRolesError,
    rolesError,
  } = useEditUserForm(user, onSubmit);

  return (
    <form className="flex flex-column" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="isLock" className="w-full">
          {t('lock')}
        </label>
        <InputSwitch
          id="isLock"
          checked={isLockValue}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="roles">{t('roles')}</label>
        <div className="flex flex-column gap-2">
          {Object.values(Role).map((role) => (
            <div key={role} className="flex align-items-center">
              <Checkbox
                className={classNames({ 'p-invalid': isRolesError })}
                inputId={role}
                name="roles"
                checked={rolesValue.includes(role)}
                value={role}
                onChange={handleChange}
              />
              <label htmlFor={role} className="ml-2">
                <RoleTag role={role} />
              </label>
            </div>
          ))}
        </div>
        <small className="p-error">{rolesError}</small>
      </div>

      <div className="flex justify-content-end gap-2">
        <Button label={t('cancel-button')!} outlined onClick={onHide} />
        <Button type="submit" label={t('confirm-button')!} />
      </div>
    </form>
  );
}
