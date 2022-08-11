import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header'
import Counter from './Exercises/Counter'
import CrudExercises from './Exercises/CrudExercise'
import HooksGame from './Exercises/HooksGame'


const ReactJS = () => {
  const location = useLocation()

  return (
    <div>
      <Header location={location.pathname} />
      <Counter />
      <HooksGame />
      <CrudExercises />
    </div>
  )
}

export default ReactJS