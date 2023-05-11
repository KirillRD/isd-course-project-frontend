import CommentIcon from '@/components/ui/CommentIcon';

type ReviewCommentProps = {
  commentCount: number;
};

export default function ReviewComment({ commentCount }: ReviewCommentProps) {
  return (
    <div className="flex align-items-center gap-2">
      <CommentIcon />
      <span>{commentCount}</span>
    </div>
  );
}
