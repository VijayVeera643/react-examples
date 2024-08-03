import React from "react";
import {heading} from "./content";
import Create from "./taxt";

export default function FrameWork({text}){
    const [index, setIndex] = React.useState(0)
    const indexValue = heading[index]
    const next = () => setIndex((index + 1) % heading.length)
    return (
        <div>
        <Create text={indexValue} />
        <button onClick = {next}>click next</button>
        </div>
    )
}