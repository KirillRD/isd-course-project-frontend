import RoleTag from '@/components/ui/RoleTag';
import { Role } from '@/structures/enums';

type UserRolesProps = {
  roles: Role[];
};

export default function UserRoles({ roles }: UserRolesProps) {
  return (
    <div className="flex flex-column gap-1">
      {roles.map((role) => (
        <RoleTag key={role} role={role} />
      ))}
    </div>
  );
}
