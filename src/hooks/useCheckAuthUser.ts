import { useAppSelector } from '@/hooks/useRedux';
import { PagePath } from '@/structures/enums';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useCheckAuthUser() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuthUser = (): number | undefined => {
    if (!authUser) {
      navigate(PagePath.LOGIN, { state: { from: location } });
      return;
    }
    return authUser.id;
  };

  return { checkAuthUser };
}
