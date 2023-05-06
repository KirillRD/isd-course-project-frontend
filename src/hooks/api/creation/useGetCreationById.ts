import useCheckExists from '@/hooks/useCheckExists';
import { useGetCreationByIdQuery } from '@/redux/api/creationApi';
import { ResponseError } from '@/structures/types';
import { useEffect } from 'react';

export default function useGetCreationById(id: number) {
  const { data, refetch, error } = useGetCreationByIdQuery(id);

  useEffect(() => {
    void refetch();
  }, []);

  useCheckExists(error as ResponseError);

  return { creation: data };
}
