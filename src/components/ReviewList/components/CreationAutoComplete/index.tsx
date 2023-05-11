import useCreationValue from '@/components/ReviewList/components/CreationAutoComplete/hooks/useCreationValue';
import useGetCreations from '@/hooks/api/creation/useGetCreations';
import { Creation } from '@/structures/types';
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent,
} from 'primereact/autocomplete';
import { useEffect, useState } from 'react';

type CreationAutoCompleteProps = {
  inputId: string;
  value: number | undefined;
  onChange: (creation: number | undefined, replace?: boolean) => void;
};

export default function CreationAutoComplete({
  inputId,
  value,
  onChange,
}: CreationAutoCompleteProps) {
  const { creation } = useCreationValue(value, onChange);
  const { creations, setSearchParams } = useGetCreations(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  useEffect(() => {
    setSelectedTitle(creation ? creation.title : null);
  }, [creation]);

  const handleChange = (event: AutoCompleteChangeEvent) => {
    if (event.value === null) {
      onChange(undefined);
    }
    setSelectedTitle(event.value as string | null);
  };

  const handleSelect = (event: AutoCompleteSelectEvent) => {
    onChange((event.value as Creation).id);
  };

  const handleCompleteMethod = (event: AutoCompleteCompleteEvent) => {
    setSearchParams({ search: event.query });
  };

  return (
    <AutoComplete
      inputId={inputId}
      value={selectedTitle}
      field="title"
      onChange={handleChange}
      onSelect={handleSelect}
      suggestions={creations}
      completeMethod={handleCompleteMethod}
      forceSelection
    />
  );
}
