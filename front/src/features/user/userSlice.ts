
// gestion des états d'information de l'utilisateur avec Redux

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

export interface initialUserStateType {
    createdAt: string | null;
    email: string | null;
    firstName: string | null;
    id: string | null;
    lastName: string | null;
    updateAt: string | null;
    userName: string | null;
}

const initialState: initialUserStateType = {
    createdAt: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    updateAt: null,
    userName: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserInfo(state, action: PayloadAction<initialUserStateType>) {
            state.createdAt = action.payload.createdAt;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.id = action.payload.id;
            state.lastName = action.payload.lastName;
            state.updateAt = action.payload.updateAt;
            state.userName = action.payload.userName;
        },
        wipeUserInfo(state) {
            // state = initialState; // don't work
            return initialState; // on fait confiance à immer...
            // return { ...initialState}; // work
            // Object.assign(state, initialState); // work itoo
        },
    },
});

export default userSlice.reducer;
export const { updateUserInfo, wipeUserInfo } = userSlice.actions;

export const selectFirstName = (state: RootState) => state.user.firstName
export const selectUserInfo = (state: RootState) => state.user
