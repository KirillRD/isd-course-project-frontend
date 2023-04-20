import { Role, RoleColor } from '@/structures/enums';
import { Tag } from 'primereact/tag';
import { useTranslation } from 'react-i18next';

type RoleTagProps = {
  role: Role;
};

export default function RoleTag({ role }: RoleTagProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'role' });
  return <Tag className={RoleColor[role]} value={t(role)} />;
}
