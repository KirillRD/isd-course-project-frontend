import useGetCreationById from '@/hooks/api/creation/useGetCreationById';
import { useEffect } from 'react';

export default function useCreationValue(
  creationValue: number | undefined,
  setCreationValue: (
    creationValue: number | undefined,
    replace?: boolean
  ) => void
) {
  const { creation, error } = useGetCreationById({
    id: creationValue!,
    stop: creationValue === undefined,
  });

  useEffect(() => {
    if (error) {
      setCreationValue(undefined, true);
    }
  }, [error]);

  return { creation };
}
