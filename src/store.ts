import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { simpleFetchingApi } from './solutions/1_simple_fetching/simpleFetchingApi'
import { loadingStatesApi } from './solutions/2_loading_states/loadingStatesApi'
import { queryFetchingApi } from './solutions/3_fetching_query/queryFetchingApi'
import { errorHandlingApi } from './solutions/4_error_handling/errorHandlingApi'
import { selectingApi } from './solutions/5_selecting/selectingApi'
import { postMutationApi } from './solutions/6_mutation/postMutationApi'

export const store = configureStore({
    reducer: {
        [simpleFetchingApi.reducerPath]: simpleFetchingApi.reducer,
        [loadingStatesApi.reducerPath]: loadingStatesApi.reducer,
        [queryFetchingApi.reducerPath]: queryFetchingApi.reducer,
        [errorHandlingApi.reducerPath]: errorHandlingApi.reducer,
        [selectingApi.reducerPath]: selectingApi.reducer,
        [postMutationApi.reducerPath]: postMutationApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        [
            simpleFetchingApi.middleware,
            loadingStatesApi.middleware,
            queryFetchingApi.middleware,
            errorHandlingApi.middleware,
            selectingApi.middleware,
            postMutationApi.middleware,
        ]
    ),
})

setupListeners(store.dispatch)