import { GetUserCountParams, GetUsersParams } from '@/redux/api/userApi';
import { POSITIVE_INTEGER_REGEX } from '@/utils/constants';
import queryString from 'query-string';

export const PAGE_ARG = 'page';
export const SIZE_ARG = 'size';
export const SEARCH_ARG = 'search';

const INIT_PAGE = 1;
const INIT_PAGE_SIZE = 10;

const pageParse = (value: string | null): number => {
  if (value !== null && POSITIVE_INTEGER_REGEX.test(value)) {
    return +value;
  }
  return INIT_PAGE;
};

const sizeParse = (value: string | null): number => {
  if (value !== null && POSITIVE_INTEGER_REGEX.test(value)) {
    return +value;
  }
  return INIT_PAGE_SIZE;
};

const searchParse = (value: string | null): string | undefined => {
  if (value !== null) {
    return value;
  }
};

export const convertSearchParamsToUserCountParams = (
  searchParams: URLSearchParams
): GetUserCountParams => {
  return {
    search: searchParse(searchParams.get(SEARCH_ARG)),
  };
};

export const convertSearchParamsToUsersParams = (
  searchParams: URLSearchParams
): GetUsersParams => {
  return {
    ...convertSearchParamsToUserCountParams(searchParams),
    page: pageParse(searchParams.get(PAGE_ARG)),
    size: sizeParse(searchParams.get(SIZE_ARG)),
  };
};

export const convertUsersParamsToSearchParams = (
  params: GetUsersParams
): string => {
  return queryString.stringify(params, {
    skipEmptyString: true,
    skipNull: true,
  });
};
