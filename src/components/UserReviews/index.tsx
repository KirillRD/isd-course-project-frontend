import {
  DataTable,
  DataTableFilterMeta,
  DataTableSelectionChangeEvent,
} from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { Review } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import { getFormattedDate } from '@/utils';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import { CreationCategory, CreationCategoryColor } from '@/structures/enums';
import styles from './styles.module.scss';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Calendar, CalendarChangeEvent } from 'primereact/calendar';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { SelectItem } from 'primereact/selectitem';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { Button } from 'primereact/button';

type UserReviewsProps = {
  reviews: Review[];
};

const initFiltersValue = (): DataTableFilterMeta => {
  return {
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    title: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    'creation.title': {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
    },
    'creation.category': { value: null, matchMode: FilterMatchMode.IN },
    createDate: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
    },
    grade: {
      operator: FilterOperator.AND,
      constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
    },
  };
};

const gradeColors = new Map([
  [(garde: number) => garde == 0, 'bg-gray-300'],
  [(garde: number) => garde >= 1 && garde <= 4, 'bg-red-300'],
  [(garde: number) => garde >= 5 && garde <= 7, 'bg-yellow-300'],
  [(garde: number) => garde >= 8 && garde <= 10, 'bg-green-300'],
]);

const getGradeColor = (grade: number) => {
  for (const [predicate, value] of gradeColors.entries()) {
    if (predicate(grade)) return value;
  }
};

export default function UserReviews({ reviews }: UserReviewsProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });
  const [selectedReviews, setSelectedReviews] = useState<Review[]>([]);
  const [filters, setFilters] = useState<DataTableFilterMeta>(
    initFiltersValue()
  );
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');

  const handleSelectionChange = (
    event: DataTableSelectionChangeEvent<Review[]>
  ) => {
    setSelectedReviews(event.value as Review[]);
  };

  const handleGlobalFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const newFilters = { ...filters };

    newFilters.global.value = value;

    setFilters(newFilters);
    setGlobalFilterValue(value);
  };

  const clearFilters = () => {
    setFilters(initFiltersValue());
    setGlobalFilterValue('');
  };

  const header = () => {
    return (
      <div className="flex justify-content-between align-items-center">
        <div className="flex gap-2">
          <Button
            label={t('table.header.create-button')!}
            severity="success"
            icon="pi pi-plus"
          />
          <Button
            label={t('table.header.edit-button')!}
            severity="warning"
            icon="pi pi-pencil"
            disabled={selectedReviews.length != 1}
          />
          <Button
            label={t('table.header.delete-button')!}
            severity="danger"
            icon="pi pi-trash"
            disabled={!selectedReviews.length}
          />
        </div>
        <div className="flex gap-2">
          <Button
            label={t('table.header.clear-filters-button')!}
            onClick={clearFilters}
            icon="pi pi-filter-slash"
            outlined
          />
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue}
              onChange={handleGlobalFilterChange}
              placeholder={t('table.header.global-search-input')!}
            />
          </span>
        </div>
      </div>
    );
  };

  const creationImageTemplate = () => {
    return (
      <img src="https://www.bridgeway.co.nz/template_1/img/default-movie-portrait.jpg" />
    );
  };

  const creationCategoryTemplate = (review: Review) => {
    return (
      <Tag
        className={CreationCategoryColor[review.creation!.category]}
        value={t(`creation-category.${review.creation!.category}`)}
      />
    );
  };

  const reviewCreateDateTemplate = (review: Review) => {
    return getFormattedDate(review.createDate);
  };

  const reviewGradeTemplate = (review: Review) => {
    return (
      <Badge
        value={review.grade}
        size="large"
        className={`border-round ${getGradeColor(review.grade)!}`}
      />
    );
  };

  const creationCategoryFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    const handleChange = (event: MultiSelectChangeEvent) => {
      options.filterCallback(event.value);
    };

    const itemTemplate = (option: SelectItem) => {
      return (
        <Tag
          className={CreationCategoryColor[option.value as CreationCategory]}
          value={t(`creation-category.${option.value as CreationCategory}`)}
        />
      );
    };

    const selectedItemTemplate = (value: CreationCategory) => {
      if (value) {
        return (
          <Tag
            className={`mr-1 ${CreationCategoryColor[value]}`}
            value={t(`creation-category.${value}`)}
          />
        );
      }
    };

    const creationCategories = Object.values(CreationCategory).map(
      (category) => ({ label: '', value: category } as SelectItem)
    );

    return (
      <MultiSelect
        value={options.value as CreationCategory}
        options={creationCategories}
        itemTemplate={itemTemplate}
        selectedItemTemplate={selectedItemTemplate}
        onChange={handleChange}
        placeholder={t('creation-category-title')!}
        showClear
      />
    );
  };

  const createDateFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    const handleChange = (event: CalendarChangeEvent) => {
      options.filterCallback(event.value, options.index);
    };

    return (
      <Calendar
        value={options.value as Date}
        onChange={handleChange}
        dateFormat="dd.mm.yy"
        placeholder={t('review-create-date')!}
        readOnlyInput
        showButtonBar
      />
    );
  };

  const gradeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    const handleChange = (event: InputNumberChangeEvent) => {
      options.filterCallback(event.value, options.index);
    };

    return (
      <InputNumber
        value={options.value as number}
        onChange={handleChange}
        min={0}
        step={1}
        max={10}
        placeholder={t('review-grade')!}
        showButtons
        buttonLayout="horizontal"
        incrementButtonIcon="pi pi-angle-right"
        decrementButtonIcon="pi pi-angle-left"
      />
    );
  };

  const getReviews = (initReviews: Review[]) => {
    return [...initReviews].map((review) => ({
      ...review,
      createDate: new Date(review.createDate),
    }));
  };

  return (
    <div className="p-4 surface-card border-round border-1 surface-border">
      <h2 className="mt-0">{t('table.title')}</h2>
      <DataTable
        value={getReviews(reviews)}
        dataKey="id"
        stripedRows
        removableSort
        paginator
        rows={10}
        selectionMode="checkbox"
        selection={selectedReviews}
        onSelectionChange={handleSelectionChange}
        showSelectAll={false}
        filters={filters}
        globalFilterFields={[
          'title',
          'creation.title',
          'creation.category',
          'createDate',
          'grade',
        ]}
        header={header}
      >
        <Column selectionMode="multiple" className={styles.reviewCheckbox} />
        <Column
          className={styles.creationImage}
          header={t('review-image')}
          body={creationImageTemplate}
          alignHeader="center"
        />
        <Column
          className={styles.reviewTitle}
          field="title"
          header={t('review-title')}
          sortable
          filter
          filterPlaceholder={t('review-title')!}
        />
        <Column
          className={styles.creationTitle}
          field="creation.title"
          header={t('creation-title')}
          sortable
          filter
          filterPlaceholder={t('creation-title')!}
        />
        <Column
          className={styles.creationCategoryTitle}
          field="creation.category"
          header={t('creation-category-title')}
          body={creationCategoryTemplate}
          sortable
          filter
          showFilterMatchModes={false}
          filterElement={creationCategoryFilterTemplate}
        />
        <Column
          className={styles.reviewCreateDate}
          field="createDate"
          dataType="date"
          header={t('review-create-date')}
          body={reviewCreateDateTemplate}
          sortable
          filter
          filterElement={createDateFilterTemplate}
        />
        <Column
          className={styles.reviewGrade}
          field="grade"
          dataType="numeric"
          header={t('review-grade')}
          body={reviewGradeTemplate}
          sortable
          filter
          filterElement={gradeFilterTemplate}
        />
      </DataTable>
    </div>
  );
}
