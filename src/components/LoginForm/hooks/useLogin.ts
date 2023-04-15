import { useAppDispatch } from '@/hooks/useRedux';
import { useLoginMutation } from '@/redux/api/authApi';
import { setAccessToken } from '@/redux/slices/authSlice';
import { ErrorResponse, LoginData } from '@/structures/types';
import { Messages } from 'primereact/messages';
import { RefObject, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useLogin(errorMessage: RefObject<Messages>) {
  const [t, i18n] = useTranslation('translation', { keyPrefix: 'exception' });
  const [loginMutation, { isSuccess, data, isError, error }] =
    useLoginMutation();
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
      setErrorMessage(t((error as ErrorResponse).data.message));
    }
  }, [isSuccess, isError, i18n.language]);

  const login = (loginData: LoginData) => {
    void loginMutation(loginData);
  };

  return { login };
}
