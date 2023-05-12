import { GoogleLogin } from '@react-oauth/google';
import styles from './styles.module.scss';

type GoogleButtonProps = {
  className?: string;
  onSuccess: (credential: string) => void;
};

export default function GoogleButton({ onSuccess }: GoogleButtonProps) {
  return (
    <div className="flex justify-content-center">
      <GoogleLogin
        onSuccess={(credentialResponse) =>
          onSuccess(credentialResponse.credential!)
        }
      />
    </div>
  );
}
