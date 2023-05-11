import { SignUpFormBody } from '@/components/SignUpForm';
import useGoogleLogin from '@/hooks/api/auth/useGoogleLogin';
import useSignUp from '@/hooks/api/auth/useSignUp';
import useRedirectAfterAuth from '@/hooks/useRedirectAfterAuth';

export default function useSubmit() {
  const { signUp, error } = useSignUp();
  const { googleLogin, error: googleError } = useGoogleLogin();
  const { redirect } = useRedirectAfterAuth();

  const submit = async (signUpFormBody: SignUpFormBody) => {
    try {
      const { confirmPassword, ...body } = signUpFormBody;
      await signUp(body);
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
