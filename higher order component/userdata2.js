import { useEffect , useState} from "react"

export default function UserdataExample(){
    const [data , setData] = useState([]);
    console.log(data)
    useEffect(()=>{
        const apiurl = 'https://dummyjson.com/todos'
        fetch(apiurl)
        .then(Response => Response.json())
        .then(data => setData(data.todos));
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