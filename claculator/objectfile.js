import { useState } from "react"

export  function Naming(){
    const[ name , setName] = useState({
        firstname: "vijay",
        lastname: "veera",
        details : {
            emailId: "vijay@gmail.com",
            number: 933555388
        }
    })
    console.log(name)
    const newName = "arun"
    function handleButtonclicked(){
      
      setName({
        ...name,
        firstname : newName,
        details: {
            ...name.details,
            number : 798983723982
        }
      }
      )

      
    }
    return(
        <div>
          <button style={{ width : "100px"}} onClick={handleButtonclicked}>submit</button>
        </div>
    )
     
}
<hr></hr>
export function AddArray(){
    let idvalue = 0;
    const [name , setName] = useState(" ")
    const [arrayvalue , setArrayValue ] = useState([])

    function handleButtonClick(){
        setArrayValue([
            ...arrayvalue,
            {id : idvalue++ , name : name}
        ])
    }
    return(
        <div>
            <input 
                value={name}
                onChange={e =>setName(e.target.value)}
            />
            <button
                onClick={handleButtonClick} 
                style={{width: "100px",}}>Add</button>
            <ul>
                {arrayvalue.map(value =>
                    <li key={value.id}>{value.name}</li>
                )}
            </ul>
        </div>
    )
}
export function RemoveArray(){
   const initialvalue = [
    {id: 1 ,name: "durai" , age: 19},
    { id: 2 ,name: "arun" , age: 29},
    {id: 3 ,name: "vijay" , age: 19},
]
    const [value ,setValue] = useState(initialvalue)

    return(
        <div>
            <ul>
                {value.map(val =>
                    <li key={val.id}>
                        name:{val.name}{''}age:{val.age}
                        <button style={{width: "150px"}} onClick={()=>{
                            setValue(value.filter(v=>v.id !== val.id))
                        }}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )
}
export function ReplaceArray(){
    const initialvalue =[0,0,0]
    const[counter , setCounter] = useState(initialvalue)
    function handleButtonClick(index){
        const nextcounter = counter.map((c,i) => {
            if( i === index){
                return c + 1
            }else{
                return c
            }
        })
        setCounter(nextcounter)
    }
    return(
        <div>
            <ul>
                {counter.map((coun, i) => 
                    <li key={i}>{coun}
                    <button style={{width: "100px"}} onClick={()=>{handleButtonClick(i)}}>Add +1</button></li>
                )}
            </ul>
        </div>
    )
}