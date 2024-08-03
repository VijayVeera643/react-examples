import { useState } from "react"

export default function InsertingArray(){
    let nextId = 3;
    const initialdetails = [
        { id: 0, name: "vijay"},
        { id: 1, name: "arun"}
    ]
    const[student , setStudent] = useState("")
    const[players , setPlayer ] = useState(initialdetails)

    

    function handleInsertButtonClick(){
        const insertAt = 1;
        const nextPlayer = [
        ...players.slice(0,insertAt),
        {id: nextId++, name: student},
        ...players.slice(insertAt)
        ]
        setPlayer(nextPlayer);
        console.log("hi")
        setStudent(" ")
    }
    return (
        <div>
            <h1>inserting the array</h1>
            <section>
                <input 
                    value={student}
                    onChange={e => setStudent(e.target.value)}
                />
                <button onClick={handleInsertButtonClick}>insert</button></section>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    )
}