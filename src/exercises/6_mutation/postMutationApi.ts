import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CreationRequest, CreationResponse } from '../../types';

/**
 * TODO: This time we need a POST request to `https://api.restful-api.dev/objects`.
 * The request and response type are already imported.
 */
export const postMutationApi = createApi({
    reducerPath: 'post_mutation_api',
    baseQuery: {} as any,
    endpoints: (builder) => ({
        // add your request in here
    })
});
