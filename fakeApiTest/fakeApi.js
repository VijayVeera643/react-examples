import { useEffect, useState } from "react"

export default function FakeApiExample(){
    const [users , setUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=> setUsers(data))
       
    },[])

    return(
        <div>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>website</th>
                </thead>
                <tbody>
                    {users.map((user)=> 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
} 