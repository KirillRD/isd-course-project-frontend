import Card from '@/components/ui/Card';
import ReviewItem from '@/components/ui/ReviewItem';
import TextLink from '@/components/ui/TextLink';
import { GetReviewsParams, useGetReviewsQuery } from '@/redux/api/reviewApi';
import { PagePath } from '@/structures/enums';
import { Review } from '@/structures/types';
import queryString from 'query-string';
import { useTranslation } from 'react-i18next';
import { DataView } from 'primereact/dataview';
import { useMemo } from 'react';

type ReviewListByParamsProps = {
  translatePrefix: string;
  params: GetReviewsParams;
};

export default function ReviewListByParams({
  translatePrefix,
  params,
}: ReviewListByParamsProps) {
  const [t] = useTranslation('translation', {
    keyPrefix: `review.list.${translatePrefix}`,
  });
  const { data } = useGetReviewsQuery(params, {
    refetchOnMountOrArgChange: true,
  });

  const args = useMemo(() => {
    const { page, size, ...argsObj } = params;
    return queryString.stringify(argsObj);
  }, [params]);

  const itemTemplate = (review: Review) => {
    return <ReviewItem review={review} />;
  };

  return (
    <Card className="flex flex-column">
      <h2 className="mt-0">{t('title')}</h2>
      <DataView value={data} dataKey="id" itemTemplate={itemTemplate} />
      <TextLink className="align-self-end" path={PagePath.REVIEWS} args={args}>
        <h3 className="mb-0">{t('link')!}</h3>
      </TextLink>
    </Card>
  );
}
