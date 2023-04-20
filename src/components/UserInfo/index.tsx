import { useAppDispatch } from '@/hooks/useRedux';
import { useLogoutMutation } from '@/redux/api/authApi';
import { resetAuth } from '@/redux/slices/authSlice';
import { User } from '@/structures/types';
import { Button } from 'primereact/button';

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  async function onSubmit() {
    await logout();
    dispatch(resetAuth());
  }

  return (
    <div className="p-4 surface-card border-round border-1 surface-border">
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.signUpDate.toString()}</p>
      <Button label="logout" onClick={onSubmit} />
    </div>
  );
}