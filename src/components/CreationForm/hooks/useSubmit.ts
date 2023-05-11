import useCreateCreation from '@/hooks/api/creation/useCreateCreation';
import { CreateCreationBody } from '@/redux/api/creationApi';
import { useNavigate } from 'react-router-dom';

export default function useSubmit() {
  const { createCreation, error } = useCreateCreation();
  const navigate = useNavigate();

  const submit = async (body: CreateCreationBody) => {
    try {
      const creation = await createCreation(body);
      navigate(`.././${creation.id}`);
      // eslint-disable-next-line no-empty, @typescript-eslint/no-shadow
    } catch (error) {}
  };

  return { submit, error };
}
