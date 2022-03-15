import React, {useState} from 'react'

const Form = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState(200);

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    const handleSize = (e) => {
        setSize(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox({color, size})
        setColor("")
        setSize(200)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color</label>
                    <input type="text" name="color" onChange={handleColor} value={color}/>
                </div>
                <div>
                    <label>Size</label>
                    <input type="number" name="size" onChange={handleSize} value={size}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form