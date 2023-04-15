import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { setTheme } from '@/redux/slices/themeSlice';
import { Theme } from '@/structures/enums';
import { useLayoutEffect } from 'react';

const THEME_LINK_ID = 'theme-link';
const THEME_LINK_HREF = 'href';

export default function useTheme() {
  const theme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    const themeLink = document.getElementById(THEME_LINK_ID);
    themeLink?.setAttribute(THEME_LINK_HREF, theme);
  }, [theme]);

  const changeTheme = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  return { theme, changeTheme };
}
