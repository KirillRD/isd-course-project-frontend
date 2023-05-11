import { Review } from '@/structures/types';
import styles from './styles.module.scss';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import ImageLink from '@/components/ui/ImageLink';
import CreationRating from '@/components/ui/CreationRating';
import UserBasicData from '@/components/ui/UserBasicData';
import { getFormattedDate } from '@/utils';
import parse from 'html-react-parser';
import GradeTag from '@/components/ui/GradeBadge';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import { useTranslation } from 'react-i18next';
import ReviewComment from '@/components/ui/ReviewComment';
import ReviewLike from '@/components/ui/ReviewLike';
import { CREATION_ARG } from '@/utils/reviewSearchParams';

type ReviewItemProps = {
  review: Review;
};

export default function ReviewItem({ review }: ReviewItemProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  return (
    <div className="w-full flex flex-column gap-2 p-2 surface-border border-1 border-round-md my-2">
      <TextLink
        path={PagePath.REVIEWS}
        args={{ [CREATION_ARG]: `${review.creation!.id}` }}
        reloadDocument
        className="max-w-max"
        selection
      >
        <h2 className="m-0">{review.creation?.title}</h2>
      </TextLink>
      <div className="flex align-items-center justify-content-between">
        <div className="flex align-items-center gap-3">
          <CreationCategoryTag creationCategory={review.creation!.category} />
          <CreationRating averageRating={review.creation!.averageRating!} />
        </div>
        <TextLink
          path={PagePath.REVIEWS}
          args={{ [CREATION_ARG]: `${review.creation!.id}` }}
          reloadDocument
          className="font-bold text-yellow-500"
        >
          <span>
            {t('item.reviews')} {review.creation?._count?.reviews}
          </span>
        </TextLink>
      </div>
      <div className="flex gap-2">
        <div className={styles.imageColumn}>
          <ImageLink
            path={PagePath.REVIEWS}
            args={{ [CREATION_ARG]: `${review.creation!.id}` }}
            reloadDocument
            imageUrl={review.creation!.imageUrl}
          />
        </div>
        <div className="flex flex-grow-1 flex-column gap-2">
          <TextLink
            path={`${PagePath.REVIEWS}/${review.id}`}
            className="max-w-max"
            selection
          >
            <h3 className="m-0">{review.title}</h3>
          </TextLink>
          <div className="flex align-items-center justify-content-between">
            <div className="flex align-items-center gap-3">
              <UserBasicData user={review.user!} />
              <span>{getFormattedDate(review.createDate)}</span>
            </div>
            <div className="flex align-items-center gap-3">
              <ReviewComment commentCount={review._count!.comments!} />
              <ReviewLike likeCount={review._count!.userLikes!} />
              <GradeTag grade={review.grade} />
            </div>
          </div>
          <div className={styles.reviewContainer}>
            <div className={`${styles.review}`}>{parse(review.body)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
