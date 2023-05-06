import useReviewLike from '@/components/ReviewLike/hooks/useLike';
import { Rating } from 'primereact/rating';
import styles from './styles.module.scss';

type ReviewLikeProps = {
  reviewId: number;
  userLike: boolean | undefined;
};

export default function ReviewLike({ reviewId, userLike }: ReviewLikeProps) {
  const { handleClick } = useReviewLike(reviewId, userLike);

  return (
    <Rating
      value={+!!userLike}
      onChange={handleClick}
      offIcon={
        <li className={`pi pi-thumbs-up text-xl ${styles.offIcon}`}></li>
      }
      onIcon={<li className="pi pi-thumbs-up-fill text-primary text-xl"></li>}
      stars={1}
      cancel={false}
    />
  );
}
