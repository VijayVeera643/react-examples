import { useState } from "react";

export default function ReplaceUpdate(){
    const[number , setNumber] = useState(0);
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{
                setNumber(number + 1);
                 
                setNumber(42)
                setNumber( n => n + 1  );
            }}>buy</button>
        </div>
    )
}