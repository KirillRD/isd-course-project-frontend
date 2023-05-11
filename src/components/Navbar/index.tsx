import LanguageDropdown from '@/components/LanguageDropdown';
import ThemeDropdown from '@/components/ThemeDropdown';
import { useAppSelector } from '@/hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { PagePath, Role } from '@/structures/enums';
import { Button } from 'primereact/button';
import FullTextSearch from '@/components/FullTextSearch';
import styles from './styles.module.scss';
// eslint-disable-next-line import/no-unresolved
import logo from '/logo.svg';

export default function Navbar() {
  const [t] = useTranslation('translation', { keyPrefix: 'navbar' });
  const authUser = useAppSelector((state) => state.authUser.user);
  const { pathname } = useLocation();

  return (
    <nav className="h-4rem w-full surface-card border-bottom-1 surface-border">
      <div className="h-full w-full flex justify-content-center align-items-center">
        <div
          className={`col-11 flex justify-content-between align-items-center`}
        >
          <div className="flex align-items-center gap-3">
            <Link to={PagePath.HOME}>
              <img className={styles.logo} src={logo} />
            </Link>
            <Link to={PagePath.HOME}>
              <Button
                label={t('home-page')!}
                text
                raised={!!matchPath(PagePath.HOME, pathname)}
                severity="secondary"
              />
            </Link>
            <Link to={PagePath.REVIEWS}>
              <Button
                label={t('review-catalog-page')!}
                text
                raised={!!matchPath(PagePath.REVIEWS, pathname)}
                severity="secondary"
              />
            </Link>
            {authUser?.roles.includes(Role.ADMIN) && (
              <Link to={PagePath.USERS}>
                <Button
                  label={t('users-page')!}
                  text
                  raised={!!matchPath(PagePath.USERS, pathname)}
                  severity="secondary"
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
                  !matchPath(
                    `${PagePath.REVIEWS}${PagePath.CREATE}/*`,
                    pathname
                  )
                }
              />
            </Link>
          </div>
          <div className="flex align-items-center gap-3">
            <FullTextSearch className={styles.fullTextSearch} />
            <ThemeDropdown className="w-5rem" />
            <LanguageDropdown className="w-7rem" />
            {authUser ? (
              <Link to={PagePath.PROFILE}>
                <Button
                  label={authUser.name}
                  icon="pi pi-user"
                  rounded
                  raised={!!matchPath(PagePath.PROFILE, pathname)}
                />
              </Link>
            ) : (
              <Link to={PagePath.LOGIN} state={{ from: null }}>
                <Button
                  label={t('login-page')!}
                  outlined
                  raised={!!matchPath(PagePath.LOGIN, pathname)}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
