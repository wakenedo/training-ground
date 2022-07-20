import React, { useState } from 'react'
import Ball from '../../../../assets/svg/ball-svgrepo-com.svg'
//import AnimatedBall from '../../../../assets/svg/animated_ball.svg'

const UseState = () => {
    const [counter, setCounter] = useState(0)
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('298px')
    const [points, setPoints] = useState(0)

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
            alert('You dropped the ball 🏀 ! Same Background color', backgroundColor)
        } if (backgroundColor !== '#ffeb33') {
            setBackgroundColor('#ffeb33')

        }

        return backgroundColor
    }
    const backgroundColorBlue = () => {

        if (backgroundColor === '#3388ff') {
            alert('You dropped the ball 🏀 ! Same Background color', backgroundColor)
        } if (backgroundColor !== '#3388ff') {
            setBackgroundColor('#3388ff')

        }

        return backgroundColor
    }
    const backgroundColorRed = () => {

        if (backgroundColor === '#ff3333') {
            alert(' You dropped the ball 🏀 ! Same Background color', backgroundColor)
        } if (backgroundColor !== '#ff3333') {
            setBackgroundColor('#ff3333')

        }

        return backgroundColor
    }

    const  marginTopLow  = () => {
        if (backgroundColor === '#ffeb33') {
            setMarginTop('18px')
        } if (marginTop !== '18px') {
            setMarginTop('18px')

        }
        return marginTop
    }
    const marginTopMid = () => {
        if (backgroundColor === '#3388ff') {
            setMarginTop('108px')
        } if (marginTop !== '108px') {
            setMarginTop('108px')

        }
        return marginTop
    }
    const marginTopHigh = () => {
        if (backgroundColor === '#ff3333') {
            setMarginTop('298px')
        } if (marginTop !== '288px') {
            setMarginTop('288px')

        }
        return marginTop
    }

    const regularPoints = () => {
        if (backgroundColor === '#ff3333') {
           return points + 1
            
        }
        console.log(points)
        return points
        
    }

    console.log(regularPoints())
    console.log(backgroundColor,)
    console.log(marginTop,)
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

                <button onClick={() => backgroundColorYellow(marginTopLow())}>Yellow!</button>
                <button onClick={() => backgroundColorBlue(marginTopMid())}>Blue!</button>
                <button onClick={() => backgroundColorRed(marginTopHigh())}>Red!</button>
                <div
                    width="100%"
                    height='100%'
                    
                    
                >   
                    
                    <img
                       style={{
                        marginTop: `${marginTop}`,
                        transition: '0.2 ease-in-out',
                       }}
                        src={Ball}
                        width={150}
                        alt='ball'
                    />
                    
                </div>
            </div>
                <h4>Points : {points}</h4>
        </>
    )
}

export default UseState