import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

type UserTableHeaderProps = {
  searchValue: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function UserTableHeader({
  searchValue,
  onSearchChange,
}: UserTableHeaderProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'user.table.header' });

  return (
    <div className="flex justify-content-end align-items-center">
      <div className="flex gap-2">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={searchValue}
            onChange={onSearchChange}
            placeholder={t('search-input')!}
          />
        </span>
      </div>
    </div>
  );
}
