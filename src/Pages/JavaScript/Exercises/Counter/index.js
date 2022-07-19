export function Counter() {
    var initialValue = 1
    var value = 0

    const sum = () => {
        let iterations = initialValue++
        var b = iterations
        
       

        console.log( iterations, b)
        return b
        
    }
   
    



    console.log('sum log:', sum())


    return (
        <>
            <h1>This is counter exercise</h1>
            <h1  >{sum()}</h1>
            <button onClick={() => (sum())} >Addition</button>
            <span></span>
        </>
    )
}