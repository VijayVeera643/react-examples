

export default function Naming({onAdding, children}){
    return(
        <button onClick={onAdding}>
            {children}
        </button>
    )
}