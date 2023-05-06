import ReviewListByCreateDateDesc from '@/components/ReviewListByCreateDateDesc';
import ReviewListByGradeDesc from '@/components/ReviewListByGradeDesc';
import ReviewTagCloud from '@/components/ReviewTagCloud';

export default function HomePage() {
  return (
    <div className="col-8">
      <div className="grid">
        <div className="col-10 flex flex-column gap-8">
          <ReviewListByGradeDesc />
          <ReviewListByCreateDateDesc />
        </div>
        <div className="col-2">
          <ReviewTagCloud />
        </div>
      </div>
    </div>
  );
}
