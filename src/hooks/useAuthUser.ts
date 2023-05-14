import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { resetAuthUser, setAuthUser } from '@/redux/slices/authUserSlice';
import { useGetProfileQuery } from '@/redux/api/authApi';
import { useLocation } from 'react-router-dom';
import { resetAuth } from '@/redux/slices/authSlice';

export default function useAuthUser() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { data, error, isSuccess, refetch } = useGetProfileQuery(undefined, {
    skip: !accessToken,
  });

  useEffect(() => {
    const load = async () => {
      if (accessToken) {
        await refetch();
      } else if (authUser) {
        dispatch(resetAuthUser());
      }
    };
    void load();
  }, [accessToken, location]);

  useEffect(() => {
    const load = () => {
      if (isSuccess && data) {
        dispatch(setAuthUser(data));
      } else if (authUser) {
        dispatch(resetAuth());
        dispatch(resetAuthUser());
      }
    };
    load();
  }, [data, error]);
}
