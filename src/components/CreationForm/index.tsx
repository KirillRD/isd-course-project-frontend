import { Button } from 'primereact/button';
import { useTranslation } from 'react-i18next';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import useCreationForm from './hooks/useCreationForm';
import { Dropdown, DropdownProps } from 'primereact/dropdown';
import { classNames } from 'primereact/utils';
import { CreationCategory } from '@/structures/enums';
import CreationCategoryTag from '@/components/ui/CreationCategoryTag';
import useSubmit from './hooks/useSubmit';
import { Messages } from 'primereact/messages';
import useErrorMessage from '@/hooks/useErrorMessage';
import { FileUpload } from 'primereact/fileupload';
import useImage from '@/components/CreationForm/hooks/useImage';
import { MAX_IMAGE_SIZE } from '@/utils/constants';

export default function CreationForm() {
  const [t] = useTranslation('translation', { keyPrefix: 'creation' });
  const { submit, error } = useSubmit();
  const { errorMessage } = useErrorMessage(error);
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    titleValue,
    isTitleError,
    titleError,
    categoryValue,
    isCategoryError,
    categoryError,
    descriptionValue,
    isDescriptionError,
    descriptionError,
    imageFileValue,
    isImageFileError,
    imageFileError,
  } = useCreationForm(submit);

  const { creationImage, handleImageSelect, handleImageRemove } =
    useImage(setFieldValue);

  const categoryItemTemplate = (option: CreationCategory) => {
    return <CreationCategoryTag creationCategory={option} />;
  };

  const selectedCategoryItemTemplate = (
    option: CreationCategory,
    props: DropdownProps
  ) => {
    return option ? (
      <CreationCategoryTag creationCategory={option} />
    ) : (
      <span>{props.placeholder}</span>
    );
  };

  return (
    <form
      className="flex flex-column p-fluid p-4 surface-card border-round border-1 surface-border"
      onSubmit={handleSubmit}
    >
      <h2 className="mt-0">{t('add-form.header')}</h2>

      <Messages ref={errorMessage} />

      <div className="field">
        <label htmlFor="title">{t('title')}</label>
        <InputText
          className={classNames({ 'p-invalid': isTitleError })}
          id="title"
          type="text"
          value={titleValue}
          onChange={handleChange}
        />
        <small className="p-error">{titleError}</small>
      </div>

      <div className="field col-4 p-0">
        <label htmlFor="category">{t('category')}</label>
        <Dropdown
          className={classNames({ 'p-invalid': isCategoryError })}
          id="category"
          value={categoryValue}
          options={Object.values(CreationCategory)}
          onChange={handleChange}
          placeholder={t('add-form.category-placeholder')!}
          itemTemplate={categoryItemTemplate}
          valueTemplate={selectedCategoryItemTemplate}
        />
        <small className="p-error">{categoryError}</small>
      </div>

      <div className="field">
        <label htmlFor="description">{t('description')}</label>
        <InputTextarea
          className={classNames({ 'p-invalid': isDescriptionError })}
          id="description"
          value={descriptionValue}
          onChange={handleChange}
          rows={5}
          autoResize
          style={{ resize: 'vertical' }}
        />
        <small className="p-error">{descriptionError}</small>
      </div>

      <div className="field">
        <label htmlFor="imageFile">{t('image')}</label>
        <FileUpload
          className={classNames({ 'p-invalid': isImageFileError })}
          ref={creationImage}
          id="imageFile"
          onSelect={handleImageSelect}
          onRemove={handleImageRemove}
          accept="image/*"
          maxFileSize={MAX_IMAGE_SIZE}
          uploadOptions={{ className: 'hidden' }}
          cancelOptions={{ className: 'hidden' }}
        />
        <small className="p-error">{imageFileError}</small>
      </div>

      <Button
        className="w-9rem align-self-end"
        type="submit"
        label={t('add-form.submit-button')!}
      />
    </form>
  );
}
