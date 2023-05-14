import useFullReviewDescription from '@/components/FullReviewDescription/hooks/useFullReviewDescription';
import ReviewCommentBlock from '@/components/ReviewCommentBlock';
import ReviewDescription from '@/components/ReviewDescription';
import CreationItem from '@/components/ui/CreationItem';

export default function FullReviewDescription() {
  const { review } = useFullReviewDescription();

  return (
    <>
      {review && (
        <div className="flex flex-column gap-2">
          <CreationItem creation={review.creation!} />
          <ReviewDescription review={review} pdf edit />
          <ReviewCommentBlock />
        </div>
      )}
    </>
  );
}
