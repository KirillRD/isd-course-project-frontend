import ReviewAction from '@/components/ReviewAction';
import useHandleSubmit from '@/components/ReviewCreate/hooks/useHandleSubmit';
import { Creation } from '@/structures/types';

type ReviewCreateProps = {
  userId: number;
  creation: Creation;
};

export default function ReviewCreate({ userId, creation }: ReviewCreateProps) {
  const { handleSubmit } = useHandleSubmit(userId, creation.id);

  return <ReviewAction creation={creation} onSubmit={handleSubmit} />;
}
