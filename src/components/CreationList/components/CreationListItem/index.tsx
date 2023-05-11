import { Creation } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import { PagePath } from '@/structures/enums';
import ImageLink from '@/components/ui/ImageLink';
import TextLink from '@/components/ui/TextLink';

type CreationListItemProps = {
  creation: Creation;
};

export default function CreationListItem({ creation }: CreationListItemProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'creation.list.item',
  });

  return (
    <div className="w-full flex gap-2">
      <div className={styles.image}>
        <ImageLink path={`../${creation.id}`} imageUrl={creation.imageUrl} />
      </div>
      <div className="flex flex-column align-items-start gap-3 p-3">
        <TextLink path={`../${creation.id}`} selection>
          <h2 className="m-0">{creation.title}</h2>
        </TextLink>
        <CreationCategoryTag creationCategory={creation.category} />
        <TextLink path={`${PagePath.REVIEWS}/${creation.id}`}>
          {t('creation-link')!}
        </TextLink>
      </div>
    </div>
  );
}
