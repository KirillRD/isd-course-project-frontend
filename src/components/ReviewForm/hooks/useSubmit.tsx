import { ReviewFormBody } from '@/components/ReviewForm';
import { PagePath } from '@/structures/enums';
import { Review } from '@/structures/types';
import { useNavigate } from 'react-router-dom';

export default function useSubmit(
  onSubmit: (body: ReviewFormBody) => Promise<Review>
) {
  const navigate = useNavigate();

  const submit = async (body: ReviewFormBody) => {
    const review = await onSubmit(body);
    navigate(`${PagePath.REVIEWS}/${review.id}`);
  };

  return { submit };
}
