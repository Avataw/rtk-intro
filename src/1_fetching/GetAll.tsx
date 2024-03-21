import { useGetAllQuery } from "./api"

export default function GetAll() {

    const { data } = useGetAllQuery()

    console.log(data);

    return (
        <>
            <h1>List:</h1>
            {data?.map((d) => (
                <div key={d.id}>
                    <h4>{d.id} - {d.name}</h4>
                    <pre>{JSON.stringify(d.data)}</pre>
                </div>
            ))}
        </>
    )
}
