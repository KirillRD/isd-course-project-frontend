import UserInfo from '@/components/UserInfo';
import useUserProfile from '@/components/UserProfile/hooks/useUserProfile';
import UserReviews from '@/components/UserReviews';
import { Review } from '@/structures/types';

type UserProfileProps = {
  userId: number;
};

export default function UserProfile({ userId }: UserProfileProps) {
  const { user } = useUserProfile(userId);

  return (
    <div className="flex flex-column gap-2">
      {user && <UserInfo user={user} />}
      {user && <UserReviews reviews={user?.reviews as Review[]} />}
    </div>
  );
}
