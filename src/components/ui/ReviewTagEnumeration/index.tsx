import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import { Tag } from '@/structures/types';
import { TAG_ARG } from '@/utils/reviewSearchParams';

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
              <TextLink
                path={PagePath.REVIEWS}
                args={{ [TAG_ARG]: `${tag.id}` }}
              >
                {tag.name}
              </TextLink>
              {index < tags.length - 1 && <>,&nbsp;</>}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
