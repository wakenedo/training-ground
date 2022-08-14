import React, { useEffect, useState } from 'react'
import Axios from 'axios'



const EffectsHook2 = () => {
  const [catFact, setCatFact] = useState('')

  const fetchCatFact = () => {
    Axios.get('https://catfact.ninja/fact').then((response) => {
      setCatFact(response.data.fact)
    })
  }
  useEffect(() => {
    fetchCatFact();
  }, [])

  //fetch('https://catfact.ninja/fact').then((response) => response.json().then((data) => console.log(data)))


  return (
    <div className='App-Effects2'>
      <h1>Side Effects Exercise 2</h1>
      <h4>Fetching data from Api</h4>
      <p>Using Cat Fact Api to generate a Cat fact on click</p>

      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}

export default EffectsHook2