import UserProfile from '@/components/UserProfile';
import { useParams } from 'react-router-dom';

export default function UserPage() {
  const params = useParams();

  return (
    <div className="xl:col-9 col-12">
      <UserProfile userId={Number(params.userId)} />
    </div>
  );
}
