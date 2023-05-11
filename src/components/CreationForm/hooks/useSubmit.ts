import useCreateCreation from '@/hooks/api/creation/useCreateCreation';
import { CreateCreationBody } from '@/redux/api/creationApi';
import { PagePath } from '@/structures/enums';
import { useNavigate } from 'react-router-dom';

export default function useSubmit() {
  const { createCreation, error } = useCreateCreation();
  const navigate = useNavigate();

  const submit = async (body: CreateCreationBody) => {
    try {
      const creation = await createCreation(body);
      navigate(
        `${PagePath.REVIEWS}${PagePath.CREATE}${PagePath.CREATIONS}/${creation.id}`
      );
      // eslint-disable-next-line no-empty, @typescript-eslint/no-shadow
    } catch (error) {}
  };

  return { submit, error };
}
