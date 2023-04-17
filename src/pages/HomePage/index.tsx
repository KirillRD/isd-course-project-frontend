import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import useTheme from '@/hooks/useTheme';
import { PagePath, Theme } from '@/structures/enums';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t, i18n } = useTranslation();
  const { changeTheme } = useTheme();

  return (
    <div className="my-3 align-self-start">
      <p className="text-lg my-0">{t('title')}</p>
      <Button label="ru" onClick={() => void i18n.changeLanguage('ru')} />
      <Button label="en" onClick={() => void i18n.changeLanguage('en')} />
      <Button label="light" onClick={() => changeTheme(Theme.LIGHT)} />
      <Button label="dark" onClick={() => changeTheme(Theme.DARK)} />
      <Link to={PagePath.LOGIN}>Login</Link>
      <Link to={PagePath.SIGN_UP}>Sign up</Link>
      <Link to={PagePath.PROFILE}>User page</Link>
      <Link to={PagePath.ADMIN}>Admin page</Link>
    </div>
  );
}
