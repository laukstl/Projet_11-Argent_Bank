
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
    userName: string | undefined;
}

const initialState: initialUserStateType = {
    createdAt: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    updateAt: null,
    userName: undefined,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserInfo(state, action: PayloadAction<initialUserStateType>) {
            return action.payload;
        },
        wipeUserInfo(state) {
            // state = initialState; // don't work
            return initialState; // on fait confiance à immer...
            // return { ...initialState}; // work
            // Object.assign(state, initialState); // work itoo
        },
        updateUserName(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        }
    },
});

export default userSlice.reducer;
export const { updateUserInfo, wipeUserInfo, updateUserName } = userSlice.actions;

export const selectFirstName = (state: RootState) => state.user.firstName
export const selectLastName = (state: RootState) => state.user.lastName
export const selectUserName = (state: RootState) => state.user.userName
export const selectUserInfo = (state: RootState) => state.user
