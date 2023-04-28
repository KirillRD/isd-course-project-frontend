import { PagePath } from '@/structures/enums';
import { ResponseError } from '@/structures/types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useCheckExists(error: ResponseError | undefined) {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate(PagePath.NOT_FOUND);
    }
  }, [error]);
}
