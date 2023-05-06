type CreationRatingProps = {
  averageRating: number;
};

export default function CreationRating({ averageRating }: CreationRatingProps) {
  return (
    <div className="flex align-items-center gap-2">
      <span className="pi pi-star-fill text-primary"></span>
      <span>{averageRating?.toFixed(1)}</span>
    </div>
  );
}
