import useGetCreations from '@/hooks/api/creation/useGetCreations';
import { Creation } from '@/structures/types';
import {
  AutoComplete,
  AutoCompleteChangeEvent,
  AutoCompleteCompleteEvent,
  AutoCompleteSelectEvent,
} from 'primereact/autocomplete';
import { useState } from 'react';

type CreationAutoCompleteProps = {
  inputId: string;
  value: number | undefined;
  onChange: (creation: number | undefined) => void;
};

export default function CreationAutoComplete({
  inputId,
  value,
  onChange,
}: CreationAutoCompleteProps) {
  const { creations, setSearchParams } = useGetCreations(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

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
