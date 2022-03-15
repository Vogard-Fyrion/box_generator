import React from 'react'



const FormDisplay = (props) => {
    const boxes = [...props.boxes]
    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
                boxes.map((box, i) => {
                    return(
                        <div key={i} style={{backgroundColor: box.color, height: box.size+"px", width: box.size+"px", margin: "5px"}}>
                            <p>{box.size}</p> 
                            <p>{box.color}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default FormDisplay
