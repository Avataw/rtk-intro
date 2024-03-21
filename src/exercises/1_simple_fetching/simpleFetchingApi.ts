import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponseObject } from '../../types'

/**
 * TODO: Make a request to 'https://api.restful-api.dev/objects' 
 * The return type is already imported (ResponseObject) 
 */
export const simpleFetchingApi = createApi({
    reducerPath: 'simple_fetching_api',
    baseQuery: {} as any, // this can't be right!
    endpoints: (builder) => ({
        // add your request in here
    }),
})

// Don't forget exporting your hook!
// export const { ... } = simpleFetchingApi