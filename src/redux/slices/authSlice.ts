import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AuthState = {
  accessToken: string | null;
};

const initialState: AuthState = {
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => ({
      accessToken: action.payload,
    }),

    resetAuth: () => initialState,
  },
});

export const { setAccessToken, resetAuth } = authSlice.actions;

export default authSlice.reducer;
