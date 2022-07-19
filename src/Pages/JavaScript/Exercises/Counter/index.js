export function Counter() {
    var initialValue = 0
    

    const sum = () => {
            const iteration = initialValue++
            var result = iteration
            let value = initialValue
            console.log(iteration, result, initialValue, value) 
            return result   
            
    }
   
    


    console.log( 'sum log:',sum() )


    return (
        <>
            <h1>This is counter exercise</h1>
            <h1>{initialValue}</h1>
            <button onClick={() => sum()} >Addition</button>
            <span></span>
        </>
    )
}