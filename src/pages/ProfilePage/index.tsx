import UserProfile from '@/components/UserProfile';
import { useAppSelector } from '@/hooks/useRedux';

export default function ProfilePage() {
  const authUser = useAppSelector((state) => state.authUser.user);

  return (
    <div className="xl:col-9 col-12">
      <UserProfile userId={authUser?.id as number} />
    </div>
  );
}
