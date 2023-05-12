import { PagePath } from '@/structures/enums';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

type ReviewTableHeaderProps = {
  globalFilterValue: string;
  onGlobalFilterChange: (event: ChangeEvent<HTMLInputElement>) => void;
  clearFilters: () => void;
};

const createReviewLink = `${PagePath.REVIEWS}${PagePath.CREATE}${PagePath.CREATIONS}${PagePath.SELECT}`;

export default function ReviewTableHeader({
  globalFilterValue,
  onGlobalFilterChange,
  clearFilters,
}: ReviewTableHeaderProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: 'review.table.header',
  });
  const params = useParams();

  return (
    <div className="flex align-items-center flex-wrap">
      <div className="xl:col-2 md:col-3 sm:col-4 col-12 p-fluid">
        <Link to={params.userId ? createReviewLink.slice(1) : createReviewLink}>
          <Button
            label={t('add-review-button')!}
            severity="warning"
            icon="pi pi-comments"
          />
        </Link>
      </div>
      <div className="xl:col-2 md:col-3 sm:col-4 col-12 p-fluid sm:ml-auto">
        <Button
          label={t('clear-filters-button')!}
          onClick={clearFilters}
          icon="pi pi-filter-slash"
          outlined
        />
      </div>
      <div className="xl:col-2 md:col-3 sm:col-4 col-12 p-fluid">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder={t('global-search-input')!}
          />
        </span>
      </div>
    </div>
  );
}
