import {useState} from "react";

export default function Form(){
  
  const[firstName , setFirstname] = useState("");
  const[lastName , setLastname] = useState("");
  const[number , setNumber] = useState(null)

  function HandleClickFirstname(e){
    setFirstname(e.target.value)
  }
  function HandleClickLastname(e){
    setLastname(e.target.value)
  }

  function HandleClickNumber(e){
    setNumber(e.target.value)
  }
  function SubmitAction(){
    setFirstname(console.log(`firstName: ${firstName}`))
    setLastname(console.log(`lastName: ${lastName}`))
    setNumber(console.log(`Phone No: ${number}`))

  }
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height :"500px",
    }}>
    <form onSubmit={e => e.preventDefault()} 
      style={{
        border: "2px solid black",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        padding: "30px",
        borderRadius: "10px",
        fontSize: "20px" 
      }}>
        <h3 style={{color:"orange"}}>Form:</h3>
        <div>
        <label style={{
              color: "Darkgreen"
        }}>
          First-name: </label>

          <input 
          type="text" 
          placeholder="firstName" 
          onChange={HandleClickFirstname} 
            style={{
              padding: "5px",
              backgroundColor: "pink",
              border: "none"
      }}/>
      </div>

      <div>
      <label style={{
        color: "Darkgreen"
      }}>Last-name: </label>

      <input 
        type="text" 
        placeholder="lastName" 
        onChange={HandleClickLastname} 
        style={{
          padding: "5px",
          backgroundColor: "pink",
          marginTop: "10px",
          border: "none"
        }}/>
      </div>

      <div>
      <label style={{
        color: "Darkgreen"
      }}>Phone-no: </label>
      <input type="number" placeholder="phone-no" onChange={HandleClickNumber} style={{
        padding: "5px",
        backgroundColor: "pink",
        border: "none",
        marginTop: "10px"
      }}/>
      </div>

      <button type="submit" onClick={SubmitAction} style={{
        color: "red",
        marginTop: "20px",
        fontSize: "16px",
        display: "inline-block"
      }}>submit</button>
    </form>
    </div>
  )
} 
