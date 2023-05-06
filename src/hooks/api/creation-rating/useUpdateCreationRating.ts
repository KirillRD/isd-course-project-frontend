import {
  CreationRatingBody,
  useUpdateCreationRatingMutation,
} from '@/redux/api/creationRatingApi';

export default function useUpdateCreationRating() {
  const [updateCreationRatingMutation] = useUpdateCreationRatingMutation();

  const updateCreationRating = async (
    creationRatingBody: CreationRatingBody
  ) => {
    return updateCreationRatingMutation(creationRatingBody).unwrap();
  };

  return { updateCreationRating };
}
