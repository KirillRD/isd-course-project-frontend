import UserInfo from '@/components/UserInfo';
import ReviewTable from '@/components/ReviewTable';
import useGetUserById from '@/hooks/api/user/useGetUserById';
import { Review } from '@/structures/types';
import useCheckExists from '@/hooks/useCheckExists';

type UserProfileProps = {
  userId: number;
};

export default function UserProfile({ userId }: UserProfileProps) {
  const { user, error } = useGetUserById(userId);
  useCheckExists(error);

  return (
    <div className="flex flex-column gap-2">
      {user && <UserInfo user={user} />}
      {user && <ReviewTable reviews={user?.reviews as Review[]} />}
    </div>
  );
}
