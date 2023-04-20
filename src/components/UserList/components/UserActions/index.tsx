import { useState } from 'react';
import TableDeleteButton from '@/components/ui/TableDeleteButton';
import TableEditButton from '@/components/ui/TableEditButton';
import EditUserDialog from '@/components/UserList/components/EditUserDialog';
import DeleteUserDialog from '@/components/UserList/components/DeleteUserDialog';
import { User } from '@/structures/types';

type UserActionsProps = {
  user: User;
};

export default function UserActions({ user }: UserActionsProps) {
  const [editUserDialogVisible, setEditUserDialogVisible] = useState(false);
  const [deleteUserDialogVisible, setDeleteUserDialogVisible] = useState(false);

  const handleEditButtonClick = () => setEditUserDialogVisible(true);

  const handleDeleteButtonClick = () => setDeleteUserDialogVisible(true);

  const handleEditUserDialogHide = () => setEditUserDialogVisible(false);

  const handleDeleteUserDialogHide = () => setDeleteUserDialogVisible(false);

  return (
    <div className="flex gap-1">
      <TableEditButton onClick={handleEditButtonClick} />
      <EditUserDialog
        user={user}
        visible={editUserDialogVisible}
        onHide={handleEditUserDialogHide}
      />
      <TableDeleteButton onClick={handleDeleteButtonClick} />
      <DeleteUserDialog
        user={user}
        visible={deleteUserDialogVisible}
        onHide={handleDeleteUserDialogHide}
      />
    </div>
  );
}
