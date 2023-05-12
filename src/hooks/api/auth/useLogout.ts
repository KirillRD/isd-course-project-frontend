import { useAppDispatch } from '@/hooks/useRedux';
import { useLogoutMutation } from '@/redux/api/authApi';
import { resetAuth } from '@/redux/slices/authSlice';
import { PagePath } from '@/structures/enums';
import { useNavigate } from 'react-router-dom';

export default function useLogout() {
  const [logoutMutation] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      navigate(PagePath.HOME, { replace: true });
      await logoutMutation();
    } finally {
      dispatch(resetAuth());
    }
  };

  return { logout };
}
