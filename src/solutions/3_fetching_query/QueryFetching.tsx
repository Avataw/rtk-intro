import { useState } from "react"
import { useGetOneQuery } from "./queryFetchingApi"

export default function QueryFetching() {

    const [searchId, setSearchId] = useState("")

    const { data } = useGetOneQuery(searchId)

    return (
        <>
            <h1>QueryFetching</h1>

            <input onChange={(e) => setSearchId(e.target.value)} value={searchId} />

            {data && (
                <>
                    <h5>{data.id}: {data.name}</h5>
                    <pre>{JSON.stringify(data.data)}</pre>
                </>
            )}
        </>
    )
}
