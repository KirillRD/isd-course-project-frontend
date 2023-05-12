import useLogout from '@/hooks/api/auth/useLogout';
import { User } from '@/structures/types';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';

type UserInfoProps = {
  user: User;
};

export default function UserInfo({ user }: UserInfoProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'user' });
  const { logout } = useLogout();

  return (
    <div className="p-4 surface-card border-round border-1 surface-border flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <h2 className="m-0">{t('profile.title')!}</h2>
        <Button
          className="align-self-start"
          label={t('profile.logout-button')!}
          onClick={logout}
        />
      </div>
      <div className="flex flex-column gap-3 border-round border-1 surface-border surface-ground p-3">
        <p className="m-0">
          <span className="font-bold">{t('email')}:</span> {user.email}
        </p>
        <p className="m-0">
          <span className="font-bold">{t('name')}:</span> {user.name}
        </p>
      </div>
    </div>
  );
}
