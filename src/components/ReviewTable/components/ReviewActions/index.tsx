import DeleteReviewDialog from '@/components/ReviewTable/components/DeleteReviewDialog';
import TableDeleteButton from '@/components/ui/TableDeleteButton';
import TableEditButton from '@/components/ui/TableEditButton';
import { PagePath } from '@/structures/enums';
import { Review } from '@/structures/types';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type ReviewActionsProps = {
  review: Review;
};

export default function ReviewActions({ review }: ReviewActionsProps) {
  const [deleteReviewDialogVisible, setDeleteReviewDialogVisible] =
    useState(false);
  const params = useParams();
  const updateReviewLink = `${PagePath.REVIEWS}/${review.id}${PagePath.UPDATE}`;

  const handleDeleteButtonClick = () => setDeleteReviewDialogVisible(true);
  const handleDeleteReviewDialogHide = () =>
    setDeleteReviewDialogVisible(false);

  return (
    <div className="flex gap-1">
      <Link to={params.userId ? updateReviewLink.slice(1) : updateReviewLink}>
        <TableEditButton />
      </Link>
      <TableDeleteButton onClick={handleDeleteButtonClick} />
      <DeleteReviewDialog
        review={review}
        visible={deleteReviewDialogVisible}
        onHide={handleDeleteReviewDialogHide}
      />
    </div>
  );
}
