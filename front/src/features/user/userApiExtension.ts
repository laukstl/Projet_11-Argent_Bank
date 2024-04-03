import { api } from "../../api/API";
import { getTokenFromLocalStorage } from '../auth/authUtils';
import type { FetchArgs } from '@reduxjs/toolkit/query/react';

const userAPI = api.injectEndpoints({
    endpoints: (builder) => ({

        getUserProfile: builder.query({
            query: () => ({
                url: 'user/profile',
                method: 'POST',
                headers: { Authorization: `Bearer ${getTokenFromLocalStorage()}` },
            } as FetchArgs),
        }),

    }),
    overrideExisting: false,
  })
  
    export const { useGetUserProfileQuery } = userAPI
