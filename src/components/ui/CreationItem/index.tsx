import { Creation } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import ImageContainer from '@/components/ui/ImageContainer';
import CreationRatingAction from '@/components/CreationRatingAction';
import CreationRating from '@/components/ui/CreationRating';

type CreationItemProps = {
  creation: Creation;
};

export default function CreationItem({ creation }: CreationItemProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'creation' });

  return (
    <div className="flex flex-column p-4 surface-card border-round border-1 surface-border">
      <h1 className="mt-0">{creation.title}</h1>
      <div className="flex gap-3">
        <div className={`${styles.creationImage} flex flex-column gap-2`}>
          <ImageContainer url="https://www.bridgeway.co.nz/template_1/img/default-movie-portrait.jpg" />
          <CreationRating averageRating={creation.averageRating} />
        </div>
        <div className={`${styles.creationInfo} flex flex-column gap-2`}>
          <div className="flex align-items-center gap-2">
            <span>{t('category')}:</span>
            <CreationCategoryTag creationCategory={creation.category} />
          </div>
          <span>{t('description')}:</span>
          <p className="mt-0">{creation.description}</p>
          <CreationRatingAction
            creationId={creation.id}
            userRating={creation.userRating}
          />
        </div>
      </div>
    </div>
  );
}
