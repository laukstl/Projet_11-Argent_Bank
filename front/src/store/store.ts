import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/user/userSlice';
import uiSlice from '../features/ui/uiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '../api/API';

const store = configureStore({
    reducer: {
        ui: uiSlice,
        auth: authSlice,
        user: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
