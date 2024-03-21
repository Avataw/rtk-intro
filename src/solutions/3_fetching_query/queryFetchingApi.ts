import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

export const queryFetchingApi = createApi({
    reducerPath: 'query_fetching_api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev/' }),
    endpoints: (builder) => ({
        getOne: builder.query<ResponseObject, string>({
            query: (id: string) => `objects/${id}`,
        }),
    }),
})

export const { useGetOneQuery } = queryFetchingApi