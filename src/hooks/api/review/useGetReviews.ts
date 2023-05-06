import {
  GetReviewCountParams,
  GetReviewsParams,
  useGetReviewCountQuery,
  useGetReviewsQuery,
} from '@/redux/api/reviewApi';
import {
  convertReviewsParamsToSearchParams,
  convertSearchParamsToReviewCountParams,
  convertSearchParamsToReviewsParams,
} from '@/utils/reviewSearchParams';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useGetReviews() {
  const [searchParams, setSearchParams] = useSearchParams();

  const reviewCountParams: GetReviewCountParams = useMemo(
    () => convertSearchParamsToReviewCountParams(searchParams),
    [searchParams]
  );

  const reviewsParams: GetReviewsParams = useMemo(
    () => convertSearchParamsToReviewsParams(searchParams),
    [searchParams]
  );

  const setParams = (params: GetReviewsParams, replace?: boolean) => {
    setSearchParams(convertReviewsParamsToSearchParams(params), { replace });
  };

  useEffect(() => {
    setParams(reviewsParams, true);
  }, []);

  const { data: reviewCount } = useGetReviewCountQuery(reviewCountParams, {
    refetchOnMountOrArgChange: true,
  });

  const { data: reviews } = useGetReviewsQuery(reviewsParams, {
    refetchOnMountOrArgChange: true,
  });

  return { reviewCount, reviews, reviewsParams, setParams };
}
