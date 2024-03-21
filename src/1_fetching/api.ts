import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ResponseObject {
    id: string,
    name: string,
    data?: Record<string, string>
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev/' }),
    endpoints: (builder) => ({
        getAll: builder.query<ResponseObject[], void>({
            query: () => `objects`,
        }),
    }),
})

export const { useGetAllQuery } = api