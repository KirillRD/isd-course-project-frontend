import { LoginFormBody } from '@/components/LoginForm';
import useGoogleLogin from '@/hooks/api/auth/useGoogleLogin';
import useLogin from '@/hooks/api/auth/useLogin';
import useRedirectAfterAuth from '@/hooks/useRedirectAfterAuth';

export default function useSubmit() {
  const { login, error } = useLogin();
  const { googleLogin, error: googleError } = useGoogleLogin();
  const { redirect } = useRedirectAfterAuth();

  const submit = async (loginFormBody: LoginFormBody) => {
    try {
      await login(loginFormBody);
      redirect();
      // eslint-disable-next-line no-empty, @typescript-eslint/no-shadow
    } catch (error) {}
  };

  const googleSubmit = async (credential: string) => {
    try {
      await googleLogin({ credential });
      redirect();
      // eslint-disable-next-line no-empty, @typescript-eslint/no-shadow
    } catch (error) {}
  };

  return { submit, error, googleSubmit, googleError };
}
