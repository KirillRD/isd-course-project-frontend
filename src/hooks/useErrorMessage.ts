import { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';
import { useTranslation } from 'react-i18next';
import { Exception } from '@/structures/enums';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { ErrorResponse } from '@/redux/api/types';

const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError
): Exception => {
  return (error as ErrorResponse).data.message;
};

export default function useErrorMessage(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'exception',
  });
  const errorMessage = useRef<Messages>(null);

  const setErrorMessage = (message: Exception) => {
    errorMessage.current?.replace({
      sticky: true,
      severity: 'error',
      summary: t(message),
      closable: true,
    });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(getErrorMessage(error));
    }
  }, [error, i18n.language]);

  return { errorMessage };
}
