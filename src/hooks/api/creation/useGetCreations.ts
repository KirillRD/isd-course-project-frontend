import {
  GetCreationsParams,
  useGetCreationsQuery,
} from '@/redux/api/creationApi';
import { useState } from 'react';

export default function useGetCreations() {
  const [inputSearchParams, setInputSearchParams] =
    useState<GetCreationsParams>({
      search: '',
    });
  const [searchParams, setSearchParams] =
    useState<GetCreationsParams>(inputSearchParams);
  const { data } = useGetCreationsQuery(searchParams, {
    skip: !searchParams.search,
  });

  const refetchCreations = () => {
    setSearchParams({
      ...inputSearchParams,
    });
  };

  return {
    creations: data,
    search: refetchCreations,
    inputSearchParams,
    setInputSearchParams,
  };
}
