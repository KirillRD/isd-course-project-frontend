import ReviewLike from '@/components/ReviewLike';
import Card from '@/components/ui/Card';
import GardeBadge from '@/components/ui/GradeBadge';
import ReviewTagEnumeration from '@/components/ui/ReviewTagEnumeration';
import { Review } from '@/structures/types';
import { getFormattedDate } from '@/utils';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import styles from './styles.module.scss';
import ReviewImageGalleria from '@/components/ui/ReviewImageGalleria';
import UserBasicData from '@/components/ui/UserBasicData';

type ReviewProps = {
  review: Review;
};

export default function ReviewDescription({ review }: ReviewProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  return (
    <Card className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <UserBasicData user={review.user!} />
        <div className="flex align-items-center gap-2">
          <span>{t('grade')!}:</span>
          <GardeBadge grade={review.grade} />
        </div>
      </div>
      <h2 className="my-1">{review.title}</h2>
      <ReviewTagEnumeration tags={review.tags!} />
      <div className={styles.reviewBody}>{parse(review.body)}</div>
      <ReviewImageGalleria images={review.images!} />
      <div className="flex align-items-center justify-content-between">
        <div className="flex gap-2">
          <span>{t('create-date')}:</span>
          <span>{getFormattedDate(review.createDate)}</span>
        </div>
        <div className="flex align-items-center gap-2">
          <ReviewLike reviewId={review.id} userLike={review.userLike} />
          <span>{review._count?.userLikes}</span>
        </div>
      </div>
    </Card>
  );
}
