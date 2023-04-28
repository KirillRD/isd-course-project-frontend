import useGetCreationById from '@/hooks/api/creation/useGetCreationById';
import { useAppSelector } from '@/hooks/useRedux';
import { useParams } from 'react-router-dom';

export default function useReviewCreate() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const params = useParams();

  const { creation } = useGetCreationById(Number(params.creationId));

  return { userId: Number(params.userId) || authUser?.id, creation };
}
