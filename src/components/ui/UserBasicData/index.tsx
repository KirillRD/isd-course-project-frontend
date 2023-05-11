import { Chip } from 'primereact/chip';
import { User } from '@/structures/types';
import LikeIcon from '@/components/ui/LikeIcon';

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
          <span>{user._count?.reviewLikes}</span>
        </h3>
      }
    />
  );
}
