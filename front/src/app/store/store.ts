import { configureStore } from '@reduxjs/toolkit';
// import reducer from './reducer';
import authSlice from '../../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authApi from '../../features/auth/authAPI';
// import userApi from '../../features/user/userAPI';

// const rootReducer = combineReducers({
//     main: reducer,
//     auth: authReducer,
//     [authApi.reducerPath]: authApi.reducer,
//     [userApi.reducerPath]: userApi.reducer,
// });

const store = configureStore({
    reducer: {
//     main: reducer,
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
        // getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;