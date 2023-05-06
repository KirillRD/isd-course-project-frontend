import { Chip } from 'primereact/chip';
import { User } from '@/structures/types';

type UserBasicDataProps = {
  user: User;
};

export default function UserBasicData({ user }: UserBasicDataProps) {
  return (
    <Chip
      className="max-w-min"
      template={
        <div className="flex align-items-center gap-2 p-1">
          <h3 className="m-0">{user.name}</h3>
          <div className="flex align-items-center gap-1">
            <span className="pi pi-thumbs-up-fill text-color-secondary"></span>
            <span>{user._count?.reviewLikes}</span>
          </div>
        </div>
      }
    />
  );
}
