export default function StopPropogation({children}){
    return  (
        <button onClick={e=>{
            e.stopPropagation();
           
        }}>{children}</button>
    )
}