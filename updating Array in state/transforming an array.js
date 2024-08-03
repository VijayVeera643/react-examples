import { useState } from "react"

export default function TransFormingArray(){
    let initialshapes = [
      
        {id: 1, type: 'square', x: 200, y: 200},
        {id: 2, type: "circle", x: 250, y: 200},
        {id: 3, type: "square", x: 300, y: 200}        
    ]
    const [shapes, setShapes] = useState(initialshapes)

    function handleButtonClick(){
        const movingShapes = shapes.map(shape =>{
            if( shape.type === "circle"){
                return shape
            }else{
                return{
                    ...shape,
                    y: shape.y + 700
                }
            }
        })
        setShapes(movingShapes)
    }
    return(
        <div>
            <div onClick={handleButtonClick}>moving shapes</div>
            {shapes.map( shape => (
                <div style={{
                    position: "absolute",
                    left: shape.x,
                    top: shape.y,
                    width: 20,
                    height: 20,
                    backgroundColor: 'red',
                    borderRadius: shape.type === 'circle' ? "50%" : " "

                }}>
                </div>
            ))}
        </div>
    )
}