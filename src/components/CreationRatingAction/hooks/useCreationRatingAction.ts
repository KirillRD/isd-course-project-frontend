import useCreateCreationRating from '@/hooks/api/creation-rating/useCreateCreationRating';
import useDeleteCreationRating from '@/hooks/api/creation-rating/useDeleteCreationRating';
import useUpdateCreationRating from '@/hooks/api/creation-rating/useUpdateCreationRating';
import useCheckAuthUser from '@/hooks/useCheckAuthUser';
import { RatingChangeEvent } from 'primereact/rating';

export default function useCreationRatingAction(
  creationId: number,
  userRating: number | undefined
) {
  const { createCreationRating } = useCreateCreationRating();
  const { updateCreationRating } = useUpdateCreationRating();
  const { deleteCreationRating } = useDeleteCreationRating();
  const { checkAuthUser } = useCheckAuthUser();

  const handleClick = (event: RatingChangeEvent) => {
    const userId = checkAuthUser();
    if (userId) {
      const rating = event.value as number;
      if (userRating) {
        if (userRating == rating) {
          void deleteCreationRating({ userId, creationId });
        } else {
          void updateCreationRating({ userId, creationId, rating });
        }
      } else {
        void createCreationRating({ userId, creationId, rating });
      }
    }
  };

  return { handleClick };
}
