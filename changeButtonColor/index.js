const theme = {
    backgroundColor : "pink",
    color : "green",
    display : "inline-block"
} 


export function Myname(){
   return theme.color
}

export function MyButton() {
    return (
      <button id="button" style = {{
        color: Myname(),
        padding: "5px",
        margin: "10px",
        
      }}
       >I'm a button</button>
    );
}

export  function Picture() {
    
   const image = "https://i.imgur.com/7vQD0fPs.jpg"
   const alt = "Georoge"
   const name = "vijay"
   return(
    <div style={theme}>
    <h1>{name} the react</h1>,
    <img
    src = {image}
    alt={alt}
    />
    </div>
   );
}

