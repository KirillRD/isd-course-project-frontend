import {
  GetReviewCommentsParams,
  useGetReviewCommentsQuery,
} from '@/redux/api/reviewCommentApi';
import { REVIEW_COMMENTS_POLLING_INTERVAL } from '@/utils/constants';

export default function useGetReviewComments(
  searchParams: GetReviewCommentsParams
) {
  const { data } = useGetReviewCommentsQuery(searchParams, {
    pollingInterval: REVIEW_COMMENTS_POLLING_INTERVAL,
  });

  return { reviewComments: data };
}
