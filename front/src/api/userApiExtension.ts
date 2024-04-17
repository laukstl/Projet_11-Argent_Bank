import { api } from "./API";
import { getToken } from '../features/auth/authUtils';
// import type { FetchArgs } from '@reduxjs/toolkit/query/react';

// interface apiTypes {
//     userName: string;
// } 

const userAPI = api.injectEndpoints({
    // tagTypes: ['UserProfile'],
    endpoints: (builder) => ({

        // getUserProfile: builder.query({
        //     query: () => ({
        //         url: 'user/profile',
        //         method: 'POST',
        //         headers: { Authorization: `Bearer ${getToken()}` },
        //     // } as FetchArgs),
        //     } as FetchArgs),
        // }),

        // setUserName: builder.mutation<any, string>({
        //     query: (userName) => ({
        //         url: 'user/profile',
        //         method: 'PUT',
        //         body: {userName},
        //         headers: { Authorization: `Bearer ${getToken()}` },
        //         // invalidateTags: ['UserProfile'],
        //     } as FetchArgs),
        // }),

        getUserProfile: builder.query({
            query: () => ({
                url: 'user/profile',
                method: 'POST',
                headers: { Authorization: `Bearer ${getToken()}` },
                provideTags: ['UserProfile'],
            }),
        }),

        setUserName: builder.mutation<any, string>({
            query: (userName) => ({
                url: 'user/profile',
                method: 'PUT',
                body: {userName},
                headers: { Authorization: `Bearer ${getToken()}` },
                invalidateTags: ['UserProfile'],
            }),
        }),

    }),
    overrideExisting: false,
  })
  
    export const { useGetUserProfileQuery, useSetUserNameMutation } = userAPI
