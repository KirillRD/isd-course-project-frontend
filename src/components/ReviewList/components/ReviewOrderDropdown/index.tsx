import { ReviewOrderOption, reviewOrderOptions } from '@/redux/api/reviewApi';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { SelectItem } from 'primereact/selectitem';
import { useTranslation } from 'react-i18next';

type ReviewOrderDropdownProps = {
  inputId: string;
  value: ReviewOrderOption;
  onChange: (order: ReviewOrderOption) => void;
};

export default function ReviewOrderDropdown({
  inputId,
  value,
  onChange,
}: ReviewOrderDropdownProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'review.list.header.order-options',
  });

  const handleChange = (event: DropdownChangeEvent) => {
    onChange(event.value as ReviewOrderOption);
  };

  const convertOrderOptions = (): SelectItem[] => {
    return reviewOrderOptions.map((orderOption) => ({
      label: t(orderOption)!,
      value: orderOption,
    }));
  };

  return (
    <Dropdown
      inputId={inputId}
      value={value}
      options={convertOrderOptions()}
      onChange={handleChange}
    />
  );
}
