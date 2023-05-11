import useReviewLikeAction from '@/components/ReviewLikeAction/hooks/useReviewLikeAction';
import LikeIcon from '@/components/ui/LikeIcon';
import { Rating } from 'primereact/rating';

type ReviewLikeActionProps = {
  reviewId: number;
  userLike: boolean;
};

export default function ReviewLikeAction({
  reviewId,
  userLike,
}: ReviewLikeActionProps) {
  const { handleClick } = useReviewLikeAction(reviewId, userLike);

  return (
    <Rating
      value={+userLike}
      onChange={handleClick}
      offIcon={<LikeIcon hover />}
      onIcon={<LikeIcon colored fill />}
      stars={1}
      cancel={false}
    />
  );
}
