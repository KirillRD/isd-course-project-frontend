import { PagePath } from '@/structures/enums';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useCheckExists(
  error: FetchBaseQueryError | SerializedError | undefined
) {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      navigate(PagePath.NOT_FOUND);
    }
  }, [error]);
}
