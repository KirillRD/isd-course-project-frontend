import { useTranslation } from 'react-i18next';
import { Language } from '@/structures/enums';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { SelectItem } from 'primereact/selectitem';

type LanguageDropdownProps = {
  className?: string;
};

export default function LanguageDropdown({ className }: LanguageDropdownProps) {
  const [t, i18n] = useTranslation('translation', { keyPrefix: 'language' });
  const languages: SelectItem[] = Object.values(Language).map((language) => ({
    label: t(language)!,
    value: language,
  }));

  const handleLanguageDropdownChange = (event: DropdownChangeEvent) => {
    void i18n.changeLanguage(event.value as string);
  };

  return (
    <Dropdown
      className={className}
      value={i18n.resolvedLanguage}
      onChange={handleLanguageDropdownChange}
      options={languages}
    />
  );
}
