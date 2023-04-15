import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Theme } from '@/structures/enums';

type ThemeState = {
  value: Theme;
};

const initialState: ThemeState = {
  value: Theme.LIGHT,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => ({
      value: action.payload,
    }),
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
