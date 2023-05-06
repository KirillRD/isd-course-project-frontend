import LanguageDropdown from '@/components/LanguageDropdown';
import ThemeDropdown from '@/components/ThemeDropdown';
import { useAppSelector } from '@/hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PagePath, Role } from '@/structures/enums';
import { Button } from 'primereact/button';
import FullTextSearch from '@/components/FullTextSearch';

export default function Navbar() {
  const [t] = useTranslation('translation', { keyPrefix: 'navbar' });
  const authUser = useAppSelector((state) => state.authUser.user);

  return (
    <nav className="h-4rem w-full surface-card border-bottom-1 surface-border">
      <div className="h-full w-full flex justify-content-center align-items-center">
        <div
          className={`col-11 flex justify-content-between align-items-center`}
        >
          <div className="flex align-items-center gap-3">
            <Link to={PagePath.HOME}>
              <Button label={t('home-page')!} text />
            </Link>
            <Link to={PagePath.REVIEWS}>
              <Button label={t('review-catalog-page')!} text />
            </Link>
            {authUser?.roles.includes(Role.ADMIN) && (
              <Link to={PagePath.USERS}>
                <Button label={t('users-page')!} text />
              </Link>
            )}
          </div>
          <div className="flex align-items-center gap-3">
            <FullTextSearch />
            <ThemeDropdown className="w-4rem" />
            <LanguageDropdown className="w-5rem" />
            {authUser ? (
              <Link to={PagePath.PROFILE}>
                <Button label={authUser.name} icon="pi pi-user" text />
              </Link>
            ) : (
              <>
                <Link to={PagePath.LOGIN}>
                  <Button label={t('login-page')!} />
                </Link>
                <Link to={PagePath.SIGN_UP}>
                  <Button label={t('sign-up-page')!} outlined />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
