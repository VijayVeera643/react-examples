import { useState } from "react"

export default function  Increment (){
    const [number, setNumber] = useState(0)
    return(
        <div>
        <h1>{number}</h1>
        <button onClick={() => {
            setNumber(number + 3);
        }}>+3</button>
        </div>
    )
}
