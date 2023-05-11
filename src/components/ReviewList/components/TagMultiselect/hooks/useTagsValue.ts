import useGetTags from '@/hooks/api/tag/useGetTags';
import { useEffect } from 'react';

export default function useTagsValue(
  tagsValue: number[] | undefined,
  setTagsValue: (tagsValue: number[] | undefined, replace?: boolean) => void
) {
  const { tags } = useGetTags({
    params: { tag: tagsValue },
    stop: !tagsValue?.length,
  });

  useEffect(() => {
    if (tagsValue?.length !== tags?.length) {
      setTagsValue(
        tagsValue?.filter((tagValue) =>
          tags?.some((tag) => tag.id == tagValue)
        ),
        true
      );
    }
  }, [tags]);

  return { tags };
}
