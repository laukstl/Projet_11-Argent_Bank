import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import userSlice from '../features/user/userSlice';
import uiSlice from '../features/ui/uiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

import { api } from '../api/API';
// import AuthMiddleware from '../features/auth/AuthMiddleware';


const store = configureStore({ // RTK: set les reducers et le middleware du store
    reducer: {
        ui: uiSlice,
        auth: authSlice,
        user: userSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware), // RTK(). auquel on ajoute RTKQ ( req async )
});

setupListeners(store.dispatch); // RTKQ => actions: pending/fufilled/rejected/...

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
