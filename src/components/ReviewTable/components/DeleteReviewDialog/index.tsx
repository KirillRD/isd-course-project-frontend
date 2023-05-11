import DeleteConfirmDialog from '@/components/ui/DeleteConfirmDialog';
import useDeleteReview from '@/hooks/api/review/useDeleteReview';
import { Review } from '@/structures/types';
import { useTranslation } from 'react-i18next';

type DeleteReviewDialogProps = {
  review: Review;
  visible: boolean;
  onHide: () => void;
};

export default function DeleteReviewDialog({
  review,
  visible,
  onHide,
}: DeleteReviewDialogProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'review.delete-dialog',
  });
  const { deleteReview } = useDeleteReview();

  const handleAccept = () => {
    deleteReview(review.id);
  };

  return (
    <DeleteConfirmDialog
      header={t('header')}
      message={t('message')}
      visible={visible}
      onAccept={handleAccept}
      onHide={onHide}
    />
  );
}
