import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import { useTranslation } from 'react-i18next';

type CreateDateFilterProps = {
  options: ColumnFilterElementTemplateOptions;
};

export default function CreateDateFilter({ options }: CreateDateFilterProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  const handleChange = (event: CalendarChangeEvent) => {
    options.filterCallback(event.value, options.index);
  };

  return (
    <Calendar
      value={options.value as Date}
      onChange={handleChange}
      dateFormat="dd.mm.yy"
      placeholder={t('create-date')!}
      readOnlyInput
      showButtonBar
    />
  );
}
