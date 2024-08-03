import { useState, useEffect } from "react";
 
export function HookCounterOne() {
    const [count, setCount] = useState(0);
 
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
 
    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}
 
export function FormValidate(){
    const[numbers , setNumber] = useState("")
    const[isDisabled, setIsDisabled] = useState(true)
    useEffect(()=>{
        if( numbers === ""){
            setIsDisabled(true)
        }else{
            setIsDisabled(false)
        }
    },[numbers])
    return (
        <>
        <input value={numbers} onChange={event => setNumber(event.target.value)}/>
        <button disabled={isDisabled} style={{
            color: isDisabled ? "white" : "red",
            width : 100,
            backgroundColor: isDisabled ? "white" : "gray",
        }}>enter</button>
        </>
    )
}
