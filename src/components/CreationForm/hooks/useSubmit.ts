import useCreateCreation from '@/hooks/api/creation/useCreateCreation';
import { CreateCreationBody } from '@/redux/api/creationApi';
import { PagePath } from '@/structures/enums';
import { ErrorMessage, ResponseError } from '@/structures/types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useSubmit() {
  const { createCreation } = useCreateCreation();
  const [error, setError] = useState<ErrorMessage | undefined>();
  const navigate = useNavigate();

  const submit = async (body: CreateCreationBody) => {
    try {
      const creation = await createCreation(body);
      navigate(
        `${PagePath.REVIEWS}${PagePath.CREATE}${PagePath.CREATIONS}/${creation.id}`
      );
    } catch (responseError) {
      setError({
        message: (responseError as ResponseError).data.message,
      });
    }
  };

  return { submit, error };
}
