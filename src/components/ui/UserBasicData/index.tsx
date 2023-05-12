import { Chip } from 'primereact/chip';
import { User } from '@/structures/types';
import LikeIcon from '@/components/ui/LikeIcon';
import UserLikeCount from '@/components/ui/UserLikeCount';

type UserBasicDataProps = {
  user: User;
};

export default function UserBasicData({ user }: UserBasicDataProps) {
  return (
    <Chip
      template={
        <h3 className="my-1 flex align-items-center gap-2">
          <span>{user.name}</span>
          <LikeIcon />
          <UserLikeCount user={user} />
        </h3>
      }
    />
  );
}
