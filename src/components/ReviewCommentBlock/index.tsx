import useReviewComments from '@/components/ReviewCommentBlock/hooks/useReviewComments';
import ReviewCommentForm from '@/components/ReviewCommentForm';
import ReviewCommentList from '@/components/ReviewCommentList';
import Card from '@/components/ui/Card';
import { useTranslation } from 'react-i18next';

export default function ReviewCommentBlock() {
  const { reviewComments } = useReviewComments();
  const [t] = useTranslation('translation', {
    keyPrefix: 'review-comment.block',
  });

  return (
    <Card className="flex flex-column gap-2">
      <h2 className="mt-0">{t('title')}</h2>
      <ReviewCommentForm className="mb-3" />
      <ReviewCommentList reviewComments={reviewComments!} />
    </Card>
  );
}
