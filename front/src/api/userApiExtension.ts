import { api } from "./API";
import { getToken } from '../features/auth/authUtils';
import type { FetchArgs } from '@reduxjs/toolkit/query/react';

const userAPI = api.injectEndpoints({
    endpoints: (builder) => ({

        getUserProfile: builder.query({
            query: () => ({ // async ?
                url: 'user/profile',
                method: 'POST',
                headers: { Authorization: `Bearer ${getToken()}` },
            } as FetchArgs),
        }),

        setUserName: builder.mutation({
            query: () => ({ // async ?
                url: 'user/profile',
                method: 'PUT',
                headers: { Authorization: `Bearer ${getToken()}` },
            } as FetchArgs),
        }),

    }),
    overrideExisting: false,
  })
  
    export const { useGetUserProfileQuery, useSetUserNameMutation } = userAPI
