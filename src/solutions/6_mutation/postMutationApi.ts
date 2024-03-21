import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface ResponseObject {
    id: string,
    name: string,
    data?: Record<string, string>
}

type CreationRequest = Omit<ResponseObject, 'id'>

interface CreationResponse extends ResponseObject {
    createdAt: string
}

export const postMutationApi = createApi({
    reducerPath: 'post_mutation_api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.restful-api.dev/' }),
    endpoints: (builder) => ({
        create: builder.mutation<CreationResponse, CreationRequest>({
            query: (object) => ({
                url: `objects`,
                method: 'POST',
                body: object
            })
        }),
    })
});

export const { useCreateMutation } = postMutationApi