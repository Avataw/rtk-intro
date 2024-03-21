import { useGetAllQuery } from "./selectingApi"

export default function Selecting() {

    const { names } = useGetAllQuery(undefined, {
        selectFromResult: ({ data }) => ({ names: data?.map((d, index) => `${index}: ${d.name}`) })
    })

    return (
        <>
            <h1>Selecting</h1>

            <ul>
                {names?.map(name => <li key={name}>{name}</li>)}
            </ul>
        </>
    )
}
