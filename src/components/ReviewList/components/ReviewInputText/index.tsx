import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from 'react';

type ReviewInputTextProps = {
  inputId: string;
  value: string | undefined;
  onChange: (review: string | undefined) => void;
};

export default function ReviewInputText({
  inputId,
  value,
  onChange,
}: ReviewInputTextProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <InputText id={inputId} value={value ?? ''} onChange={handleChange} />;
}
