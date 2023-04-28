import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

type CreationListHeaderProps = {
  searchValue: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: () => void;
};

export default function CreationListHeader({
  searchValue,
  onSearchChange,
  onSearchSubmit,
}: CreationListHeaderProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'creation.list.header',
  });

  return (
    <div className="flex gap-2">
      <InputText
        className="col-5"
        value={searchValue}
        onChange={onSearchChange}
        placeholder={t('search-input')!}
      />
      <Button
        label={t('search-button')!}
        onClick={onSearchSubmit}
        disabled={!searchValue}
        icon="pi pi-search"
      />
    </div>
  );
}
