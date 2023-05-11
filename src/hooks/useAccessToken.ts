import { useAppDispatch } from '@/hooks/useRedux';
import { setAccessToken } from '@/redux/slices/authSlice';

export default function useAccessToken() {
  const dispatch = useAppDispatch();

  const setToken = (accessToken: string) => {
    dispatch(setAccessToken(accessToken));
  };

  return { setToken };
}
