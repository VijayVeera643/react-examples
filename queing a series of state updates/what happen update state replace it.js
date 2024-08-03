import { useState } from "react";

export default function UpdateReplace(){
    const[number , setNumber] = useState(0);

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(number => number + 1);
                setNumber( n => n + 1  ); 
            }}>send</button>
        </div>
    )
}