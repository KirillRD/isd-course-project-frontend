import UserInfo from '@/components/UserInfo';
import ReviewTable from '@/components/ReviewTable';
import useGetUserById from '@/hooks/api/user/useGetUserById';
import { Review } from '@/structures/types';

type UserProfileProps = {
  userId: number;
};

export default function UserProfile({ userId }: UserProfileProps) {
  const { user } = useGetUserById(userId);

  return (
    <div className="flex flex-column gap-2">
      {user && <UserInfo user={user} />}
      {user && <ReviewTable reviews={user?.reviews as Review[]} />}
    </div>
  );
}
