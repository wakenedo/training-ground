import React, { useEffect, useState } from 'react'
import Ball from '../../../../assets/svg/ball-svgrepo-com.svg'

const HooksGame = () => {
    const [backgroundColor, setBackgroundColor] = useState('#ffeb33')
    const [marginTop, setMarginTop] = useState('298px')
    const [points, setPoints] = useState(0)
    const [array, setArray] = useState([])


    const blue = '#3388ff'
    const red = '#ff3333'
    const yellow = '#ffeb33'

    const regularCombo1 = [yellow, blue, red]
    const regularCombo2 = [red, blue, yellow]
    const weirdCombo1 = [blue, yellow, red]
    const weirdCombo2 = [blue, red, yellow]
    const weakCombo1 = [red, yellow, blue]
    const weakCombo2 = [yellow, red, blue]
    const weakestCombo1 = [blue, red, blue]
    const weakestCombo2 = [yellow, blue, yellow]
    const whackCombo1 = [red, blue, red]
    const whackCombo2 = [red, yellow, red]
    const _superCombo1 = [blue, yellow, blue, red]
    const _superWhack1 = [blue, yellow, blue, yellow]


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


    const superWhackCombo = () => {
        for (var x = 0; x < _superWhack1.length; x++) {

            // console.log(x, _superWhack1[x])
        }
        for (var x1 = 0; x1 < array.length; x1++) {

            // console.log(x1, array[x1],)
        }


        if (array[0] === _superWhack1[0]) {
            if (array[1] === _superWhack1[1]) {
                if (array[2] === _superWhack1[2]) {
                    if (array[3] === _superWhack1[3]) {
                        if (points <= 0) {
                            setArray([])
                            setPoints(0)
                            console.log('_superWhack1',)
                        }
                        return true


                    }

                }

            }

        }


        console.log('super whack test', array, _superWhack1)
        return false

    }
    superWhackCombo()
    const whackCombo = () => {
        for (var y = 0; y < whackCombo1.length; y++) {

            // console.log(y, whackCombo1[y])
        }
        for (var y1 = 0; y1 < array.length; y1++) {

            // console.log(y1, array[y1],)
        }


        if (array[0] === whackCombo1[0]) {
            if (array[1] === whackCombo1[1]) {
                if (array[2] === whackCombo1[2]) {
                    setArray([])
                    console.log('whackCombo1',)
                }
                return true
            }
        }
        if (array[0] === whackCombo2[0]) {
            if (array[1] === whackCombo2[1]) {
                if (array[2] === whackCombo2[2]) {
                    setArray([])
                    console.log('whackCombo2',)
                }
                return true
            }

        }

        console.log('whack test', array, whackCombo1)
        return false

    }
    whackCombo()
    const weakestCombo = () => {
        for (var z = 0; z < weakestCombo1.length; z++) {

            // console.log(z, weakestCombo1[z])
        }
        for (var z1 = 0; z1 < array.length; z1++) {

            // console.log(z1, array[z1],)
        }


        if (array[0] === weakestCombo1[0]) {
            if (array[1] === weakestCombo1[1]) {
                if (array[2] === weakestCombo1[2]) {
                    setArray([])
                    console.log('weakestCombo1',)
                }
                return true
            }
        }
        if (array[0] === weakestCombo2[0]) {
            if (array[1] === weakestCombo2[1]) {
                if (array[2] === weakestCombo2[2]) {
                    setArray([])
                    console.log('weakestCombo2',)
                }
                return true
            }

        }

        console.log('weak test', array, weakestCombo1)
        return false

    }
    weakestCombo()
    const weakCombo = () => {
        for (var f = 0; f < weakCombo1.length; f++) {

            // console.log(f, weakCombo1[f])
        }
        for (var f1 = 0; f1 < array.length; f1++) {

            // console.log(f1, array[f1],)
        }


        if (array[0] === weakCombo1[0]) {
            if (array[1] === weakCombo1[1]) {
                if (array[2] === weakCombo1[2]) {
                    setArray([])
                    console.log('weakCombo1',)
                }
                return true
            }
        }
        if (array[0] === weakCombo2[0]) {
            if (array[1] === weakCombo2[1]) {
                if (array[2] === weakCombo2[2]) {
                    setArray([])
                    console.log('weakCombo2',)
                }
                return true
            }

        }

        console.log('weak test', array, weakCombo1)
        return false

    }
    weakCombo()

    const weirdCombo = () => {
        for (var u = 0; u < weirdCombo1.length; u++) {

            // console.log(u, weirdCombo1[u])
        }
        for (var u1 = 0; u1 < array.length; u1++) {

            // console.log(u1, array[u1],)
        }

        if (array[0] === weirdCombo1[0]) {
            if (array[1] === weirdCombo1[1]) {
                if (array[2] === weirdCombo1[2]) {
                    setArray([])
                    console.log('weirdCombo1')
                }
                return true
            }
        }
        if (array[0] === weirdCombo2[0]) {
            if (array[1] === weirdCombo2[1]) {
                if (array[2] === weirdCombo2[2]) {
                    setArray([])

                    console.log('weirdCombo2',)
                }
                return true
            }

        }


        console.log('regular test', array, weirdCombo1)
        return false

    }
    weirdCombo()
    const regularCombo = () => {
        for (var d = 0; d < regularCombo1.length; d++) {

            // console.log(d, regularCombo1[d])
        }
        for (var d1 = 0; d1 < array.length; d1++) {

            // console.log(d1, array[d1],)
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


        console.log('regular test', array, regularCombo1)
        return false

    }
    regularCombo()
    const superCombo = () => {
        for (var j = 0; j < _superCombo1.length; j++) {

            // console.log(j, _superCombo[j])
        }
        for (var j1 = 0; j1 < array.length; j1++) {

            // console.log(j1, array[j1],)
        }


        if (array[0] === _superCombo1[0]) {
            if (array[1] === _superCombo1[1]) {
                if (array[2] === _superCombo1[2]) {
                    if (array[3] === _superCombo1[3]) {
                        setArray([])
                        console.log('_superCombo',)

                        return true
                    }
                }
            }
        }

        console.log(' super combo test', array, _superCombo1)
        return false

    }
    superCombo()

    const superWhackPoints = () => {

        if (superWhackCombo(true)) {
            var addPoints = points - 4
            var pointsAdded = addPoints
            var verification2 = points !== 0
            var verification3 = points !== pointsAdded


            console.log('pointsAdded log:', pointsAdded,)
            console.log('addPoints log:', addPoints,)
            console.log('points log:', points)

            console.log('verifications 2 & 3 log:', verification2, '&', verification3,)


            if (verification2) {
                const points = pointsAdded
                if (points < 0) {
                    setPoints(0)
                }
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
    const whackPoints = () => {

        if (whackCombo(true)) {
            var addPoints = points + 0
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
    const weakestPoints = () => {

        if (weakestCombo(true)) {
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
    const weakPoints = () => {

        if (weakCombo(true)) {
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
    const weirdPoints = () => {

        if (weirdCombo(true)) {
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
    const regularPoints = () => {

        if (regularCombo(true)) {
            var addPoints = points + 3
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
    const superPoints = () => {

        if (superCombo(true)) {
            var addPoints = points + 6
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

    // Iterating on Whack Points
    useEffect(() => {
        whackPoints()
    }, [backgroundColor])
    // Iterating on Weak Points
    useEffect(() => {
        weakPoints()
    }, [backgroundColor])
    // Iterating on Weakest Points
    useEffect(() => {
        weakestPoints()
    }, [backgroundColor])
    // Iterating on Weird Points
    useEffect(() => {
        weirdPoints()
    }, [backgroundColor])
    // Iterating on Regular Points
    useEffect(() => {
        regularPoints()
    }, [backgroundColor])
    // Iterating on Super Points
    useEffect(() => {
        superPoints()
    }, [backgroundColor])
    // Iterating on superWhack Points
    useEffect(() => {
        superWhackPoints()
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
        <div>
            <h2>
                ReactJS - HooksGame Exercise
            </h2>

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
                    🏀 Drop the Ball 🏀
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
            <h6>Background Color : {backgroundColor}</h6>


            <div
                style={{
                    display: 'flex',


                }}
            >



            </div>
        </div>
    )
}

export default HooksGame