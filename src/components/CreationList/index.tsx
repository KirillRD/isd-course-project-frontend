import { useTranslation } from 'react-i18next';
import { DataView } from 'primereact/dataview';
import useGetCreations from '@/hooks/api/creation/useGetCreations';
import { ChangeEvent, useState } from 'react';
import { Creation } from '@/structures/types';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { PagePath } from '@/structures/enums';
import CreationListHeader from '@/components/CreationList/components/CreationListHeader';
import CreationItem from '@/components/ui/CreationItem';
import Card from '@/components/ui/Card';

export default function CreationList() {
  const [t] = useTranslation('translation', { keyPrefix: 'creation.list' });
  const [inputSearch, setInputSearch] = useState<string>('');
  const { creations, searchParams, setSearchParams } = useGetCreations();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchParams({
      ...searchParams,
      search: inputSearch,
    });
  };

  const itemTemplate = (creation: Creation) => {
    return (
      <CreationItem
        creation={creation}
        className="my-2"
        path={`../${creation.id}`}
      />
    );
  };

  return (
    <Card>
      <h1 className="mt-0">{t('title')}</h1>
      <p>{t('description')}</p>
      <DataView
        value={creations}
        itemTemplate={itemTemplate}
        header={
          <CreationListHeader
            searchValue={inputSearch}
            onSearchChange={handleSearchChange}
            onSearchSubmit={handleSearchSubmit}
          />
        }
        emptyMessage=" "
      />
      <p className="mt-6 mb-2">{t('add-creation-message')}</p>
      <Link to={`../.${PagePath.CREATE}`}>
        <Button label={t('add-creation-link')!} icon="pi pi-plus" />
      </Link>
    </Card>
  );
}
