import {
  GetCreationsParams,
  useGetCreationsQuery,
} from '@/redux/api/creationApi';
import { useState } from 'react';

export default function useGetCreations(stop?: boolean) {
  const [searchParams, setSearchParams] = useState<GetCreationsParams>({
    search: '',
  });
  const { data } = useGetCreationsQuery(searchParams, {
    skip: stop ?? !searchParams.search,
  });

  return {
    creations: data,
    searchParams,
    setSearchParams,
  };
}
