import { User } from '@/structures/types';

type UserLikeCountProps = {
  user: User;
};

export default function UserLikeCount({ user }: UserLikeCountProps) {
  return (
    <span>
      {user.reviews?.reduce(
        (count, review) => count + review._count!.userLikes!,
        0
      )}
    </span>
  );
}
