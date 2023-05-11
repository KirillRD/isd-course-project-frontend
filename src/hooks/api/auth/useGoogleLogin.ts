import useAccessToken from '@/hooks/useAccessToken';
import { CredentialBody, useGoogleLoginMutation } from '@/redux/api/authApi';

export default function useGoogleLogin() {
  const [googleLoginMutation, { error }] = useGoogleLoginMutation();
  const { setToken } = useAccessToken();

  const googleLogin = async (credentialBody: CredentialBody) => {
    const data = await googleLoginMutation(credentialBody).unwrap();
    setToken(data.accessToken);
  };

  return { googleLogin, error };
}
