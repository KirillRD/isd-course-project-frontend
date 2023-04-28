import { CreationCategory } from '@/structures/enums';
import { Tag } from 'primereact/tag';
import { useTranslation } from 'react-i18next';

type CreationCategoryTagProps = {
  creationCategory: CreationCategory;
  className?: string;
};

export enum CreationCategoryColor {
  MOVIES = 'bg-blue-300',
  TV = 'bg-yellow-300',
  BOOKS = 'bg-green-300',
  MUSIC = 'bg-purple-300',
  GAMES = 'bg-red-300',
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
