import LanguageDropdown from '@/components/LanguageDropdown';
import ThemeDropdown from '@/components/ThemeDropdown';
import { useAppSelector } from '@/hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { PagePath, Role } from '@/structures/enums';
import { Button } from 'primereact/button';
import FullTextSearch from '@/components/FullTextSearch';
import styles from './styles.module.scss';
import LogoLink from '@/components/ui/LogoLink';
import { ChangeEvent, useState } from 'react';

export default function Navbar() {
  const [t] = useTranslation('translation', { keyPrefix: 'navbar' });
  const authUser = useAppSelector((state) => state.authUser.user);
  const { pathname } = useLocation();
  const [navbar, setNavbar] = useState<boolean>(false);

  const handleChangeNavbar = (event: ChangeEvent<HTMLInputElement>) => {
    setNavbar(event.target.checked);
  };

  const closeNavbar = () => {
    setNavbar(false);
  };

  return (
    <nav className="h-4rem w-full flex justify-content-center align-items-center surface-card border-bottom-1 surface-border">
      <div className="col-11 flex align-items-center gap-4">
        <LogoLink />
        <input
          id="hamburger"
          type="checkbox"
          checked={navbar}
          onChange={handleChangeNavbar}
          className={styles.hamburger}
        />
        <div className={styles.navbar}>
          <Link to={PagePath.HOME}>
            <Button
              label={t('home-page')!}
              text
              raised={!!matchPath(PagePath.HOME, pathname)}
              severity="secondary"
              onClick={closeNavbar}
            />
          </Link>
          <Link to={PagePath.REVIEWS} reloadDocument>
            <Button
              label={t('review-catalog-page')!}
              text
              raised={!!matchPath(PagePath.REVIEWS, pathname)}
              severity="secondary"
              onClick={closeNavbar}
            />
          </Link>
          {authUser?.roles.includes(Role.ADMIN) && (
            <Link to={PagePath.USERS}>
              <Button
                label={t('users-page')!}
                text
                raised={!!matchPath(PagePath.USERS, pathname)}
                severity="secondary"
                onClick={closeNavbar}
              />
            </Link>
          )}
          <Link
            to={`${PagePath.REVIEWS}${PagePath.CREATE}${PagePath.CREATIONS}${PagePath.SELECT}`}
          >
            <Button
              label={t('add-review')!}
              icon="pi pi-comments text-2xl"
              severity="warning"
              text={
                !matchPath(`${PagePath.REVIEWS}${PagePath.CREATE}/*`, pathname)
              }
              onClick={closeNavbar}
            />
          </Link>
          <FullTextSearch className={styles.fullTextSearch} />
          <ThemeDropdown className={styles.themeDropdown} />
          <LanguageDropdown className={styles.languageDropdown} />
          {authUser ? (
            <Link to={PagePath.PROFILE}>
              <Button
                label={authUser.name}
                icon="pi pi-user"
                rounded
                raised={!!matchPath(PagePath.PROFILE, pathname)}
                onClick={closeNavbar}
              />
            </Link>
          ) : (
            <Link to={PagePath.LOGIN} state={{ from: null }}>
              <Button
                label={t('login-page')!}
                outlined
                raised={!!matchPath(PagePath.LOGIN, pathname)}
                onClick={closeNavbar}
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
