import ReviewLikeAction from '@/components/ReviewLikeAction';
import Card from '@/components/ui/Card';
import GradeBadge from '@/components/ui/GradeBadge';
import ReviewTagEnumeration from '@/components/ui/ReviewTagEnumeration';
import { Review } from '@/structures/types';
import { getFormattedDate } from '@/utils';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import styles from './styles.module.scss';
import ReviewImageGalleria from '@/components/ui/ReviewImageGalleria';
import UserBasicData from '@/components/ui/UserBasicData';
import ReviewEditButton from '@/components/ui/ReviewEditButton';
import ReviewToPdfButton from '@/components/ReviewToPdfButton';

type ReviewProps = {
  review: Review;
  pdf?: boolean;
  edit?: boolean;
};

export default function ReviewDescription({
  review,
  pdf = false,
  edit = false,
}: ReviewProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  return (
    <Card className="flex flex-column gap-3">
      <div className="flex align-items-center justify-content-between">
        <div className="flex align-items-center gap-2">
          <UserBasicData user={review.user!} />
          <span>{getFormattedDate(review.createDate)}</span>
        </div>
        <div className="flex align-items-center gap-2">
          <span>{t('grade')!}:</span>
          <GradeBadge grade={review.grade} />
        </div>
      </div>
      <h2 className="my-1">{review.title}</h2>
      <ReviewTagEnumeration tags={review.tags!} />
      <div className={styles.reviewBody}>{parse(review.body)}</div>
      <ReviewImageGalleria images={review.images!} />
      <div className="flex align-items-center">
        <div className="flex align-items-center gap-2">
          {pdf && <ReviewToPdfButton review={review} />}
          {edit && <ReviewEditButton review={review} />}
        </div>
        <div className="ml-auto flex align-items-center gap-2">
          <ReviewLikeAction
            reviewId={review.id}
            userLike={!!review.userLikes?.length}
          />
          <span>{review._count?.userLikes}</span>
        </div>
      </div>
    </Card>
  );
}
