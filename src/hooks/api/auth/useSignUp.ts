import useAccessToken from '@/hooks/useAccessToken';
import { SignUpBody, useSignUpMutation } from '@/redux/api/authApi';

export default function useSignUp() {
  const [singUpMutation, { error }] = useSignUpMutation();
  const { setToken } = useAccessToken();

  const signUp = async (signUpBody: SignUpBody) => {
    const data = await singUpMutation(signUpBody).unwrap();
    setToken(data.accessToken);
  };

  return { signUp, error };
}
