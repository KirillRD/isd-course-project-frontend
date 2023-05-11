import useCreateLike from '@/hooks/api/like/useCreateLike';
import useDeleteLike from '@/hooks/api/like/useDeleteLike';
import useCheckAuthUser from '@/hooks/useCheckAuthUser';
import { LikeBody } from '@/redux/api/likeApi';

export default function useReviewLikeAction(
  reviewId: number,
  userLike: boolean
) {
  const { createLike } = useCreateLike();
  const { deleteLike } = useDeleteLike();
  const { checkAuthUser } = useCheckAuthUser();

  const handleClick = () => {
    const userId = checkAuthUser();
    if (userId) {
      const likeBody: LikeBody = {
        userId,
        reviewId,
      };
      if (userLike) {
        void deleteLike(likeBody);
      } else {
        void createLike(likeBody);
      }
    }
  };

  return { handleClick };
}
