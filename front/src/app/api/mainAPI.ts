// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// init une api vide qui sera garnis en lui injectant des Endpoints ( avec mainAPI.injectEndpoints )
export const mainApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/' }),
  endpoints: () => ({}),
})
