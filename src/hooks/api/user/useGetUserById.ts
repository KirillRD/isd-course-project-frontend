import useCheckExists from '@/hooks/useCheckExists';
import { useGetUserByIdQuery } from '@/redux/api/userApi';
import { ResponseError } from '@/structures/types';

export default function useGetUserById(id: number) {
  const { data, error } = useGetUserByIdQuery(id);

  useCheckExists(error as ResponseError);

  return { user: data };
}
