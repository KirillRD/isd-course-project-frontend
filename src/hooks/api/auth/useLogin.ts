import useAccessToken from '@/hooks/useAccessToken';
import { LoginBody, useLoginMutation } from '@/redux/api/authApi';

export default function useLogin() {
  const [loginMutation, { error }] = useLoginMutation();
  const { setToken } = useAccessToken();

  const login = async (loginBody: LoginBody) => {
    const data = await loginMutation(loginBody).unwrap();
    setToken(data.accessToken);
  };

  return { login, error };
}
