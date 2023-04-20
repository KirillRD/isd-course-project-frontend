import { UpdateUserBody, useUpdateUserMutation } from '@/redux/api/userApi';

export default function useUpdateUser() {
  const [updateUserMutation] = useUpdateUserMutation();

  const updateUser = (updateUserBody: UpdateUserBody) => {
    void updateUserMutation(updateUserBody);
  };

  return { updateUser };
}
