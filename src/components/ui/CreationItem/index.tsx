import { Creation } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import CreationRatingAction from '@/components/CreationRatingAction';
import CreationRating from '@/components/ui/CreationRating';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import ImageLink from '@/components/ui/ImageLink';
import { CREATION_ARG } from '@/utils/reviewSearchParams';

type CreationItemProps = {
  className?: string;
  creation: Creation;
  path?: string;
};

export default function CreationItem({
  className,
  creation,
  path,
}: CreationItemProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'creation' });

  return (
    <div
      className={`w-full flex flex-column gap-3 p-3 surface-card border-round border-1 surface-border ${className!}`}
    >
      <TextLink
        path={path ?? PagePath.REVIEWS}
        args={path ? {} : { [CREATION_ARG]: `${creation.id}` }}
        className="max-w-max"
        selection
      >
        <h2 className="m-0">{creation.title}</h2>
      </TextLink>
      <div className="flex gap-3">
        <div className={styles.creationImage}>
          <ImageLink
            path={path ?? PagePath.REVIEWS}
            args={path ? {} : { [CREATION_ARG]: `${creation.id}` }}
            imageUrl={creation.imageUrl}
          />
        </div>
        <div className="flex flex-grow-1 flex-column gap-2">
          <div className="flex align-items-center justify-content-between">
            <div className="flex align-items-center gap-3">
              <CreationCategoryTag creationCategory={creation.category} />
              <CreationRating averageRating={creation.averageRating!} />
            </div>
            <TextLink
              path={PagePath.REVIEWS}
              args={{ [CREATION_ARG]: `${creation.id}` }}
              className="font-bold text-yellow-500"
            >
              <span>
                {t('item.reviews')} {creation._count?.reviews}
              </span>
            </TextLink>
          </div>
          <span>{t('description')}:</span>
          <p className={`m-0 ${styles.creationDescription}`}>
            {creation.description}
          </p>
          <CreationRatingAction
            className="mt-1"
            creationId={creation.id}
            userRating={
              creation.ratings?.length ? creation.ratings[0].rating : undefined
            }
          />
        </div>
      </div>
    </div>
  );
}
