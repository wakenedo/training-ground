import React, { useEffect, useState } from 'react'
import Ball from '../../../../assets/svg/ball-svgrepo-com.svg'


const UseState = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('298px')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])

    const blue = '#3388ff'
    const red = '#ff3333'
    const yellow = '#ffeb33'

    const regularCombo1 = [yellow, blue, red]
    const regularCombo2 = [red, blue, yellow]
    const weakCombo1 = [blue, yellow, red]
    const weakCombo2 = [blue, red, yellow]
    const weakCombo3 = [blue, red, blue]
    const weakCombo4 = [blue, yellow, yellow]
    const _superCombo = [blue, yellow, blue, red]


    console.log('Background log:', backgroundColor)
    console.log('Margin log', marginTop,)

    const backgroundColorYellow = () => {

        if (backgroundColor === '#ffeb33') {
            alert('You dropped the ball 🏀 !', backgroundColor)
            setPoints(0)
            setArray([])
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
            setArray([])
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
            setArray([])
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

    {/*const superCombo = () => {
        for (var i = 0; i < _superCombo.length; i++) {

            // console.log(i, _superCombo[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
        }


        if (array[0] === _superCombo[0]) {
            if (array[1] === _superCombo[1]) {
                if (array[2] === _superCombo[2]) {
                    setArray([])


                    console.log('_superCombo',)
                }
            }
        }

        console.log('test', array, _superCombo)
        return _superCombo[i] = array[i]

    }
superCombo()*/}

    const regularCombo = () => {
        for (var i = 0; i < regularCombo1.length; i++) {

            // console.log(i, regularCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
        }

        if (array[0] === regularCombo1[0]) {
            if (array[1] === regularCombo1[1]) {
                if (array[2] === regularCombo1[2]) {
                    setArray([])
                    console.log('regularCombo1')
                }
                return true
            }
        }
        if (array[0] === regularCombo2[0]) {
            if (array[1] === regularCombo2[1]) {
                if (array[2] === regularCombo2[2]) {
                    setArray([])

                    console.log('regularCombo2',)
                }
                return true
            }

        }


        console.log('test', array, regularCombo1)
        return false

    }
    regularCombo()

    const weakCombo = () => {
        for (var i = 0; i < weakCombo1.length; i++) {

            // console.log(i, weakCombo1[i])
        }
        for (var i = 0; i < array.length; i++) {

            // console.log(i, array[i],)
        }


        if (array[0] === weakCombo1[0]) {
            if (array[1] === weakCombo1[1]) {
                if (array[2] === weakCombo1[2]) {
                    setArray([])


                    console.log('weakCombo1',)
                }
            }
        }
        if (array[0] === weakCombo2[0]) {
            if (array[1] === weakCombo2[1]) {
                if (array[2] === weakCombo2[2]) {
                    setArray([])


                    console.log('weakCombo2',)
                }
            }

        }
        if (array[0] === weakCombo3[0]) {
            if (array[1] === weakCombo3[1]) {
                if (array[2] === weakCombo3[2]) {
                    setArray([])


                    console.log('weakCombo3',)
                }
            }

        }
        if (array[0] === weakCombo4[0]) {
            if (array[1] === weakCombo4[1]) {
                if (array[2] === weakCombo4[2]) {
                    setArray([])


                    console.log('weakCombo4',)
                }
            }

        }


        console.log('test', array, weakCombo1)
        return weakCombo1[i] = array[i]

    }
    weakCombo()

    const regularPoints = () => {

        if (regularCombo(true)) {
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
    const weakPoints = () => {

        if (weakCombo(true)) {
            var addPoints = points + 1
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
        weakPoints()
        
    }, [backgroundColor])

    //setting Array state for combo matching
    useEffect(() => {
        array.push(backgroundColor)
        setArray(array)

    }, [backgroundColor])




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