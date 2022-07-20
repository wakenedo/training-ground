import React, { useState } from 'react'
import Ball from '../../../../assets/svg/ball-svgrepo-com.svg'
import AnimatedBall from '../../../../assets/svg/animated_ball.svg'

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#fddf0d')

    console.log(backgroundColor)
    const increment = () => {
        return counter + 1
    }

    const decrement = () => {
        if (counter === 0) {
            return 0
        }
        return counter - 1
    }


    const backgroundColorYellow = () => {

        if (backgroundColor === '#ffeb33') {
            alert('Same Background color', backgroundColor)
        } if (backgroundColor !== '#ffeb33') {
            setBackgroundColor('#ffeb33')

        }

        return backgroundColor
    }
    const backgroundColorBlue = () => {

        if (backgroundColor === '#3388ff') {
            alert('Same Background color', backgroundColor)
        } if (backgroundColor !== '#3388ff') {
            setBackgroundColor('#3388ff')

        }

        return backgroundColor
    }
    const backgroundColorRed = () => {

        if (backgroundColor === '#ff3333') {
            alert('Same Background color', backgroundColor)
        } if (backgroundColor !== '#ff3333') {
            setBackgroundColor('#ff3333')

        }

        return backgroundColor
    }


    console.log(backgroundColor,)
    return (
        <>
            <div>This is React Increment and Decrement counter: {counter} Exercise</div>
            <button onClick={() => setCounter(increment())}>Increment</button>
            <button onClick={() => setCounter(decrement())}>Decrement</button>
            <div

                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '1200px',
                    height: '600px',
                    maxHeight: 'fit-content',
                    backgroundColor: `${backgroundColor}`,
                    margin: 'auto'

                }}
            >
                <h1>
                    This is Changing color Div {backgroundColor} exercise
                </h1>

                <button onClick={() => backgroundColorYellow()}>Yellow!</button>
                <button onClick={() => backgroundColorBlue()}>Blue!</button>
                <button onClick={() => backgroundColorRed()}>Red!</button>
                <div
                    width="100%"
                    height='100%'
                    
                    
                >
                    <img
                       
                        src={AnimatedBall}
                        width={150}
                        alt='ball'
                    />
                    
                </div>
            </div>
        </>
    )
}

export default UseState