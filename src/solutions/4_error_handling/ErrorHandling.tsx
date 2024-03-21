import { useState } from "react"
import { useGetOneQuery } from "./errorHandlingApi"

export default function ErrorHandling() {
    const [searchId, setSearchId] = useState("")

    const { data, isError, error } = useGetOneQuery(searchId)

    return (
        <>
            <h1>Error Handling</h1>

            <input onChange={(e) => setSearchId(e.target.value)} value={searchId} />

            {isError && <h3>An error occured! {JSON.stringify(error)}</h3>}

            {data && !isError && (
                <>
                    <h5>{data.id}: {data.name}</h5>
                    <pre>{JSON.stringify(data.data)}</pre>
                </>
            )}
        </>
    )
}
