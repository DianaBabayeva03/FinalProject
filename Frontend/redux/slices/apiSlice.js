import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:7000',
    credentials: 'include',
  });
export const apiSlice = createApi({
    baseQuery,
    tagTypes:['user'],
    endpoints:(builder) => ({})
})