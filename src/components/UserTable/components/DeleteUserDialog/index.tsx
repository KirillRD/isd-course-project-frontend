import DeleteConfirmDialog from '@/components/ui/DeleteConfirmDialog';
import useDeleteUser from '@/hooks/api/user/useDeleteUser';
import { User } from '@/structures/types';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { useTranslation } from 'react-i18next';

type DeleteUserDialogProps = {
  user: User;
  visible: boolean;
  onHide: () => void;
};

export default function DeleteUserDialog({
  user,
  visible,
  onHide,
}: DeleteUserDialogProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'user.delete-dialog',
  });
  const { deleteUser } = useDeleteUser();

  const handleAccept = () => {
    deleteUser(user.id);
  };

  return (
    <DeleteConfirmDialog
      header={t('header')}
      message={t('message')}
      visible={visible}
      onAccept={handleAccept}
      onHide={onHide}
    />
  );
}
