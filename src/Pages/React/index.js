import React from 'react'
import { useLocation } from 'react-router-dom'

//Components
import Header from '../../components/Header'
import ContextExercise1 from './Exercises/ContextExercise1'

//Inner Components
import Counter from './Exercises/Counter'
import CrudExercises from './Exercises/CrudExercise'
import EffectsHook1 from './Exercises/EffectsHook1'
import EffectsHook2 from './Exercises/EffectsHook2'
import EffectsHook3 from './Exercises/EffectsHook3'
import EffectsHook4 from './Exercises/EffectsHook4'
//import HooksGame from './Exercises/HooksGame'


const ReactJS = () => {
  const location = useLocation()

  return (
    <div>
      <Header location={location.pathname} />
      <Counter />
      {/*<HooksGame />*/}
      <CrudExercises />
      <EffectsHook1 />
      <EffectsHook2 />
      <EffectsHook3 />
      <EffectsHook4 />
      <ContextExercise1 />
    </div>
  )
}

export default ReactJS