import { useAppSelector } from '@/hooks/useRedux';
import { PagePath, Role } from '@/structures/enums';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

type AuthProps = {
  allowedRoles: Role[];
};

export default function Auth({ allowedRoles }: AuthProps) {
  const authUser = useAppSelector((state) => state.authUser.user);
  const location = useLocation();

  const getPageIfUserNotExist = () => {
    return allowedRoles.length ? (
      <Navigate to={PagePath.LOGIN} state={{ from: location }} replace />
    ) : (
      <Outlet />
    );
  };

  const getPageIfUserExists = () => {
    return allowedRoles.length ? (
      allowedRoles.some((role) => {
        return authUser?.roles.includes(role);
      }) ? (
        <Outlet />
      ) : (
        <Navigate to={PagePath.ACCESS_DENIED} replace />
      )
    ) : (
      <Navigate to={PagePath.HOME} replace />
    );
  };

  return authUser ? getPageIfUserExists() : getPageIfUserNotExist();
}
