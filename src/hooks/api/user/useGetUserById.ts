import { useGetUserByIdQuery } from '@/redux/api/userApi';

export default function useGetUserById(id: number) {
  const { data, error } = useGetUserByIdQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  return { user: data, error };
}
