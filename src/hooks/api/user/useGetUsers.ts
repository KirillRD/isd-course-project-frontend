import {
  GetUsersParams,
  useGetUserCountQuery,
  useGetUsersQuery,
} from '@/redux/api/userApi';
import {
  convertSearchParamsToUserCountParams,
  convertSearchParamsToUsersParams,
  convertUsersParamsToSearchParams,
} from '@/utils/userSearchParams';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useGetUsers() {
  const [searchParams, setSearchParams] = useSearchParams();

  const userCountParams = useMemo(
    () => convertSearchParamsToUserCountParams(searchParams),
    [searchParams]
  );

  const usersParams = useMemo(
    () => convertSearchParamsToUsersParams(searchParams),
    [searchParams]
  );

  const setParams = (params: GetUsersParams, replace?: boolean) => {
    setSearchParams(convertUsersParamsToSearchParams(params), { replace });
  };

  useEffect(() => {
    setParams(usersParams, true);
  }, []);

  const { data: userCount } = useGetUserCountQuery(userCountParams, {
    refetchOnMountOrArgChange: true,
  });

  const { data: users } = useGetUsersQuery(usersParams, {
    refetchOnMountOrArgChange: true,
  });

  return { userCount, users, usersParams, setParams };
}
