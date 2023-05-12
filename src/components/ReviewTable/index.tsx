import { DataTable } from 'primereact/datatable';
import { Column, ColumnFilterElementTemplateOptions } from 'primereact/column';
import { Review } from '@/structures/types';
import { useTranslation } from 'react-i18next';
import { getFormattedDate } from '@/utils';
import styles from './styles.module.scss';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import GradeTag from '@/components/ui/GradeBadge';
import CreationCategoryFilter from '@/components/ReviewTable/components/CreationCategoryFilter';
import CreateDateFilter from '@/components/ReviewTable/components/CreateDateFilter';
import GradeFilter from '@/components/ReviewTable/components/GradeFilter';
import useFilters from '@/components/ReviewTable/hooks/useFilters';
import ReviewTableHeader from '@/components/ReviewTable/components/ReviewTableHeader';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';
import ReviewActions from '@/components/ReviewTable/components/ReviewActions';
import ImageLink from '@/components/ui/ImageLink';
import { CREATION_ARG } from '@/utils/reviewSearchParams';
import Card from '@/components/ui/Card';

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

  const creationImageTemplate = (review: Review) => {
    return (
      <ImageLink
        path={PagePath.REVIEWS}
        args={{ [CREATION_ARG]: `${review.creation!.id}` }}
        imageUrl={review.creation!.imageUrl}
      />
    );
  };

  const titleTemplate = (review: Review) => {
    return (
      <TextLink path={`${PagePath.REVIEWS}/${review.id}`} selection>
        {review.title}
      </TextLink>
    );
  };

  const creationTitleTemplate = (review: Review) => {
    return (
      <TextLink
        path={PagePath.REVIEWS}
        args={{ [CREATION_ARG]: `${review.creation!.id}` }}
        selection
      >
        {review.creation!.title}
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
    return <GradeTag grade={review.grade} />;
  };

  const actionsTemplate = (review: Review) => {
    return <ReviewActions review={review} />;
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
    <Card>
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
          body={creationImageTemplate}
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
          body={creationTitleTemplate}
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
    </Card>
  );
}
