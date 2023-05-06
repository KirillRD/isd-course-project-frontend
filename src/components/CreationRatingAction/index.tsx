import useCreationRatingAction from '@/components/CreationRatingAction/hooks/useCreationRatingAction';
import { MAX_RATING_VALUE } from '@/utils/constants';
import { Rating } from 'primereact/rating';

type CreationRatingProps = {
  creationId: number;
  userRating: number | undefined;
};

export default function CreationRatingAction({
  creationId,
  userRating,
}: CreationRatingProps) {
  const { handleClick } = useCreationRatingAction(creationId, userRating);

  return (
    <Rating
      className="text-primary"
      value={userRating}
      onChange={handleClick}
      stars={MAX_RATING_VALUE}
      cancel={false}
    />
  );
}
