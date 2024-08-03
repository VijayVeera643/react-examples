import { useState } from "react";

export function MultipleState(){
    const [number , setNumber] = useState(0)
   
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(n=> n+1)
                setNumber(n=> n+1)
                setNumber(n=> n+1)
            }}>increment</button>
        </div>
    )
}