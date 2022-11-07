import React, {useState} from "react";

const InputListener = () => {

    const [value, setValue] = useState("start to print")

    return (
        <div>
            <h1>{value}</h1>
            <input
                type='text'
                value={value}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}

export default InputListener;