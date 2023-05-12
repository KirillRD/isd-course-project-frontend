import { useAppSelector } from '@/hooks/useRedux';
import { PagePath, Role } from '@/structures/enums';
import { Review } from '@/structures/types';
import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

type ReviewEditButtonProps = {
  review: Review;
};

export default function ReviewEditButton({ review }: ReviewEditButtonProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review.item' });
  const authUser = useAppSelector((state) => state.authUser.user);
  const updateReviewLink = `${PagePath.REVIEWS}/${review.id}${PagePath.UPDATE}`;

  return (
    <>
      {authUser &&
        (authUser?.id == review.userId ||
          authUser?.roles.includes(Role.ADMIN)) && (
          <Link
            to={
              authUser.id == review.userId
                ? updateReviewLink
                : `${PagePath.USERS}/${review.userId}${updateReviewLink}`
            }
          >
            <Button label={t('edit-button')!} icon="pi pi-pencil" text />
          </Link>
        )}
    </>
  );
}
