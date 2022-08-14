import React, { useEffect, useState } from 'react'
import Axios from 'axios'


const EffectsHook3 = () => {
  const [name, setName] = useState('')
  const [predictedAge, setPredictedAge] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setPredictedAge(response.data)
    })
  }

  return (
    <div className='App-Effects3'>
      <h1>Side Effects Exercise 3</h1>
      <p>Predict your age, with api.agify</p>
      <input placeholder='Ex. Wakenedo...' onChange={(event) => {
        setName(event.target.value)
      }} />
      <button onClick={fetchData}>Predict Age</button>
      <h4>Name: {predictedAge?.name}</h4>
      <h4>Predicted Age: {predictedAge?.age}</h4>
      <h4>Count: {predictedAge?.count}</h4>
    </div>



  )
}

export default EffectsHook3