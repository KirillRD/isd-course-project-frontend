import LikeIcon from '@/components/ui/LikeIcon';

type ReviewLikeProps = {
  likeCount: number;
};

export default function ReviewLike({ likeCount }: ReviewLikeProps) {
  return (
    <div className="flex align-items-center gap-2">
      <LikeIcon />
      <span>{likeCount}</span>
    </div>
  );
}
