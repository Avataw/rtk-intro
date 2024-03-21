import { createApi } from '@reduxjs/toolkit/query/react'

/** 
 * TODO: Implement exactly the same api as in simpleFetching.
 * Try doing it without peeking!
 */
export const loadingStatesApi = createApi({
    reducerPath: 'loading_states_api', //don't change this though :D reducerPaths need to be unique in your project!
    baseQuery: {} as any,
    endpoints: (builder) => ({
        // add your request in here
    }),
})
