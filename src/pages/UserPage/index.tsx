import UserProfile from '@/components/UserProfile';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const params = useParams();

  return (
    <div className="col-10">
      <UserProfile userId={Number(params.userId)} />
    </div>
  );
}
