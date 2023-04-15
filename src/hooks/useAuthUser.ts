import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { resetAuthUser, setAuthUser } from '@/redux/slices/authUserSlice';
import { useLazyProfileQuery } from '@/redux/api/authApi';
import { useLocation } from 'react-router-dom';

export default function useAuthUser() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const [getProfile] = useLazyProfileQuery();
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      if (accessToken) {
        const res = await getProfile();
        if (res.isSuccess) {
          console.log(res.data);
          dispatch(setAuthUser(res.data));
        }
      } else if (authUser) {
        dispatch(resetAuthUser());
      }
    };
    void load();
  }, [accessToken, location]);

  return;
}
