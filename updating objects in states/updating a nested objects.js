import { useState } from "react";

export default function UpdateNestedObject(){
    const[person, setPerson] = useState({
        firstname : "vijay",
        lastname : "veera",
        details:{
             email: "vijayveera643@gmail.com",
             age: 19,
             nick: "vj(msd)"
        }
       
    })
    function handledFirstname(event){
        setPerson({
            ...person,
            firstname: event.target.value
        })
    }
    function handledlastname(event){
        setPerson({
            ...person,
            lastname: event.target.value
        })
    }
    function handledNick(event){
        setPerson({
            ...person,
            details: {
            ...person.details,
            nick : event.target.value
            }
        })
    }

    function handledAge(event){
        setPerson({
            ...person,
            details: {
            ...person.details,
            age : event.target.value
            }
        })
    }

    function handledEmail(event){
        setPerson({
            ...person,
            details: {
            ...person.details,
            email : event.target.value
            }
        })
    }

    return (
        <>
            <label>
                Firstname: 
                <input  
                    value={person.firstname} 
                    onChange={handledFirstname} 
                />
            </label>
            <br></br>
            <label>
                Lastname: 
                <input  
                    value={person.lastname}
                    onChange={handledlastname}
                    />
            </label>
            <br></br>
            <label>
                email:
                <input
                    value={person.details.email} 
                    onChange={handledEmail}
                    />
            </label>
            <br></br>
            <label>
                email:
                <input
                    value={person.details.age} 
                    onChange={handledAge}
                    />
            </label>
            <br></br>
            <label>
                email:
                <input
                    value={person.details.nick} 
                    onChange={handledNick}
                    />
            </label>
          
        </>
    )
}