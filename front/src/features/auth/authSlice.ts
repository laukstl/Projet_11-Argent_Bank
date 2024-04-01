
// gestion des états d'authentification avec Redux

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface initialStateType {
    isAuthenticated: boolean;
    email: string | null;
    userName: string | null;
    userToken: string | null;
}

const initialState: initialStateType = {
    isAuthenticated: false,
    email: null,
    userName: null,
    userToken: null,
}

// export const initialState = {
//     isAuthenticated: false,
//     email: null,
//     userName: null,
//     userToken: null,
// } as {
//     isAuthenticated: boolean;
//     email: string | null;
//     userName: string | null;
//     userToken: string | null;
// };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<string>) {
            state.isAuthenticated = true;
            state.userToken = action.payload;
            state.userName = action.payload;        },
        loginFailure(state) {
            state.isAuthenticated = false;
            state.userToken = null;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.userToken = null;
        },
    },
});

export default authSlice.reducer;
export const { loginSuccess, loginFailure, logout } = authSlice.actions;

// // export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;
// // export const selectToken = (state: RootState) => state.auth.userToken;
