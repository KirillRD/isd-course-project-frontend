import { useAppSelector } from '@/hooks/useRedux';
import { PagePath } from '@/structures/enums';
import { useNavigate } from 'react-router-dom';

export default function useCheckAuthUser() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const navigate = useNavigate();

  const checkAuthUser = (): number | undefined => {
    if (!authUser) {
      navigate(PagePath.LOGIN);
      return;
    }
    return authUser.id;
  };

  return { checkAuthUser };
}
