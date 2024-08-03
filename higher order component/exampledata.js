import React from "react"
import HigherOrderComponent from "./higher order component"

function exampledata(){
    return(
        <div>
            the active data
        </div>
    )
}
export default HigherOrderComponent(exampledata) 