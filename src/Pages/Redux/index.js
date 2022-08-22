import React from 'react'
import { useLocation } from 'react-router-dom'

//Components
import Header from '../../components/Header'

//Inner Components
import SimpleCounter from './Exercises/SimpleCounter'

//Simple Counter Exercise Imports
import { Provider as SimpleCounterProvider } from 'react-redux'
import SimpleCounterStore from '../Redux/Exercises/SimpleCounter/Store'
import ReduxExercise1 from './Exercises/ReduxExercise1'

const Redux = () => {
  const location = useLocation()
  return (
    <div>
      <Header location={location.pathname} />
      <SimpleCounterProvider store={SimpleCounterStore}>
        <SimpleCounter />
      </SimpleCounterProvider>
      <ReduxExercise1 />
    </div>
  )
}

export default Redux



