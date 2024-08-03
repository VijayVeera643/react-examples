import { useState } from "react";

export function OverTime(){
    const[name , setName] = useState("vijay")
    const[message, setMessage] = useState("hello")

    function handlingSubmit(e){
        e.preventDefault()
    }
    return(
        <form onClick={handlingSubmit} >
            <label>
                selectName: 
                <select name={name} onChange={(event)=>setName(event.target.name)}>
                    <option>vijay</option>
                    <option>sathish</option>
                    <option>durai</option>
                </select>
            </label><br></br>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}>{message}
            </textarea><br></br>
            <button type="submit" onClick={()=>{
                setTimeout(()=>{
                    alert(`${name} is the best player ${message}`)
            },2000)
            }}>send</button>
        </form>
    )
}




export  function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    console.log(walk)
  }

  return (
    <>
      <button onClick={handleClick}>
        Change to {walk ? 'Stop' : 'Walk'}
      </button>
      <h1 style={{
        color: walk ? 'darkgreen' : 'darkred'
      }}>
        {walk ? 'Walk' : 'Stop'}
      </h1>
    </>
  );
}
