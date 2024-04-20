import { api } from "./API";
import { getToken } from '../features/auth/authUtils';

const userAPI = api.injectEndpoints({
    endpoints: (builder) => ({

        getUserProfile: builder.query({
            query: () => ({
                url: 'user/profile',
                method: 'POST',
                headers: { Authorization: `Bearer ${getToken()}` },
                providesTags: ['UserProfile'],
            }),
        }),

        setUserName: builder.mutation<any, string>({
            query: (userName) => ({
                url: 'user/profile',
                method: 'PUT',
                body: {userName},
                headers: { Authorization: `Bearer ${getToken()}` },
                invalidatesTags: ['UserProfile'],
            }),
        }),

    }),
    overrideExisting: false,
  })
  
    export const { useGetUserProfileQuery, useSetUserNameMutation } = userAPI
