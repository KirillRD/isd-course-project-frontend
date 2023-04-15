import useSignUpForm from '@/components/SignUpForm/hooks/useSignUpForm';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Messages } from 'primereact/messages';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useTranslation } from 'react-i18next';

export default function SignUp() {
  const [t] = useTranslation('translation', { keyPrefix: 'sign-up-form' });
  const {
    handleSubmit,
    handleChange,
    emailValue,
    isEmailError,
    emailError,
    nameValue,
    isNameError,
    nameError,
    passwordValue,
    isPasswordError,
    passwordError,
    confirmPasswordValue,
    isConfirmPasswordError,
    confirmPasswordError,
    errorMessage,
  } = useSignUpForm();

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
        <label htmlFor="name">{t('name')}</label>
        <span className="p-input-icon-right">
          <i className="pi pi-user" />
          <InputText
            className={classNames({ 'p-invalid': isNameError })}
            id="name"
            type="text"
            value={nameValue}
            onChange={handleChange}
          />
        </span>
        <small className="p-error">{nameError}</small>
      </div>

      <div className="field">
        <label htmlFor="password">{t('password')}</label>
        <Password
          className={classNames({ 'p-invalid': isPasswordError })}
          inputId="password"
          value={passwordValue}
          onChange={handleChange}
          toggleMask
        />
        <small className="p-error">{passwordError}</small>
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">{t('confirm-password')}</label>
        <Password
          className={classNames({ 'p-invalid': isConfirmPasswordError })}
          inputId="confirmPassword"
          value={confirmPasswordValue}
          onChange={handleChange}
          toggleMask
          feedback={false}
        />
        <small className="p-error">{confirmPasswordError}</small>
      </div>

      <Button type="submit" label={t('submit-button')!} />
    </form>
  );
}
