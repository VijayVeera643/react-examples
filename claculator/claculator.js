import { useState } from "react"
import "./calculator.css"

export default function CalculatorUi(){
    const[inputvalue , setInputvalue] = useState("0");
    
    let equation = [] 

    function handleNumberButton(event){
       const {value} = event.target;
       if(inputvalue === "0" ){
            setInputvalue(value);
        }else{
            setInputvalue(inputvalue=> inputvalue + value);
        }
    }

    function handleEquationButton(){
        equation.push(inputvalue)
        let joinedEquationValue = equation.join("");
        let calculatedValue = eval(joinedEquationValue);
        setInputvalue(calculatedValue)
        equation = []
    }

    function handleClearButton(){
        setInputvalue("0")
    }

    function handleOperatorButton(event){
        let last_item = inputvalue.toString().charAt(inputvalue.length-1)
        if(["/","+","*","-","."].includes(last_item) ){  
            setInputvalue(inputvalue => inputvalue.replace(last_item , event.target.value))
        }else{
            setInputvalue( inputvalue => inputvalue + event.target.value)
        }
                
    }

    return (
        <body className="container-box">
            <div className="calculator-table" >
                <table className="calculator">
                    <tbody>
                        <tr>
                            <td colSpan={3}><input className="input" value={inputvalue} /></td>
                            <td><button className="operator-button" value={'.'} onClick={handleOperatorButton}>.</button></td>
                        </tr>
                        <tr>
                            <td><button className="operand-button" value={1} onClick={handleNumberButton}>1</button></td>
                            <td><button className="operand-button" value={2} onClick={handleNumberButton}>2</button></td>
                            <td><button className="operand-button" value={3} onClick={handleNumberButton}>3</button></td>
                            <td><button className="operator-button" value={'-'} onClick={handleOperatorButton}>-</button></td>
                        </tr>
                        <tr>
                            <td><button className="operand-button" value={4} onClick={handleNumberButton}>4</button></td>
                            <td><button className="operand-button" value={5} onClick={handleNumberButton}>5</button></td>
                            <td><button className="operand-button" value={6} onClick={handleNumberButton}>6</button></td>
                            <td><button className="operator-button" value={'+'} onClick={ handleOperatorButton}>+</button></td>
                        </tr>
                        <tr>
                            <td><button className="operand-button" value={7} onClick={handleNumberButton}>7</button></td>
                            <td><button className="operand-button" value={8} onClick={handleNumberButton}>8</button></td>
                            <td><button className="operand-button" value={9} onClick={handleNumberButton}>9</button></td>
                            <td><button className="operator-button" value={'/'} onClick={handleOperatorButton}>/</button></td>
                        </tr>
                        <tr>
                            <td><button className="operand-button" onClick={handleEquationButton}>=</button></td>
                            <td><button className="operand-button" onClick={handleClearButton}>C</button></td>
                            <td><button className="operand-button" value={0} onClick={handleNumberButton}>0</button></td>
                            <td><button className="operator-button" value={'*'} onClick={handleOperatorButton}>*</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </body>
    )
} 

