import { useState, useEffect, useRef } from "react";


export  function Apple() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  
  count.current = count.current + 1;


  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export function Appling() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}



export function PreviousValue() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
   console.log(previousInputValue.current)
  }, [inputValue]);
  console.log(previousInputValue.current)
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );
}



export function AccessingDom() { 

// Creating a ref object using useRef hook 
const focusPoint = useRef(null); 
const onClickHandler = () => { 
	focusPoint.current.value = 
	"The quick brown fox jumps over the lazy dog"; 
	focusPoint.current.focus(); 
}; 
return ( 
	<div>
	<div> 
		<button onClick={onClickHandler}> 
		ACTION 
		</button> 
	</div> 
	<label> 
	Click on the action button to 
	focus and populate the text. 
	</label><br/> 
	<textarea ref={focusPoint} /> 
	</div>
); 
}; 


