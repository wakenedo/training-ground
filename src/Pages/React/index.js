import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header'
import Counter from './Exercises/Counter'
import HooksGame from './Exercises/HooksGame'





const ReactJS = () => {
  const location = useLocation()

  return (
    <div>
      <Header location={location.pathname} />
      <Counter />
      <HooksGame />
    </div>
  )
}

export default ReactJS