import GoogleButton from '@/components/GoogleButton';
import useSignUpForm from '@/components/SignUpForm/hooks/useSignUpForm';
import useSubmit from '@/components/SignUpForm/hooks/useSubmit';
import Card from '@/components/ui/Card';
import TextLink from '@/components/ui/TextLink';
import useErrorMessage from '@/hooks/useErrorMessage';
import { PagePath } from '@/structures/enums';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Messages } from 'primereact/messages';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { useTranslation } from 'react-i18next';

export type SignUpFormBody = {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
};

export default function SignUp() {
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
    nameValue,
    isNameError,
    nameError,
    passwordValue,
    isPasswordError,
    passwordError,
    confirmPasswordValue,
    isConfirmPasswordError,
    confirmPasswordError,
  } = useSignUpForm(submit);

  return (
    <Card>
      <form className="flex flex-column p-fluid" onSubmit={handleSubmit}>
        <h1 className="align-self-center mt-0 mb-2">
          {t('sign-up-form.header')}
        </h1>

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

        <div className="flex flex-column gap-3">
          <Button type="submit" label={t('sign-up-form.submit-button')!} />
          <Divider className="m-0" align="center">
            <span>{t('sign-up-form.divider')}</span>
          </Divider>
          <GoogleButton onSuccess={googleSubmit} />
          <div className="flex align-self-center gap-1">
            <span>{t('sign-up-form.hint')}</span>
            <TextLink path={PagePath.LOGIN}>
              {t('sign-up-form.hint-link')!}
            </TextLink>
          </div>
        </div>
      </form>
    </Card>
  );
}
