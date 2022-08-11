import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => {
        return counter + 1
    }
    const decrement = () => {
        if (counter === 0) {
            return 0
        }
        return counter - 1
    }
    return (
        <div
            style={{
                marginBottom: '35px'
            }}
        >
            <div>
                <h2>
                    This is React Increment and Decrement Exercises
                </h2>
                <p>
                    counter: <strong>{counter}</strong>
                </p>
            </div>
            <button onClick={() => setCounter(increment())}>Increment</button>
            <button onClick={() => setCounter(decrement())}>Decrement</button>
            <button onClick={e => setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter