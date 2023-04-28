import useCheckExists from '@/hooks/useCheckExists';
import { useGetCreationByIdQuery } from '@/redux/api/creationApi';
import { ResponseError } from '@/structures/types';

export default function useGetCreationById(id: number) {
  const { data, error } = useGetCreationByIdQuery(id);

  useCheckExists(error as ResponseError);

  return { creation: data };
}
