import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

/**
 * TODO: Make a request identical to 1_simple_fetching.
 * Now this should be a piece of cake for you!
 */
export const selectingApi = createApi({
    reducerPath: 'selecting_api',
    baseQuery: {} as any,
    endpoints: (builder) => ({
        // add your request in here
    }),
})
