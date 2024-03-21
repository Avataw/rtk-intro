import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

export const selectingApi = createApi({
    reducerPath: 'selecting_api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev/' }),
    endpoints: (builder) => ({
        getAll: builder.query<ResponseObject[], void>({
            query: () => `objects`,
        }),
    }),
})

export const { useGetAllQuery } = selectingApi