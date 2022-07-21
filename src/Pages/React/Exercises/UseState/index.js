import React, { useEffect, useState } from 'react'
import Ball from '../../../../assets/svg/ball-svgrepo-com.svg'


const UseState = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('298px')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])

    const combo1 = ['#ffeb33', '#3388ff', '#ff3333']


    console.log('Background log:', backgroundColor)
    console.log('Margin log', marginTop,)

    const backgroundColorYellow = () => {

        if (backgroundColor === '#ffeb33') {
            alert('You dropped the ball 🏀 !', backgroundColor)
            setPoints(0)
            return points
        } if (backgroundColor !== '#ffeb33') {
            setBackgroundColor('#ffeb33')
        }

        return backgroundColor
    }
    const backgroundColorBlue = () => {

        if (backgroundColor === '#3388ff') {
            alert('You dropped the ball 🏀 !', backgroundColor,)
            setPoints(0)
            return points
        } if (backgroundColor !== '#3388ff') {
            setBackgroundColor('#3388ff')

        }

        return backgroundColor
    }
    const backgroundColorRed = () => {

        if (backgroundColor === '#ff3333') {
            alert(' You dropped the ball 🏀 !', backgroundColor)
            setPoints(0)
            return points
        } if (backgroundColor !== '#ff3333') {
            setBackgroundColor('#ff3333')

        }

        return backgroundColor
    }

    const marginTopLow = () => {
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

    const regularCombo1 = () => {
        for (var i = 0; i < combo1.length; i++) {
            
            console.log(i, combo1[i])
        }
        for (var i = 0; i < array.length; i++) {          
            console.log(i, array[i],)
        }
        
        
        if (array[0] === combo1[0]) {
            if (array[1] === combo1[1]) {
                if (array[2] === combo1[2]) {
                    setArray([])
                    

                    console.log('combo', )
                }
            }

        } else {
            if (array[0] !== combo1[0]) {
                if (array[1] !== combo1[1]) {
                    if (array[2] !== combo1[2]) {
                        
                        
                        console.log('test')
                    }
                    
                }
                
            }
        }

        return combo1[i] = array[i]

    }
    regularCombo1()

    const regularPoints = () => {

        if (backgroundColor === '#ff3333') {
            var addPoints = points + 2
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                setPoints(points)
                return points
            }
            setPoints(addPoints)


            if (verification3) {
                return pointsAdded
            }
            return points
        }
    }

    // Iterating on Points
    useEffect(() => {
        regularPoints()
    }, [backgroundColor])

    //setting Array state for combo matching
    useEffect(() => {
        array.push(backgroundColor)
        setArray(array)

    }, [backgroundColor])

    useEffect(() => {
        if (combo1 === array) {
            console.log('combo!')
        }
    }, [])


    console.log('Points log:', points)
    console.log('Array log:', array.length, array)
    console.log('Change background-color log:', backgroundColor,)

    return (
        <>
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
                    Drop the ball - beta

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
            <h4>Background Color : {backgroundColor}</h4>
        </>
    )
}

export default UseState