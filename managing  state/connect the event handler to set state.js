import { useState } from "react";
export default function Form(){
    const[answer , setAnswer] = useState("");
    const[error, setError] = useState(null);
    const[status , setStatus] = useState("typing");
    const[loading,setLoading] = useState("Loading")
if(status === "success"){
    return <h1>That's Right</h1>
}
async function handleFormSubmit(e){
    e.preventDefault()
    setStatus('submitting')
    try{
        await submitForm(answer)
        setStatus("success")
    }catch(err){
        setStatus("typing")
        setLoading("loading")
        setError(err)
    }
}

function handletextarea(e){
    setAnswer(e.target.value)
}

function submitForm(answer){
    return new Promise (( resolve , reject) => { 
        setTimeout( () => {
            let correctAnswer = answer !== "vijay";
            if(correctAnswer){
               reject(new Error("That answer is wrong! pls try again"))
            }else{
                resolve()
            }
        },2000)
    })

}

return (
    <form onSubmit = {handleFormSubmit}>
        <p>THE CHECK ANSWER</p>
        <textarea 
            value = {answer}
            onChange={handletextarea}
            disabled = {status === "submitting"}
        ></textarea>
        <button disabled ={
            answer.length === " " || status === " submitting"
        }>
            submit
        </button>
        {error !== null && <p>{error.message}</p>}
    </form>
)
}