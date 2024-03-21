import { ResponseObject } from "../types"

const style = { border: "1px solid white", margin: "1rem", padding: "0.5rem" }

interface DislpayObjectProps {
    object: ResponseObject
}

export default function DisplayObject({ object }: DislpayObjectProps) {

    return (
        <div style={style}>
            <h5>{object.id}: {object.name}</h5>
            <pre>{JSON.stringify(object.data)}</pre>
        </div>
    )
}
