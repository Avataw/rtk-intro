import { useState } from "react"
import { useGetOneQuery } from "./queryFetchingApi"
import DisplayObject from "../../components/DisplayObject"

export default function QueryFetching() {

    const [searchId, setSearchId] = useState("")

    const { data } = useGetOneQuery(searchId)

    return (
        <>
            <h1>QueryFetching</h1>

            <input onChange={(e) => setSearchId(e.target.value)} value={searchId} />

            {data && <DisplayObject object={data} />}
        </>
    )
}
