import { GRADE_STEP, MAX_GRADE, MIN_GRADE } from '@/utils/constants';
import { ColumnFilterElementTemplateOptions } from 'primereact/column';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { useTranslation } from 'react-i18next';

type GradeFilterProps = {
  options: ColumnFilterElementTemplateOptions;
};

export default function GradeFilter({ options }: GradeFilterProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  const handleChange = (event: InputNumberChangeEvent) => {
    options.filterCallback(event.value, options.index);
  };

  return (
    <InputNumber
      value={options.value as number}
      onChange={handleChange}
      min={MIN_GRADE}
      max={MAX_GRADE}
      step={GRADE_STEP}
      placeholder={t('grade')!}
      showButtons
      buttonLayout="horizontal"
      incrementButtonIcon="pi pi-angle-right"
      decrementButtonIcon="pi pi-angle-left"
    />
  );
}
