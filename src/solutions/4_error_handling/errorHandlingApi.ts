import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ResponseObject {
    id: string,
    name: string,
    data?: Record<string, string>
}

export const errorHandlingApi = createApi({
    reducerPath: 'error_handling_api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev/' }),
    endpoints: (builder) => ({
        getOne: builder.query<ResponseObject, string>({
            query: (id: string) => `objects/${id}`,
        }),
    }),
})

export const { useGetOneQuery } = errorHandlingApi