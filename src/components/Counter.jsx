import React, {useState} from "react";

const Counter = () => {

    const [counter, setCounter] = useState(0)

    function inc() {
        setCounter(counter + 1)
    }

    function dec() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default Counter;