// appels réseau pour les éléments du user

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenFromLocalStorage } from '../auth/authUtils';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/' }),
    endpoints: (builder) => ({

        getUserProfile: builder.query({
            query: () => ({
                url: 'user/profile',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                },
            }),
        }),

    }),
});

export default userApi;
