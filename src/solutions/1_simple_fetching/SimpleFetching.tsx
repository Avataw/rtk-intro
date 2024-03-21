import { useGetAllQuery } from "./simpleFetchingApi"

export default function SimpleFetching() {

    const { data } = useGetAllQuery()

    console.log("Data:", data)

    return (
        <>
            <h1>SimpleFetching</h1>

            {data?.map(object => (
                <div key={object.id} style={style}>
                    <h5>{object.id}: {object.name}</h5>
                    <pre>{JSON.stringify(object.data)}</pre>
                </div>
            ))}
        </>
    )
}

const style = { border: "1px solid white", margin: "1rem", padding: "0.5rem" }
