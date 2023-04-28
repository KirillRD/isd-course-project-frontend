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
    <div className="flex justify-content-between align-items-center">
      <div className="flex gap-2">
        <Link to={params.userId ? createReviewLink.slice(1) : createReviewLink}>
          <Button
            label={t('add-review-button')!}
            severity="success"
            icon="pi pi-plus"
          />
        </Link>
      </div>
      <div className="flex gap-2">
        <Button
          label={t('clear-filters-button')!}
          onClick={clearFilters}
          icon="pi pi-filter-slash"
          outlined
        />
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
