import useCreationRatingAction from '@/components/CreationRatingAction/hooks/useCreationRatingAction';
import RatingIcon from '@/components/ui/RatingIcon';
import { MAX_RATING_VALUE } from '@/utils/constants';
import { Rating } from 'primereact/rating';

type CreationRatingProps = {
  className?: string;
  creationId: number;
  userRating: number | undefined;
};

export default function CreationRatingAction({
  className,
  creationId,
  userRating,
}: CreationRatingProps) {
  const { handleClick } = useCreationRatingAction(creationId, userRating);

  return (
    <Rating
      className={className}
      value={userRating}
      onChange={handleClick}
      offIcon={<RatingIcon hover />}
      onIcon={<RatingIcon colored fill />}
      stars={MAX_RATING_VALUE}
      cancel={false}
    />
  );
}
