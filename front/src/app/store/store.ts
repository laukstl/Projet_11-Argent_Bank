import { configureStore, combineReducers } from '@reduxjs/toolkit';
import reducer from './reducer';
import authReducer from '../../features/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authApi from '../../features/auth/authAPI';
import userApi from '../../features/user/userAPI';


const rootReducer = combineReducers({
    main: reducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

setupListeners(store.dispatch);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;