import TableDeleteButton from '@/components/ui/TableDeleteButton';
import TableEditButton from '@/components/ui/TableEditButton';
import { PagePath } from '@/structures/enums';
import { Link, useParams } from 'react-router-dom';

type ReviewActionsProps = {
  reviewId: number;
};

export default function ReviewActions({ reviewId }: ReviewActionsProps) {
  const params = useParams();
  const updateReviewLink = `${PagePath.REVIEWS}/${reviewId}${PagePath.UPDATE}`;
  const handleDeleteButtonClick = () => {};

  return (
    <div className="flex gap-1">
      <Link to={params.userId ? updateReviewLink.slice(1) : updateReviewLink}>
        <TableEditButton />
      </Link>
      <TableDeleteButton onClick={handleDeleteButtonClick} />
    </div>
  );
}
