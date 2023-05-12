import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { User } from '@/structures/types';
import { getFormattedDate } from '@/utils';
import LockTag from '@/components/ui/LockTag';
import UserActions from '@/components/UserTable/components/UserActions';
import UserTableHeader from '@/components/UserTable/components/UserTableHeader';
import UserRoles from '@/components/UserTable/components/UserRoles';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import useUserTable from '@/components/UserTable/hooks/useUserTable';
import UserLikeCount from '@/components/ui/UserLikeCount';

export default function UserTable() {
  const [t] = useTranslation('translation', { keyPrefix: 'user' });
  const {
    users,
    userCount,
    pageSize,
    firstRowIndex,
    handlePage,
    searchValue,
    handleSearchChange,
  } = useUserTable();

  const emailTemplate = (user: User) => {
    return (
      <TextLink path={`${PagePath.USERS}/${user.id}`} selection>
        {user.email}
      </TextLink>
    );
  };

  const userLikeCountTemplate = (user: User) => {
    return <UserLikeCount user={user} />;
  };

  const signUpDateTemplate = (user: User) => {
    return getFormattedDate(new Date(user.signUpDate));
  };

  const isLockTemplate = (user: User) => {
    return <LockTag isLock={user.isLock} />;
  };

  const rolesTemplate = (user: User) => {
    return <UserRoles roles={user.roles} />;
  };

  const actionsTemplate = (user: User) => {
    return <UserActions user={user} />;
  };

  return (
    <div className="p-4 surface-card border-round border-1 surface-border">
      <h2 className="mt-0">{t('table.title')}</h2>
      <DataTable
        value={users}
        dataKey="id"
        lazy
        totalRecords={userCount}
        paginator
        first={firstRowIndex}
        rows={pageSize}
        onPage={handlePage}
        stripedRows
        size="small"
        header={
          <UserTableHeader
            searchValue={searchValue!}
            onSearchChange={handleSearchChange}
          />
        }
      >
        <Column
          className={styles.email}
          field="email"
          header={t('email')}
          body={emailTemplate}
        />
        <Column className={styles.name} field="name" header={t('name')} />
        <Column
          className={styles.reviewCount}
          field="_count.reviews"
          header={t('review-count')}
        />
        <Column
          className={styles.likeCount}
          header={t('like-count')}
          body={userLikeCountTemplate}
        />
        <Column
          className={styles.signUpDate}
          field="signUpDate"
          header={t('sign-up-date')}
          body={signUpDateTemplate}
        />
        <Column
          className={styles.isLock}
          field="isLock"
          header={t('is-lock')}
          body={isLockTemplate}
        />
        <Column
          className={styles.roles}
          field="roles"
          header={t('roles')}
          body={rolesTemplate}
        />
        <Column body={actionsTemplate} />
      </DataTable>
    </div>
  );
}
