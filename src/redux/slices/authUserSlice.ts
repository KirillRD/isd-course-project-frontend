import { User } from '@/structures/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type AuthUserState = {
  user: User | null;
};

const initialState: AuthUserState = {
  user: null,
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<User>) => ({
      user: action.payload,
    }),

    resetAuthUser: () => initialState,
  },
});

export const { setAuthUser, resetAuthUser } = authUserSlice.actions;

export default authUserSlice.reducer;
