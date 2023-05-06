import { useMemo, ChangeEvent } from 'react';
import useGetUsers from '@/hooks/api/user/useGetUsers';
import { FIRST_PAGE, DEFAULT_PAGE_SIZE } from '@/utils/constants';
import { DataTablePageEvent } from 'primereact/datatable';

export default function useUserTable() {
  const { users, userCount, usersParams, setParams } = useGetUsers(
    FIRST_PAGE,
    DEFAULT_PAGE_SIZE
  );
  const firstRowIndex = useMemo(
    () => (+usersParams.page - 1) * +usersParams.size,
    [usersParams]
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setParams({
      ...usersParams,
      search: event.target.value,
    });
  };

  const handlePage = (event: DataTablePageEvent) => {
    setParams({
      ...usersParams,
      page: `${++event.page!}`,
    });
  };

  return {
    users,
    userCount,
    pageSize: +usersParams.size,
    firstRowIndex,
    searchValue: usersParams.search,
    handleSearchChange,
    handlePage,
  };
}
