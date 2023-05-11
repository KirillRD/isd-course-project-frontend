import useReviewComments from '@/components/ReviewCommentBlock/hooks/useReviewComments';
import ReviewCommentForm from '@/components/ReviewCommentForm';
import ReviewCommentList from '@/components/ReviewCommentList';
import Card from '@/components/ui/Card';
import ReviewComment from '@/components/ui/ReviewComment';
import { useTranslation } from 'react-i18next';

export default function ReviewCommentBlock() {
  const { reviewComments } = useReviewComments();
  const [t] = useTranslation('translation', {
    keyPrefix: 'review-comment.block',
  });

  return (
    <Card className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <h2 className="m-0">{t('title')}</h2>
        <ReviewComment commentCount={Number(reviewComments?.length)} />
      </div>
      <ReviewCommentForm />
      <ReviewCommentList reviewComments={reviewComments!} />
    </Card>
  );
}
