import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import { CreationCategory } from '@/structures/enums';
import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { SelectItem } from 'primereact/selectitem';
import { useTranslation } from 'react-i18next';

type CreationCategoryFilterProps = {
  options: ColumnFilterElementTemplateOptions;
};

const creationCategories = Object.values(CreationCategory).map(
  (category) => ({ label: '', value: category } as SelectItem)
);

export default function CreationCategoryFilter({
  options,
}: CreationCategoryFilterProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  const handleChange = (event: MultiSelectChangeEvent) => {
    options.filterCallback(event.value);
  };

  const itemTemplate = (option: SelectItem) => {
    return (
      <CreationCategoryTag
        creationCategory={option.value as CreationCategory}
      />
    );
  };

  const selectedItemTemplate = (value: CreationCategory) => {
    if (value) {
      return <CreationCategoryTag creationCategory={value} className="mr-1" />;
    }
  };

  return (
    <MultiSelect
      value={options.value as CreationCategory}
      options={creationCategories}
      itemTemplate={itemTemplate}
      selectedItemTemplate={selectedItemTemplate}
      onChange={handleChange}
      placeholder={t('table.creation-category')!}
      showClear
    />
  );
}
