import { Tag } from 'primereact/tag';

type LockTagProps = {
  isLock: boolean;
};

export default function LockTag({ isLock }: LockTagProps) {
  return (
    <Tag
      className={`pl-2 ${isLock ? 'bg-red-300' : 'bg-green-300'}`}
      icon={`pi ${isLock ? 'pi-lock' : 'pi-lock-open'}`}
    />
  );
}
