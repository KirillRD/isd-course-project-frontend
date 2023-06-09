import useGetReviewById from '@/hooks/api/review/useGetReviewById';
import useCheckExists from '@/hooks/useCheckExists';
import { useAppSelector } from '@/hooks/useRedux';
import { PagePath, Role } from '@/structures/enums';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function useReviewUpdate() {
  const authUser = useAppSelector((state) => state.authUser.user);
  const navigate = useNavigate();
  const params = useParams();

  const { review, error } = useGetReviewById(Number(params.reviewId));
  useCheckExists(error);

  useEffect(() => {
    if (review) {
      if (
        !authUser?.roles.includes(Role.ADMIN) &&
        review.userId != authUser?.id
      ) {
        navigate(PagePath.ACCESS_DENIED);
      }
    }
  }, [review]);

  return { review };
}
