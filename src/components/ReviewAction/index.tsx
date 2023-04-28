import ReviewForm, { ReviewFormBody } from '@/components/ReviewForm';
import CreationItem from '@/components/ui/CreationItem';
import { Creation, Review } from '@/structures/types';

type ReviewActionProps = {
  creation: Creation;
  reviewFormBody?: ReviewFormBody;
  onSubmit: (reviewFormBody: ReviewFormBody) => Promise<Review>;
};

export default function ReviewAction({
  creation,
  reviewFormBody,
  onSubmit,
}: ReviewActionProps) {
  return (
    <div className="flex flex-column gap-2">
      <CreationItem creation={creation} />
      <ReviewForm onSubmit={onSubmit} reviewFormBody={reviewFormBody} />
    </div>
  );
}
