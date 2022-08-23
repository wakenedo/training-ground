import React from 'react'
import Container from './components/Container'
import { DarkModeProvider } from '../ContextExercise1/context/DarkModeContext'

import './styles/contextExercise1.css'

const ContextExercise1 = () => {

  return (
    <>
      <h1>Context Exercise 1</h1>

      <h4>
        Changing Themes Using Context API
      </h4>
      <DarkModeProvider>
        <Container />
      </DarkModeProvider>
    </>
  )
}

export default ContextExercise1