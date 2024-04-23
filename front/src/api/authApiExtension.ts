
import { api } from "./API";

const loginEndpoint = api.injectEndpoints({
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
    overrideExisting: false,
})

export const { useLoginMutation } = loginEndpoint
