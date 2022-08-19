import React, { useState } from 'react'
import Axios from 'axios'


const EffectsHook4 = () => {
  const [generatedExcuse, setGeneratedExcuse] = useState('')

  const fetchExcuse = (excuse) => {

    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}/`).then(
      (response) => {
        setGeneratedExcuse(response.data[0].excuse)
      }
    )
  }


  return (
    <div>
      <h1>Generate an Excuse</h1>
      <h4>Using Excuser Api</h4>

      <button onClick={() => fetchExcuse('party')}>Generate Party Excuse</button>
      <button onClick={() => fetchExcuse('family')}>GenerateFamily Excuse</button>
      <button onClick={() => fetchExcuse('office')}>Generate Office Excuse</button>
      <h4>{generatedExcuse}</h4>
    </div>
  )
}

export default EffectsHook4