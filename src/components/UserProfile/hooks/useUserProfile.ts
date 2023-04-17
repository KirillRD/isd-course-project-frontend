import { useGetUserByIdQuery } from '@/redux/api/userApi';
import { POLLING_INTERVAL } from '@/utils/constants';

export default function useUserProfile(id: number) {
  const { data } = useGetUserByIdQuery(id, {
    pollingInterval: POLLING_INTERVAL,
  });

  return { user: data };
}
