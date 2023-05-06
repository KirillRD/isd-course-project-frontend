import useGetTags from '@/hooks/api/tag/useGetTags';
import { Tag } from '@/structures/types';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { useEffect, useState } from 'react';

type TagMultiselectProps = {
  inputId: string;
  value: number[] | undefined;
  onChange: (tags: number[] | undefined) => void;
};

export default function TagMultiselect({
  inputId,
  value,
  onChange,
}: TagMultiselectProps) {
  const { tags } = useGetTags({ stop: false });
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  useEffect(() => {
    onChange(selectedTags.map((tag) => tag.id));
  }, [selectedTags]);

  const handleChange = (event: MultiSelectChangeEvent) => {
    setSelectedTags(Array.isArray(event.value) ? (event.value as Tag[]) : []);
  };

  return (
    <MultiSelect
      inputId={inputId}
      value={selectedTags}
      selectedItemsLabel="name"
      onChange={handleChange}
      options={tags}
      optionLabel="name"
      filter
      showClear
      display="chip"
    />
  );
}
