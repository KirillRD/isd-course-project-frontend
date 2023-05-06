import UserBasicData from '@/components/ui/UserBasicData';
import { ReviewComment } from '@/structures/types';
import { getFormattedDate } from '@/utils';
import { Divider } from 'primereact/divider';

type ReviewCommentItemProps = {
  reviewComment: ReviewComment;
};

export default function ReviewCommentItem({
  reviewComment,
}: ReviewCommentItemProps) {
  return (
    <div className="flex flex-column gap-2">
      <div className="flex justify-content-between align-items-center">
        <UserBasicData user={reviewComment.user!} />
        <span>{getFormattedDate(reviewComment.createDate)}</span>
      </div>
      <p>{reviewComment.comment}</p>
      <Divider className="mt-0" />
    </div>
  );
}
