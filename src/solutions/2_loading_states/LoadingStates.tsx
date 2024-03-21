import { useGetAllQuery } from "./loadingStatesApi"

export default function LoadingStates() {

    const { isLoading, isFetching, refetch } = useGetAllQuery();

    return (
        <>
            <h1>LoadingStates</h1>
            <button onClick={() => refetch()}>Refetch</button>
            <h2>Is Loading: {`${isLoading}`}</h2>
            <h2>Is Fetching: {`${isFetching}`}</h2>
        </>
    )
}
