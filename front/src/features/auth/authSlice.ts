
// // gestion de l'état de l'authentification avec Redux

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.token = action.payload;
    },
    loginFailure(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export default authSlice.reducer;
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// // export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
// // export const selectToken = (state: RootState) => state.auth.token;
