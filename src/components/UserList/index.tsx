import { Column } from 'primereact/column';
import { DataTable, DataTablePageEvent } from 'primereact/datatable';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ChangeEvent, useMemo } from 'react';
import { User } from '@/structures/types';
import { InputText } from 'primereact/inputtext';
import useGetUsers from '@/hooks/api/user/useGetUsers';
import { DEFAULT_PAGE_SIZE, FIRST_PAGE } from '@/utils/constants';
import { getFormattedDate } from '@/utils';
import RoleTag from '@/components/ui/RoleTag';
import LockTag from '@/components/ui/LockTag';
import UserActions from '@/components/UserList/components/UserActions';

export default function UserList() {
  const [t] = useTranslation('translation', { keyPrefix: 'user' });
  const { users, userCount, usersParams, setParams } = useGetUsers(
    FIRST_PAGE,
    DEFAULT_PAGE_SIZE
  );
  const first = useMemo(
    () => (+usersParams.page - 1) * +usersParams.size,
    [usersParams]
  );

  const header = () => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setParams({
        ...usersParams,
        search: event.target.value,
      });
    };

    return (
      <div className="flex justify-content-between align-items-center">
        <div className="flex gap-2"></div>
        <div className="flex gap-2">
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={usersParams.search}
              onChange={handleChange}
              placeholder={t('table.header.search-input')!}
            />
          </span>
        </div>
      </div>
    );
  };

  const userImageTemplate = () => {
    return (
      <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg" />
    );
  };

  const handlePage = (event: DataTablePageEvent) => {
    setParams({
      ...usersParams,
      page: `${++event.page!}`,
    });
  };

  const userSignUpDateTemplate = (user: User) => {
    return getFormattedDate(new Date(user.signUpDate));
  };

  const userIsLockTemplate = (user: User) => {
    return <LockTag isLock={user.isLock} />;
  };

  const userRolesTemplate = (user: User) => {
    return (
      <div className="flex flex-column gap-1">
        {user.roles.map((role) => (
          <RoleTag key={role} role={role} />
        ))}
      </div>
    );
  };

  const userActionsTemplate = (user: User) => {
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
        first={first}
        rows={+usersParams.size}
        onPage={handlePage}
        stripedRows
        header={header}
      >
        <Column
          className={styles.userImage}
          header={t('user-image')}
          alignHeader="center"
          body={userImageTemplate}
        />
        <Column
          className={styles.userEmail}
          field="email"
          header={t('user-email')}
        />
        <Column
          className={styles.userName}
          field="name"
          header={t('user-name')}
        />
        <Column
          className={styles.userReviewCount}
          field="_count.reviews"
          header={t('user-review-count')}
        />
        <Column
          className={styles.userLikeCount}
          field=""
          header={t('user-like-count')}
        />
        <Column
          className={styles.userSignUpDate}
          field="signUpDate"
          header={t('user-sign-up-date')}
          body={userSignUpDateTemplate}
        />
        <Column
          className={styles.userIsLock}
          field="isLock"
          header={t('user-is-lock')}
          body={userIsLockTemplate}
        />
        <Column
          className={styles.userRoles}
          field="roles"
          header={t('user-roles')}
          body={userRolesTemplate}
        />
        <Column body={userActionsTemplate} />
      </DataTable>
    </div>
  );
}
