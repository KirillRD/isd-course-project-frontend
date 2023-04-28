import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTableFilterMeta } from 'primereact/datatable';
import { ChangeEvent, useState } from 'react';

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

export default function useFilters() {
  const [filters, setFilters] = useState<DataTableFilterMeta>(
    initFiltersValue()
  );
  const [globalFilterValue, setGlobalFilterValue] = useState<string>('');

  const handleGlobalFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const newFilters = { ...filters };

    // @ts-expect-error
    newFilters.global.value = value;

    setFilters(newFilters);
    setGlobalFilterValue(value);
  };

  const clearFilters = () => {
    setFilters(initFiltersValue());
    setGlobalFilterValue('');
  };

  return { filters, globalFilterValue, handleGlobalFilterChange, clearFilters };
}
