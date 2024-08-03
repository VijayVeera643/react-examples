import { useState } from "react"

export default function ReplacingArray(){
    const initialnumber = [
        0,0,0
    ]
    const [numbers , setNumber] = useState(initialnumber)

    function handleNumberButton(index){
        const countNumbers = numbers.map((number , i ) => {
            if( i === index){
                return number + 1
            }else{
                return number
            }
        })
        setNumber(countNumbers)
    }
    return (
        <div>
            <h1>The replacing the item in array</h1>
            <ul>
                {numbers.map((number, i) => (
                    <li key={i} style={{margin: "10px"}}>{number} {" "}
                    <span style={{backgroundColor : 'yellow', border: "1ox solid orange"}}onClick={ () => {handleNumberButton(i)}}>+1</span></li>
                    )
                )}
            </ul>
        </div>
    )

}