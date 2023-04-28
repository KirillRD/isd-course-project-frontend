import { useEffect, useRef } from 'react';
import { Messages } from 'primereact/messages';
import { useTranslation } from 'react-i18next';
import { Exception } from '@/structures/enums';
import { ErrorMessage } from '@/structures/types';

export default function useErrorMessage(error: ErrorMessage | undefined) {
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
      setErrorMessage(error.message);
    }
  }, [error, i18n.language]);

  return { errorMessage };
}
