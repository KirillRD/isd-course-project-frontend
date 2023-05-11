import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Messages } from 'primereact/messages';
import useLoginForm from '@/components/LoginForm/hooks/useLoginForm';
import useErrorMessage from '@/hooks/useErrorMessage';
import useSubmit from '@/components/LoginForm/hooks/useSubmit';
import GoogleButton from '@/components/GoogleButton';
import { Divider } from 'primereact/divider';
import TextLink from '@/components/ui/TextLink';
import { PagePath } from '@/structures/enums';

export type LoginFormBody = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [t] = useTranslation('translation', { keyPrefix: 'user' });
  const { submit, error, googleSubmit, googleError } = useSubmit();
  const { errorMessage } = useErrorMessage(error);
  const { errorMessage: googleErrorMessage } = useErrorMessage(googleError);
  const {
    handleSubmit,
    handleChange,
    emailValue,
    isEmailError,
    emailError,
    passwordValue,
    isPasswordError,
    passwordError,
  } = useLoginForm(submit);

  return (
    <form
      className="flex flex-column p-fluid p-4 surface-card border-round border-1 surface-border"
      onSubmit={handleSubmit}
    >
      <h1 className="align-self-center mt-0 mb-2">{t('login-form.header')}</h1>

      <Messages ref={errorMessage} />
      <Messages ref={googleErrorMessage} />

      <div className="field">
        <label htmlFor="email">{t('email')}</label>
        <span className="p-input-icon-right">
          <i className="pi pi-envelope" />
          <InputText
            className={classNames({ 'p-invalid': isEmailError })}
            id="email"
            type="text"
            value={emailValue}
            onChange={handleChange}
          />
        </span>
        <small className="p-error">{emailError}</small>
      </div>

      <div className="field">
        <label htmlFor="password">{t('password')}</label>
        <Password
          className={classNames({ 'p-invalid': isPasswordError })}
          inputId="password"
          value={passwordValue}
          onChange={handleChange}
          toggleMask
          feedback={false}
        />
        <small className="p-error">{passwordError}</small>
      </div>

      <div className="flex flex-column gap-3">
        <Button type="submit" label={t('login-form.submit-button')!} />
        <Divider className="m-0" align="center">
          <span>{t('login-form.divider')}</span>
        </Divider>
        <GoogleButton onSuccess={googleSubmit} />
        <div className="flex align-self-center gap-1">
          <span>{t('login-form.hint')}</span>
          <TextLink path={PagePath.SIGN_UP}>
            {t('login-form.hint-link')!}
          </TextLink>
        </div>
      </div>
    </form>
  );
}
