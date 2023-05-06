import { LikeBody, useDeleteLikeMutation } from '@/redux/api/likeApi';

export default function useDeleteLike() {
  const [deleteLikeMutation] = useDeleteLikeMutation();

  const deleteLike = async (likeBody: LikeBody) => {
    return deleteLikeMutation(likeBody).unwrap();
  };

  return { deleteLike };
}
