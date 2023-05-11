import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

type GoogleButtonProps = {
  className?: string;
  onSuccess: (credential: string) => void;
};

export default function GoogleButton({ onSuccess }: GoogleButtonProps) {
  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID as string}
    >
      <GoogleLogin
        onSuccess={(credentialResponse) =>
          onSuccess(credentialResponse.credential!)
        }
      />
    </GoogleOAuthProvider>
  );
}
