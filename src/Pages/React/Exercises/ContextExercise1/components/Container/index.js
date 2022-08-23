import React, { useContext } from 'react'
import Lightswitch from '../Container/Lightswitch'
import { DarkModeContext } from '../../context/DarkModeContext'
import '../../styles/contextExercise1.css'

function Container() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? `Container Container-dark` : `Container Container-light`}
      style={{
        margin: '10px auto'
      }}
    >
      <Lightswitch />
    </div>
  )
}
export default Container;