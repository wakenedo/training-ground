import React from 'react'
import MyCoolCodeBlock from '../../../../components/MyCoolCodeBlock';



export function modifyArray(arr, callback) {
    //do something to arr here
    arr.push(100)
    //then execute the callback functions that was passed
    callback()
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function () {
    console.log('array has been modified', arr)
})



  

const CallBackFunctions = ( ) => {
    return (
        <>
            <h1>Callback Functions</h1>
            <p>A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed. Below is an example of a simple callback function that logs to the console after some operations have been completed.</p>
            
           

        </>

    )
}

export default CallBackFunctions


