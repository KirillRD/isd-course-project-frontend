import useTagsValue from '@/components/ReviewList/components/TagMultiselect/hooks/useTagsValue';
import useGetTags from '@/hooks/api/tag/useGetTags';
import { Tag } from '@/structures/types';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { useEffect, useState } from 'react';

type TagMultiselectProps = {
  inputId: string;
  value: number[] | undefined;
  onChange: (tags: number[] | undefined, replace?: boolean) => void;
};

export default function TagMultiselect({
  inputId,
  value,
  onChange,
}: TagMultiselectProps) {
  const { tags } = useTagsValue(value, onChange);
  const { tags: options } = useGetTags({ stop: false });
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    setSelectedTags(tags ?? []);
  }, [tags]);

  const handleChange = (event: MultiSelectChangeEvent) => {
    const eventTags = Array.isArray(event.value) ? (event.value as Tag[]) : [];
    setSelectedTags(eventTags);
    onChange(eventTags.map((tag) => tag.id));
  };

  return (
    <MultiSelect
      inputId={inputId}
      value={selectedTags}
      selectedItemsLabel="name"
      onChange={handleChange}
      options={options}
      optionLabel="name"
      filter
      showClear
      display="chip"
    />
  );
}
