import {
  DeleteCreationRatingBody,
  useDeleteCreationRatingMutation,
} from '@/redux/api/creationRatingApi';

export default function useDeleteCreationRating() {
  const [deleteCreationRatingMutation] = useDeleteCreationRatingMutation();

  const deleteCreationRating = async (
    deleteCreationRatingBody: DeleteCreationRatingBody
  ) => {
    return deleteCreationRatingMutation(deleteCreationRatingBody).unwrap();
  };

  return { deleteCreationRating };
}
