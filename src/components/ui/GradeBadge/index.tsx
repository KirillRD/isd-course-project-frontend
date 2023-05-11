import { Badge } from 'primereact/badge';

type GradeBadgeProps = {
  grade: number;
};

const gradeColors = new Map([
  [(grade: number) => grade == 0, 'bg-gray-400'],
  [(grade: number) => grade >= 1 && grade <= 4, 'bg-red-400'],
  [(grade: number) => grade >= 5 && grade <= 7, 'bg-yellow-400'],
  [(grade: number) => grade >= 8 && grade <= 10, 'bg-green-400'],
]);

const getGradeColor = (grade: number) => {
  for (const [predicate, value] of gradeColors.entries()) {
    if (predicate(grade)) return value;
  }
};

export default function GradeBadge({ grade }: GradeBadgeProps) {
  return (
    <Badge
      value={grade}
      size="large"
      className={`border-round ${getGradeColor(grade)!}`}
    />
  );
}
