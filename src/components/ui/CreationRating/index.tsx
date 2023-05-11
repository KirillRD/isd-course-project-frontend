import RatingIcon from '@/components/ui/RatingIcon';

type CreationRatingProps = {
  averageRating: number;
};

export default function CreationRating({ averageRating }: CreationRatingProps) {
  return (
    <div className="flex align-items-center gap-2">
      <RatingIcon colored fill />
      <span>{averageRating?.toFixed(1)}</span>
    </div>
  );
}
