import React, { useState, useEffect } from 'react'
import Text from './components/Text'

const EffectsHook1 = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div className='App-Effects1'>
      <h1>
        Side Effects Exercise 1
      </h1>
      <h4>
        Component Lifecycle - useEffect Hook Introduction
      </h4>

      <button onClick={() => {
        setShowText(!showText)
      }}>
        Show Input
      </button>
      {showText && <Text />}
    </div>
  )
}

export default EffectsHook1