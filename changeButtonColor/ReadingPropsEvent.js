export default function ReadingProps({message,children}){
   return( <button onClick={() => alert(message)}>{children}</button>
)
} 