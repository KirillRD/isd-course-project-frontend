import { CreationCategory } from '@/structures/enums';
import { Tag } from 'primereact/tag';
import { useTranslation } from 'react-i18next';

type CreationCategoryTagProps = {
  creationCategory: CreationCategory;
  className?: string;
};

enum CreationCategoryColor {
  MOVIES = 'bg-blue-400',
  TV = 'bg-yellow-400',
  BOOKS = 'bg-green-400',
  MUSIC = 'bg-purple-400',
  GAMES = 'bg-red-400',
}

export default function CreationCategoryTag({
  creationCategory,
  className,
}: CreationCategoryTagProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'creation-category' });

  return (
    <Tag
      className={`${CreationCategoryColor[creationCategory]} ${className!}`}
      value={t(creationCategory)}
    />
  );
}
