import TextLink from '@/components/ui/TextLink';
import { Tag } from '@/structures/types';

type ReviewTagEnumerationProps = {
  tags: Tag[];
};

export default function ReviewTagEnumeration({
  tags,
}: ReviewTagEnumerationProps) {
  return (
    <>
      {!!tags.length && (
        <div className="flex flex-wrap justify-content-end">
          {tags.map((tag, index) => (
            <span key={tag.id}>
              <TextLink path="/">{tag.name}</TextLink>
              {index < tags.length - 1 && <>,&nbsp;</>}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
