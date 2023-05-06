import ReviewCommentItem from '@/components/ui/ReviewCommentItem';
import { ReviewComment } from '@/structures/types';

type ReviewCommentListProps = {
  reviewComments: ReviewComment[];
};

export default function ReviewCommentList({
  reviewComments,
}: ReviewCommentListProps) {
  return (
    <div className="flex flex-column gap-2">
      {reviewComments &&
        reviewComments.map((reviewComment) => (
          <ReviewCommentItem
            key={reviewComment.id}
            reviewComment={reviewComment}
          />
        ))}
    </div>
  );
}
