import "../todoLists/index.css";
import DeleteIcon from '../../assets/icons/minus-circle.svg';
import EditIcon from '../../assets/icons/editicon2.png';
import UpdateIcon from "../../assets/icons/updateIcon.png";
import { useEffect, useState } from "react";

export default function TodoListApp() {
    const [inputdata, setInputData] = useState('');
    const [listitem , setListItem] = useState([]);
    const [clickindex, setclickIndex] = useState(null);
    const [updatevalue, setUpdateValue] = useState("");

    useEffect(()=>{
        fetch(`https://dummyjson.com/todos`)
        .then((response)=> response.json())
        .then(list => setListItem(list.todos))
    },[])

    const addListItems = () => {  
        if(inputdata.trim() !== ""){
            setListItem([
                ...listitem,
                { id: listitem.length + 1 , inputdata}
            ])
            setInputData('')
        }
    }
     
    const deleteListitem = (listIndex) => {
        setListItem(listitem => {
            return listitem.filter((list, index) => index !== listIndex );            
        }) 
    }
    
    const editListItem = (index, value , addvalue) => {
        setUpdateValue(value ? value : addvalue) 
        setclickIndex(index)
    }

    const updateListItem = (listIndex) => {
        const updateValue = [...listitem].map((list,index) => {
            if(index === listIndex){
               list.inputdata = updatevalue 
               list.todo = updatevalue
            }
            return list
        })  
        setListItem(updateValue)
        setclickIndex(null)
    }
    
    return (
        <div className="todoApp-container" >    
            <div className="addListItemInputField">
           
                <h3>add new task</h3>
                <input 
                        value={inputdata} 
                        onChange={event => setInputData(event.target.value)} 
                        className="inputField"
                />
                <select>
                    <option>TODO</option>
                    <option>IN PROGRESS</option>
                    <option>CLOSED</option>
                </select>
                <button className="createButton" 
                        onClick={addListItems}
                >
                    Create
                </button>
            
                {/* <input 
                    value={inputdata} 
                    onChange={event => setInputData(event.target.value)} 
                    className="inputField"
                />
                <button 
                    className="createButton" 
                    onClick={addListItems}
                >
                    Create
                </button> */}
            </div>
        
            <div className="todolist-headings-container">
                <div className="todo-container">
                    <p className="todo-heading">
                        TODO
                    </p>
                    <div>
                        <ul className="todo-listitems">
                            {listitem.map((list,index) => (
                                <li className="list-item" 
                                    key={list.id}
                                > 
                                {clickindex === index ? 
                                    
                                    <p className="list-content">
                                        <input  className="update-inputField"
                                                value={updatevalue} 
                                                onChange={(event)=> setUpdateValue(event.target.value)}
                                                style={{
                                                height: "25px",
                                                width: "150px"
                                                }}
                                        />
                                    </p> : 
                                  
                                    <p className="list-content">
                                        {list.inputdata ? list.inputdata : list.todo}
                                    </p> 
                                }
                                {clickindex === index ?
                                        
                                    <div className="Update-icon">
                                        <img 
                                            src={UpdateIcon}
                                            alt="UpdateIcon"
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={() => updateListItem(index)}
                                        />
                                    </div> :
                                    <div className="Edit-icon">
                                        <img 
                                            src={EditIcon}
                                            alt="EditIcon"
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={()=> editListItem(index , list.todo , list.inputdata)}
                                            disabled
                                        />
                                    </div>
                                }
                                    <div className="delete-icon">
                                        <img 
                                            src= {DeleteIcon}
                                            alt="removeIcon" 
                                            width={"20px"}
                                            height={"20px"}
                                            onClick={()=>{
                                                deleteListitem(index)
                                            }}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="progress-container">
                    <p className="in-progress-heading">
                        IN PROGRESS
                    </p>
                    <div>
                        <ul className="progress-listItems">
                            <li className="list-item">
                                Create a vedio
                                <img className="delete-Icon" 
                                    src= {DeleteIcon} 
                                    alt="removeIcon" 
                                    width={"20px"}
                                    height={"20px"}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="closed-container">
                    <p className="closed-heading">
                        CLOSED
                    </p>
                    <div>
                        <ul className="closed-listItems">
                            <li className="list-item">
                                Learn React 
                                <img className="delete-Icon " 
                                src= {DeleteIcon} 
                                alt="removeIcon" 
                                width={"20px"}
                                height={"20px"}
                                />
                            </li>
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    )
}
