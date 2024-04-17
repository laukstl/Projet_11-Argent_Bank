
// gestion de l'interface graphique

// import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';
import { createSlice } from '@reduxjs/toolkit';

export interface initialUIStateType {
    isEditingUserInfo: boolean;
}

const initialState: initialUIStateType = {
    isEditingUserInfo: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setIsEditing(state) {
            state.isEditingUserInfo = !state.isEditingUserInfo;
        },
    },
});

export default uiSlice.reducer;
export const { setIsEditing } = uiSlice.actions;

export const selectIsEditing = (state: RootState) => state.ui.isEditingUserInfo;
