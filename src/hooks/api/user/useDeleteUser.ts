import { useDeleteUserMutation } from '@/redux/api/userApi';

export default function useDeleteUser() {
  const [deleteUserMutation] = useDeleteUserMutation();

  const deleteUser = (id: number) => {
    void deleteUserMutation(id);
  };

  return { deleteUser };
}
