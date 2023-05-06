import {
  CreationRatingBody,
  useCreateCreationRatingMutation,
} from '@/redux/api/creationRatingApi';

export default function useCreateCreationRating() {
  const [createCreationRatingMutation] = useCreateCreationRatingMutation();

  const createCreationRating = async (
    creationRatingBody: CreationRatingBody
  ) => {
    return createCreationRatingMutation(creationRatingBody).unwrap();
  };

  return { createCreationRating };
}
