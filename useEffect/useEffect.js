import { useState, useEffect } from "react";

export default function Timer() {
    const[name , setName] = useState("")
    const[isDisabled , setIsDisabled] = useState(true)
    console.log({name,isDisabled})
    useEffect(()=>{
        if(name === " "){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    },[name])
  return (
    <>
        <input 
            value={name}
            onChange={event => setName(event.target.value)}
        />
        <button disabled={isDisabled}>save</button>
    </>
     
  )
}