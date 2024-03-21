import { useState } from "react";
import { useCreateMutation } from "./postMutationApi";

export default function PostMutation() {

    const [create, { data }] = useCreateMutation();

    const [name, setName] = useState("")

    return (
        <>
            <h1>Post Mutation</h1>

            {data && JSON.stringify(data)}

            <input onChange={(e) => setName(e.target.value)} value={name} />

            <button disabled={!name} onClick={() => create({ name })}>
                Create new Object
            </button>
        </>
    )
}
