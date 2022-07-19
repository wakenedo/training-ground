import React, { useState } from 'react'

const UseState = () => {
    const [counter, setCounter] = useState(0)
    
    const increment = () => {
        return counter + 1
    }

    const decrement = () => {
        if(counter === 0) {
            return 0
        }
        return counter - 1
    }
    
    
    
    
    

    return (
        <>
            <div>This is React Increment and Decrement counter: {counter} Exercise</div>
            <button  onClick={() => setCounter(increment())}>Increment</button>
            <button  onClick={() => setCounter(decrement())}>Decrement</button>
        </>
    )
}

export default UseState