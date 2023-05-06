import Card from '@/components/ui/Card';
import TextLink from '@/components/ui/TextLink';
import useGetTags from '@/hooks/api/tag/useGetTags';
import { PagePath } from '@/structures/enums';
import { Tag } from '@/structures/types';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TagCloud } from 'react-tagcloud';
import styles from './styles.module.scss';

type TagCloudItem = {
  value: string;
  count: number;
};

const getTagCloudTags = (tags: Tag[] | undefined): TagCloudItem[] => {
  return tags
    ? tags.map((tag) => ({ value: tag.name, count: tag._count!.reviews! }))
    : [];
};

export default function ReviewTagCloud() {
  const [t] = useTranslation('translation', { keyPrefix: 'tag.cloud' });
  const { tags } = useGetTags({ stop: false });

  const tagCloudTags = useMemo(() => getTagCloudTags(tags), [tags]);

  const renderer = (tag: TagCloudItem, size: number, color: string) => {
    const fontSize = `${size}px`;
    const tagStyle = { fontSize, color };
    return (
      <TextLink
        key={tag.value}
        className={styles.tagCloudItem}
        style={tagStyle}
        path={PagePath.REVIEWS}
      >
        {tag.value}
      </TextLink>
    );
  };

  return (
    <Card>
      <h2 className="mt-0">{t('title')}</h2>
      <TagCloud
        tags={tagCloudTags}
        maxSize={30}
        minSize={14}
        renderer={renderer}
      />
    </Card>
  );
}
