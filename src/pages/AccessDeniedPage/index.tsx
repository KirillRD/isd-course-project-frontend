import Card from '@/components/ui/Card';
import { useTranslation } from 'react-i18next';

export default function AccessDeniedPage() {
  const [t] = useTranslation('translation', { keyPrefix: 'access-denied' });

  return (
    <div className="my-auto xl:col-3 lg:col-5 md:col-6 sm:col-7 col-9">
      <Card>
        <div className="flex flex-column align-items-center">
          <h1 className="text-8xl m-0 text-primary">403</h1>
          <p className="text-3xl">{t('message')}</p>
        </div>
      </Card>
    </div>
  );
}
