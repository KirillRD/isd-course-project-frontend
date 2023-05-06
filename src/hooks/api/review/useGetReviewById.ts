import useCheckExists from '@/hooks/useCheckExists';
import { useGetReviewByIdQuery } from '@/redux/api/reviewApi';
import { ResponseError } from '@/structures/types';
import { useEffect } from 'react';

export default function useGetReviewById(id: number) {
  const { data, refetch, error } = useGetReviewByIdQuery(id);

  useEffect(() => {
    void refetch();
  }, []);

  useCheckExists(error as ResponseError);

  return { review: data };
}
