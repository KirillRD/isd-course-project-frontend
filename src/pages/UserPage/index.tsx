import { Button } from 'primereact/button';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { useLogoutMutation } from '@/redux/api/authApi';
import { resetAuth } from '@/redux/slices/authSlice';

export default function UserPage() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  async function onSubmit() {
    await logout();
    dispatch(resetAuth());
  }

  return (
    <div>
      <p>{authUser?.name}</p>
      <p>{authUser?.email}</p>
      <Button label="logout" onClick={onSubmit} />
    </div>
  );
}
