import { DataTable } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { Review } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import { getFormattedDate } from '@/utils';
import styles from './styles.module.scss';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import ImageContainer from '@/components/ui/ImageContainer';
import GardeBadge from '@/components/ui/GradeBadge';
import CreationCategoryFilter from '@/components/ReviewTable/components/CreationCategoryFilter';
import CreateDateFilter from '@/components/ReviewTable/components/CreateDateFilter';
import GradeFilter from '@/components/ReviewTable/components/GradeFilter';
import useFilters from '@/components/ReviewTable/hooks/useFilters';
import ReviewTableHeader from '@/components/ReviewTable/components/ReviewTableHeader';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import ReviewActions from '@/components/ReviewTable/components/ReviewActions';

type ReviewTableProps = {
  reviews: Review[];
};

const getReviews = (initReviews: Review[]) => {
  return [...initReviews].map((review) => ({
    ...review,
    createDate: new Date(review.createDate),
  }));
};

export default function ReviewTable({ reviews }: ReviewTableProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'review' });

  const { filters, globalFilterValue, handleGlobalFilterChange, clearFilters } =
    useFilters();

  const imageTemplate = (review: Review) => {
    return (
      <ImageContainer url="https://www.bridgeway.co.nz/template_1/img/default-movie-portrait.jpg" />
    );
  };

  const titleTemplate = (review: Review) => {
    return (
      <TextLink path={`${PagePath.REVIEWS}/${review.id}`} selection>
        {review.title}
      </TextLink>
    );
  };

  const creationCategoryTemplate = (review: Review) => {
    return <CreationCategoryTag creationCategory={review.creation!.category} />;
  };

  const createDateTemplate = (review: Review) => {
    return getFormattedDate(review.createDate);
  };

  const gradeTemplate = (review: Review) => {
    return <GardeBadge grade={review.grade} />;
  };

  const actionsTemplate = (review: Review) => {
    return <ReviewActions reviewId={review.id} />;
  };

  const creationCategoryFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return <CreationCategoryFilter options={options} />;
  };

  const createDateFilterTemplate = (
    options: ColumnFilterElementTemplateOptions
  ) => {
    return <CreateDateFilter options={options} />;
  };

  const gradeFilterTemplate = (options: ColumnFilterElementTemplateOptions) => {
    return <GradeFilter options={options} />;
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
        filters={filters}
        globalFilterFields={[
          'title',
          'creation.title',
          'creation.category',
          'createDate',
          'grade',
        ]}
        header={
          <ReviewTableHeader
            globalFilterValue={globalFilterValue}
            onGlobalFilterChange={handleGlobalFilterChange}
            clearFilters={clearFilters}
          />
        }
      >
        <Column
          className={styles.creationImage}
          header={t('table.creation-image')}
          body={imageTemplate}
          alignHeader="center"
        />
        <Column
          className={styles.review}
          field="title"
          header={t('body')}
          body={titleTemplate}
          sortable
          filter
          filterPlaceholder={t('body')!}
        />
        <Column
          className={styles.creation}
          field="creation.title"
          header={t('creation')}
          sortable
          filter
          filterPlaceholder={t('creation')!}
        />
        <Column
          className={styles.creationCategory}
          field="creation.category"
          header={t('table.creation-category')}
          body={creationCategoryTemplate}
          sortable
          filter
          showFilterMatchModes={false}
          filterElement={creationCategoryFilterTemplate}
        />
        <Column
          className={styles.createDate}
          field="createDate"
          dataType="date"
          header={t('create-date')}
          body={createDateTemplate}
          sortable
          filter
          filterElement={createDateFilterTemplate}
        />
        <Column
          className={styles.grade}
          field="grade"
          dataType="numeric"
          header={t('grade')}
          body={gradeTemplate}
          sortable
          filter
          filterElement={gradeFilterTemplate}
        />
        <Column body={actionsTemplate} />
      </DataTable>
    </div>
  );
}
