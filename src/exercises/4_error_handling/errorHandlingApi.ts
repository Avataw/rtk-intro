import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

/**
 * TODO: This is exactly the same request as at 3_fetching_query!
 * Try implementing it without looking at the previous one :)
 */
export const errorHandlingApi = createApi({
    reducerPath: 'error_handling_api',
    baseQuery: {} as any,
    endpoints: (builder) => ({
        // add your request in here
    }),
})