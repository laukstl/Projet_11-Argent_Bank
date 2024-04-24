
// gestion des états d'authentification avec Redux

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

export interface initialAuthStateType {
    isAuthenticated: boolean;
    rememberMe: boolean;
}

const initialState: initialAuthStateType = {
    isAuthenticated: false,
    rememberMe: false,
}

const authSlice = createSlice({ // RTK: inclu reducers/actions/initialstate
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state) {
            state.isAuthenticated = true; // pas besoin de déstructurer/switch_case/...
        },
        loginFailure(state) {
            state.isAuthenticated = false; // passe par immer en background
        },
        unsetIsAuth(state) { // action automatiquement généré par gtk
            state.isAuthenticated = false;
        },
        rememberMe(state, action: PayloadAction<boolean>) {
            state.rememberMe = action.payload;
        }
    },
});

export default authSlice.reducer;
export const { setIsAuth, loginFailure, unsetIsAuth, rememberMe } = authSlice.actions;

export const selectIsRememberMe = (state: RootState) => state.auth.rememberMe;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
