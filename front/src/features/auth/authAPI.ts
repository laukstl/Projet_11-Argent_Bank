// // appels réseau pour l'authentification

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/' }),
    endpoints: (builder) => ({
        login: builder.mutation<string, { email: string; password: string }>({
            query: ({ email, password }) => ({
                url: 'user/login',
                method: 'POST',
                body: { email, password },
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;

export default authApi;
