
// gestion des états d'authentification avec Redux

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
// import { useAppSelector } from '../../store/hooks';
import type { RootState } from '../../store/store';

export interface initialAuthStateType {
    isAuthenticated: boolean;
    rememberMe: boolean;
}

const initialState: initialAuthStateType = {
    isAuthenticated: false,
    rememberMe: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state) {
            state.isAuthenticated = true;
        },
        loginFailure(state) {
            state.isAuthenticated = false;
        },
        goLogout(state) {
            state.isAuthenticated = false;
        },
        rememberMe(state, action: PayloadAction<boolean>) {
            state.rememberMe = action.payload;
        }
    },
});

export default authSlice.reducer;
export const { loginSuccess, loginFailure, goLogout, rememberMe } = authSlice.actions;

export const selectIsRememberMe = (state: RootState) => state.auth.rememberMe;
// // export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
// // export const selectToken = (state: RootState) => state.auth.userToken;
