import { Review } from '@/structures/types';
import styles from './styles.module.scss';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import ImageLink from '@/components/ui/ImageLink';
import CreationRating from '@/components/ui/CreationRating';
import UserBasicData from '@/components/ui/UserBasicData';
import { getFormattedDate } from '@/utils';
import parse from 'html-react-parser';
import GardeBadge from '@/components/ui/GradeBadge';

type ReviewItemProps = {
  review: Review;
};

export default function ReviewItem({ review }: ReviewItemProps) {
  return (
    <div className="w-full flex flex-column gap-2 p-3 pt-2 surface-border border-1 border-round-md my-2">
      <TextLink path={`${PagePath.REVIEWS}/${review.id}`} className="max-w-max">
        <h2 className="m-0">{review.title}</h2>
      </TextLink>
      <div className="flex gap-2">
        <div className={styles.imageColumn}>
          <ImageLink
            path={PagePath.HOME}
            imageUrl="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
          />
        </div>
        <div className={`${styles.infoColumn} flex flex-column gap-3`}>
          <TextLink path={PagePath.HOME} selection>
            <span className="text-xl">{review.creation?.title}</span>
          </TextLink>
          <div className="flex align-items-center gap-2">
            <CreationRating averageRating={review.creation!.averageRating} />
            <UserBasicData user={review.user!} />
            <GardeBadge grade={review.grade} />
            <span>{getFormattedDate(review.createDate)}</span>
          </div>
          <div className={styles.reviewContainer}>
            <div className={`${styles.review}`}>{parse(review.body)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
