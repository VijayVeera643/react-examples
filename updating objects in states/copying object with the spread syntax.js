import { useState } from "react";

export default function ObjectUpdate(){
    const[person, setPerson] = useState({
        firstname : "vijay",
        lastname : "veera",
        email: "vijayveera643@gmail.com"
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
    function handledEmail(event){
        setPerson({
            ...person,
            email : event.target.value
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
                    value={person.email} 
                    onChange={handledEmail}
                    />
            </label>
            <h1>{person.firstname + person.lastname } ({person.email})</h1>
        </>
    )
}