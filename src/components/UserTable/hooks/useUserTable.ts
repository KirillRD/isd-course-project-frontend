import { useMemo } from 'react';
import useGetUsers from '@/hooks/api/user/useGetUsers';
import { DataTablePageEvent } from 'primereact/datatable';

export default function useUserTable() {
  const { users, userCount, usersParams, setParams } = useGetUsers();
  const firstRowIndex = useMemo(
    () => (usersParams.page - 1) * usersParams.size,
    [usersParams]
  );

  const handlePage = (event: DataTablePageEvent) => {
    setParams({
      ...usersParams,
      page: ++event.page!,
    });
  };

  const handleSearchChange = (search: string | undefined) => {
    setParams({
      ...usersParams,
      search,
    });
  };

  return {
    users,
    userCount,
    pageSize: usersParams.size,
    firstRowIndex,
    handlePage,

    searchValue: usersParams.search,
    handleSearchChange,
  };
}
