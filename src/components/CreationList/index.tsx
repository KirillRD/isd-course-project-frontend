import { useTranslation } from 'react-i18next';
import { DataView } from 'primereact/dataview';
import useGetCreations from '@/hooks/api/creation/useGetCreations';
import { ChangeEvent } from 'react';
import { Creation } from '@/structures/types';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { PagePath } from '@/structures/enums';
import CreationListHeader from '@/components/CreationList/components/CreationListHeader';
import CreationListItem from '@/components/CreationList/components/CreationListItem';

export default function CreationList() {
  const [t] = useTranslation('translation', { keyPrefix: 'creation.list' });
  const { creations, search, inputSearchParams, setInputSearchParams } =
    useGetCreations();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearchParams({
      ...inputSearchParams,
      search: event.target.value,
    });
  };

  const itemTemplate = (creation: Creation) => {
    return <CreationListItem creation={creation} />;
  };

  return (
    <div className="p-4 surface-card border-round border-1 surface-border">
      <h1 className="mt-0">{t('title')}</h1>
      <p>{t('description')}</p>
      <DataView
        value={creations}
        itemTemplate={itemTemplate}
        header={
          <CreationListHeader
            searchValue={inputSearchParams.search}
            onSearchChange={handleSearchChange}
            onSearchSubmit={search}
          />
        }
        emptyMessage=" "
      />
      <p className="mt-6 mb-2">{t('add-creation-message')}</p>
      <Link
        to={`${PagePath.REVIEWS}${PagePath.CREATE}${PagePath.CREATIONS}${PagePath.CREATE}`}
      >
        <Button
          label={t('add-creation-link')!}
          severity="success"
          icon="pi pi-plus"
        />
      </Link>
    </div>
  );
}