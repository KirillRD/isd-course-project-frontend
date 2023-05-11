import ReviewListByCreateDateDesc from '@/components/ReviewListByCreateDateDesc';
import ReviewListByGradeDesc from '@/components/ReviewListByGradeDesc';
import ReviewTagCloud from '@/components/ReviewTagCloud';

export default function HomePage() {
  return (
    <div className="xl:col-8 lg:col-10 md:col-11 col-12">
      <div className="grid flex-wrap-reverse">
        <div className="xl:col-9 col-12 flex flex-column gap-4">
          <ReviewListByGradeDesc />
          <ReviewListByCreateDateDesc />
        </div>
        <div className="xl:col-3 col-12">
          <ReviewTagCloud />
        </div>
      </div>
    </div>
  );
}
