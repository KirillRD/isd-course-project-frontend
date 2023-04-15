import useTheme from '@/hooks/useTheme';
import { Theme } from '@/structures/enums';
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { PrimeIcons } from 'primereact/api';
import { SelectItem } from 'primereact/selectitem';
import { useTranslation } from 'react-i18next';

type ThemeDropdownProps = {
  className?: string;
};

export default function ThemeDropdown({ className }: ThemeDropdownProps) {
  const [t] = useTranslation('translation', { keyPrefix: 'theme' });
  const { theme, changeTheme } = useTheme();

  const themes: SelectItem[] = [
    {
      label: t('light')!,
      icon: PrimeIcons.SUN,
      value: Theme.LIGHT,
    },
    {
      label: t('dark')!,
      icon: PrimeIcons.MOON,
      value: Theme.DARK,
    },
  ];

  const handleThemeDropdownChange = (event: DropdownChangeEvent) => {
    changeTheme(event.value as Theme);
  };

  const valueTemplate = (option: SelectItem) => {
    if (option.value == theme) {
      return (
        <div className="h-full flex align-items-center">
          <span className={option.icon as string}></span>
        </div>
      );
    }
  };

  const itemTemplate = (option: SelectItem) => {
    return (
      <div className="h-full flex gap-2 align-items-center">
        <span className={option.icon as string}></span>
        <span>{option.label}</span>
      </div>
    );
  };

  return (
    <Dropdown
      className={className}
      value={theme}
      valueTemplate={valueTemplate}
      onChange={handleThemeDropdownChange}
      options={themes}
      itemTemplate={itemTemplate}
    />
  );
}
