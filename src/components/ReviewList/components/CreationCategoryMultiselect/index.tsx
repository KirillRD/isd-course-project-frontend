import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import { CreationCategory } from '@/structures/enums';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { SelectItem } from 'primereact/selectitem';

type CreationCategoryMultiselectProps = {
  inputId: string;
  value: CreationCategory[] | undefined;
  onChange: (creationCategories: CreationCategory[] | undefined) => void;
};

const creationCategories = Object.values(CreationCategory).map(
  (category) => ({ label: '', value: category } as SelectItem)
);

export default function CreationCategoryMultiselect({
  inputId,
  value,
  onChange,
}: CreationCategoryMultiselectProps) {
  const handleChange = (event: MultiSelectChangeEvent) => {
    onChange(event.value as CreationCategory[]);
  };

  const itemTemplate = (option: SelectItem) => {
    return (
      <CreationCategoryTag
        creationCategory={option.value as CreationCategory}
      />
    );
  };

  const selectedItemTemplate = (creationCategory: CreationCategory) => {
    if (creationCategory) {
      return (
        <CreationCategoryTag
          creationCategory={creationCategory}
          className="mr-1"
        />
      );
    }
  };

  return (
    <MultiSelect
      inputId={inputId}
      value={value}
      options={creationCategories}
      onChange={handleChange}
      itemTemplate={itemTemplate}
      selectedItemTemplate={selectedItemTemplate}
      showClear
      panelHeaderTemplate={<></>}
      placeholder={'\u00A0'}
    />
  );
}
