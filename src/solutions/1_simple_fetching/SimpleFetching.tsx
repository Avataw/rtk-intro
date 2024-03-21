import DisplayObject from "../../components/DisplayObject"
import { useGetAllQuery } from "./simpleFetchingApi"

export default function SimpleFetching() {

    const { data } = useGetAllQuery()

    console.log("Data:", data)

    return (
        <>
            <h1>SimpleFetching</h1>

            {data?.map(object => (
                <DisplayObject key={object.id} object={object} />
            ))}
        </>
    )
}
