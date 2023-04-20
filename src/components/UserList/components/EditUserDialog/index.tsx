import EditUserForm from '@/components/UserList/components/EditUserForm';
import useUpdateUser from '@/hooks/api/user/useUpdateUser';
import { UpdateUserBody } from '@/redux/api/userApi';
import { User } from '@/structures/types';
import { Dialog } from 'primereact/dialog';
import { useTranslation } from 'react-i18next';

type EditUserDialogProps = {
  user: User;
  visible: boolean;
  onHide: () => void;
};

export default function EditUserDialog({
  user,
  visible,
  onHide,
}: EditUserDialogProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'user.edit-dialog',
  });
  const { updateUser } = useUpdateUser();

  const handleSubmit = (updateUserBody: UpdateUserBody) => {
    onHide();
    updateUser(updateUserBody);
  };

  return (
    <Dialog
      className="col-2"
      visible={visible}
      onHide={onHide}
      header={t('header')}
    >
      <EditUserForm user={user} onSubmit={handleSubmit} onHide={onHide} />
    </Dialog>
  );
}
