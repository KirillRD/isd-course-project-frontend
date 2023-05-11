import { Role } from '@/structures/enums';
import { Tag } from 'primereact/tag';
import { useTranslation } from 'react-i18next';

type RoleTagProps = {
  role: Role;
};

enum RoleColor {
  USER = 'info',
  ADMIN = 'danger',
}

export default function RoleTag({ role }: RoleTagProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'role' });
  return <Tag value={t(role)} severity={RoleColor[role]} />;
}
