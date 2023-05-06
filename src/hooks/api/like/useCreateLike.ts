import { LikeBody, useCreateLikeMutation } from '@/redux/api/likeApi';

export default function useCreateLike() {
  const [createLikeMutation] = useCreateLikeMutation();

  const createLike = async (likeBody: LikeBody) => {
    return createLikeMutation(likeBody).unwrap();
  };

  return { createLike };
}
