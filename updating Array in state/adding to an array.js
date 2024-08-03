import { useEffect, useState } from "react";

export default function AddingArray(){
    let number = 0
    const[twozoteam ,setTwozoteam] = useState("");
    const[players, setPlayer] = useState([])
     useEffect(()=>{
        console.log("the evented the" , twozoteam )
     },[players,twozoteam])
    
    return(
        <div>
            <h1>
                The twozo team
            </h1>
            <input
                value={twozoteam}
                onChange={e=> setTwozoteam(e.target.value)}
            />
            <section onClick={ () => {
                setPlayer ([
                    ...players,
                    { id: number++ , twozoteam: twozoteam}
                ])
                    
            }}>Add</section>
            <ul>
                {players.map(player => (
                   <li key={player.id}>{player.twozoteam}</li>  
                ))}
            </ul>
        </div>
    )
}