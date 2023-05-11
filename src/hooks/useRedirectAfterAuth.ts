import { PagePath } from '@/structures/enums';
import { useNavigate, useLocation } from 'react-router-dom';

export default function useRedirectAfterAuth() {
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = () => {
    navigate(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      location.state && location.state.from
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          location.state.from
        : PagePath.PROFILE
    );
  };

  return { redirect };
}
