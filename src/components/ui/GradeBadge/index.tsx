import { Badge } from 'primereact/badge';

type GardeBadgeProps = {
  grade: number;
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

export default function GardeBadge({ grade }: GardeBadgeProps) {
  return (
    <Badge
      value={grade}
      size="large"
      className={`border-round ${getGradeColor(grade)!}`}
    />
  );
}
