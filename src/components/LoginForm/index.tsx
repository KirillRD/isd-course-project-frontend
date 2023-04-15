import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Messages } from 'primereact/messages';
import useLoginForm from '@/components/LoginForm/hooks/useLoginForm';

export default function LoginForm() {
  const [t] = useTranslation('translation', { keyPrefix: 'login-form' });
  const {
    handleSubmit,
    handleChange,
    emailValue,
    isEmailError,
    emailError,
    passwordValue,
    isPasswordError,
    passwordError,
    errorMessage,
  } = useLoginForm();

  return (
    <form
      className="flex flex-column p-fluid p-4 surface-card border-round border-1 surface-border"
      onSubmit={handleSubmit}
    >
      <h1 className="align-self-center mt-0 mb-2">{t('header')}</h1>

      <Messages ref={errorMessage} />

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

      <Button type="submit" label={t('submit-button')!} />
    </form>
  );
}
