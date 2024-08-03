import React from "react";

const isactive = true;
export default function HigherOrderComponent (Component) {
 return function(){
    if(!isactive){
        return <div>not active</div>
    }
    return <Component/>
 }
    
}