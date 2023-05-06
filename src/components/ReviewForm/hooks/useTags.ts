import useGetTags from '@/hooks/api/tag/useGetTags';
import { TagBody } from '@/redux/api/reviewApi';
import { GetTagsParams } from '@/redux/api/tagApi';
import {
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import { useMemo, useState } from 'react';

export default function useTags(
  tagsValue: TagBody[],
  setFieldValue: (field: 'tags', value: TagBody[]) => void
) {
  const [searchParams, setSearchParams] = useState<GetTagsParams>({
    search: '',
  });
  const { tags } = useGetTags({ params: searchParams });

  const filteredTags = useMemo(() => {
    const newFilteredTags: TagBody[] | undefined = tags?.filter(
      (tag) =>
        !tagsValue.some(
          (tagValue) => tag.id === tagValue.id || tag.name === tagValue.name
        )
    );
    if (
      searchParams.search &&
      !tags?.length &&
      !newFilteredTags?.some((tag) => tag.name === searchParams.search) &&
      !tagsValue.some((tag) => tag.name === searchParams.search)
    ) {
      newFilteredTags?.push({
        name: searchParams.search,
      });
    }
    return newFilteredTags;
  }, [tags, searchParams]);

  const handleTagsChange = (event: AutoCompleteChangeEvent) => {
    if (event.value) {
      setFieldValue('tags', [...(event.value as TagBody[])]);
    }
  };

  const handleTagsCompleteMethod = (event: AutoCompleteCompleteEvent) => {
    setSearchParams({
      search: event.query,
    });
  };

  return { filteredTags, handleTagsChange, handleTagsCompleteMethod };
}
