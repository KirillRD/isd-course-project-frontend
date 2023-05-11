import { Tag } from 'primereact/tag';

type LockTagProps = {
  isLock: boolean;
};

export default function LockTag({ isLock }: LockTagProps) {
  return (
    <Tag
      icon={`pi ${isLock ? 'pi-lock' : 'pi-lock-open'}`}
      severity={isLock ? 'danger' : 'success'}
    />
  );
}
