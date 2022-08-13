import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../../components/Header'
import Counter from './Exercises/Counter'
import CrudExercises from './Exercises/CrudExercise'
import EffectsHook1 from './Exercises/EffectsHook1'
import HooksGame from './Exercises/HooksGame'


const ReactJS = () => {
  const location = useLocation()

  return (
    <div>
      <Header location={location.pathname} />
      <Counter />
      <HooksGame />
      <CrudExercises />
      <EffectsHook1 />
    </div>
  )
}

export default ReactJS