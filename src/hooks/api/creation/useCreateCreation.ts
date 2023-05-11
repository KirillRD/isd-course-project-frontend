import {
  useCreateCreationMutation,
  CreateCreationBody,
} from '@/redux/api/creationApi';
import { Creation } from '@/structures/types';

export default function useCreateCreation() {
  const [createCreationMutation, { error }] = useCreateCreationMutation();

  const createCreation = async (
    createCreationBody: CreateCreationBody
  ): Promise<Creation> => {
    return createCreationMutation(createCreationBody).unwrap();
  };

  return { createCreation, error };
}
