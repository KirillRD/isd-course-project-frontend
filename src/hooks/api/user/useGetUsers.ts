import {
  GetUserCountParams,
  GetUsersParams,
  useGetUserCountQuery,
  useGetUsersQuery,
} from '@/redux/api/userApi';
import queryString from 'query-string';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

const PAGE = 'page';
const SIZE = 'size';

const convertToGetUserCountParams = (
  searchParams: URLSearchParams
): GetUserCountParams => {
  return queryString.parse(
    queryString.exclude(searchParams.toString(), [PAGE, SIZE])
  );
};

const convertToGetUsersParams = (
  searchParams: URLSearchParams
): GetUsersParams => {
  return queryString.parse(searchParams.toString()) as GetUsersParams;
};

export default function useGetUsers(initPage: number, initPageSize: number) {
  const [searchParams, setSearchParams] = useSearchParams();

  const userCountParams = useMemo(
    () => convertToGetUserCountParams(searchParams),
    [searchParams]
  );

  const usersParams = useMemo(
    () => convertToGetUsersParams(searchParams),
    [searchParams]
  );

  const setParams = (params: GetUsersParams) => {
    setSearchParams(
      queryString.stringify(params, { skipEmptyString: true, skipNull: true })
    );
  };

  useEffect(() => {
    const load = () => {
      const page = +usersParams.page;
      const size = +usersParams.size;

      setParams({
        ...usersParams,
        page: `${page && page > 0 ? page : initPage}`,
        size: `${size && size > 0 ? size : initPageSize}`,
      });
    };

    load();
  }, []);

  const { data: userCount } = useGetUserCountQuery(userCountParams, {
    refetchOnMountOrArgChange: true,
  });

  const { data: users } = useGetUsersQuery(usersParams, {
    refetchOnMountOrArgChange: true,
  });

  return { userCount, users, setParams, usersParams };
}
