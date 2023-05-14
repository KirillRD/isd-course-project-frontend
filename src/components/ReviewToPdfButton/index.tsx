import { Button } from 'primereact/button';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ReviewDescription from '@/components/ReviewDescription';
import CreationItem from '@/components/ui/CreationItem';
import { Review } from '@/structures/types';
import { useTranslation } from 'react-i18next';

type ReviewToPdfButtonProps = {
  review: Review;
};

export default function ReviewToPdfButton({ review }: ReviewToPdfButtonProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review.pdf' });
  const reviewComponent = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => reviewComponent.current,
  });

  return (
    <>
      <div className="hidden">
        <div
          ref={reviewComponent}
          className="surface-ground flex flex-column gap-2"
        >
          <CreationItem creation={review.creation!} />
          <ReviewDescription review={review} />
        </div>
      </div>
      <Button
        label={t('export-button')!}
        onClick={handlePrint}
        icon="pi pi-file-pdf"
        text
      />
    </>
  );
}
