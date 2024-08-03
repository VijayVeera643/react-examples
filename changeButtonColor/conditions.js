export function Conditions({name, iscalled}){
    
        if(iscalled){
           return <h1>{name + "+"}</h1>
        }
        return <h1>{name + "-"}</h1>
    
}

export function Ternary({age,smallage}){
    return   smallage ?  `smallboy: ${age}` : `bigboy: ${age}`
} 

