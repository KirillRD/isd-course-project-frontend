import { useAppDispatch } from '@/hooks/useRedux';
import { useSignUpMutation } from '@/redux/api/authApi';
import { setAccessToken } from '@/redux/slices/authSlice';
import { ResponseError, SignUpData } from '@/structures/types';
import { Messages } from 'primereact/messages';
import { RefObject, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useSignUp(errorMessage: RefObject<Messages>) {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'exception' });
  const [signUpMutation, { isSuccess, data, isError, error }] =
    useSignUpMutation();
  const dispatch = useAppDispatch();

  const setErrorMessage = (summary: string) => {
    errorMessage.current?.replace({
      sticky: true,
      severity: 'error',
      summary,
      closable: true,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAccessToken(data!.accessToken));
    } else if (isError) {
      setErrorMessage(t((error as ResponseError).data.message));
    }
  }, [isSuccess, isError, i18n.language]);

  const signUp = (signUpData: SignUpData) => {
    void signUpMutation(signUpData);
  };

  return { signUp };
}
