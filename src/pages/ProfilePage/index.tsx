import UserProfile from '@/components/UserProfile';
import { useAppSelector } from '@/hooks/useRedux';

export default function ProfilePage() {
  const authUser = useAppSelector((state) => state.authUser.user);

  return (
    <div className="col-10">
      <UserProfile userId={authUser?.id as number} />
    </div>
  );
}
