import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

/**
 * TODO: This time you need to add a request to retrieve only one object.
 * The endpoint is: `https://api.restful-api.dev/objects/${id}` 
 */
export const queryFetchingApi = createApi({
    reducerPath: 'query_fetching_api',
    baseQuery: {} as any,
    endpoints: (builder) => ({
        // add your request in here
    }),
})
