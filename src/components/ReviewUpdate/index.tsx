import ReviewAction from '@/components/ReviewAction';
import useHandleSubmit from '@/components/ReviewUpdate/hooks/useHandleSubmit';
import { Review } from '@/structures/types';

type ReviewUpdateProps = {
  review: Review;
};

export default function ReviewUpdate({ review }: ReviewUpdateProps) {
  const { handleSubmit } = useHandleSubmit(review.id);

  const { user, userId, creation, creationId, ...reviewObject } = review;

  return (
    <ReviewAction
      creation={creation!}
      reviewFormBody={{
        ...reviewObject,
        images: review.images?.map((image) => ({ file: image.url })),
      }}
      onSubmit={handleSubmit}
    />
  );
}
