import { addLocale, locale, localeOptions } from 'primereact/api';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function useLocale() {
  const { t, i18n } = useTranslation();

  useLayoutEffect(() => {
    if (!localeOptions(i18n.resolvedLanguage)) {
      const options = t('prime-locale', { returnObjects: true });
      addLocale(i18n.resolvedLanguage, options);
    }
    locale(i18n.resolvedLanguage);
  }, [i18n.language]);
}
