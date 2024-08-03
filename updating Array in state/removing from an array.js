import { useState } from "react";

export default function RemovingArray(){
    let initialdetails = [
        {id: 1, name: "vijay"},
        {id: 2, name:"vairam"},
        {id: 3, name: "anpu"}
    ]
    const[details , setDetails] = useState(initialdetails);
    return (
        <div>
            <h1>The removing array</h1>
            <ul>
                {details.map( detail => (
                        <li key={detail.id} style={{
                            margin: "5px"
                        }}>
                            {detail.name} {' '}
                        <span style = {{
                            border: "1px solid black",
                            backgroundColor: "gray"
                        }} onClick={ () => {
                                setDetails(
                                    details.filter(checkedid =>(
                                        checkedid.id !== detail.id 
                                    ))
                                )
                        }}>delete</span></li>
                    )   
                )}
            </ul>
        </div>
    )
}