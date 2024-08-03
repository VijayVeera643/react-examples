import { useEffect , useState} from "react"

export default function Userdata(){
    const [data , setData] = useState([]);
    console.log(data)
    useEffect(()=>{
        const apiurl = 'https://dummyjson.com/users'
        fetch(apiurl)
        .then(Response => Response.json())
        .then(data => setData(data.users));
    },[])

    return(
        <div>
        {
            data.map((item,index) => {
                return  <div key={index}>{item.firstName}</div>
            })
        }
        </div>
    )
}