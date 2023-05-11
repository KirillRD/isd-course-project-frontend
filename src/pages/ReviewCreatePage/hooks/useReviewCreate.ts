import useGetCreationById from '@/hooks/api/creation/useGetCreationById';
import useCheckExists from '@/hooks/useCheckExists';
import { useAppSelector } from '@/hooks/useRedux';
import { useParams } from 'react-router-dom';

export default function useReviewCreate() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const params = useParams();

  const { creation, error } = useGetCreationById({
    id: Number(params.creationId),
  });
  useCheckExists(error);

  return { userId: Number(params.userId) || authUser?.id, creation };
}
