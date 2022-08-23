import React from 'react'
import { useLocation } from 'react-router-dom'

//Components
import Header from '../../components/Header'

//Inner Components
import SimpleCounter from './Exercises/SimpleCounter'
import ReduxExercise1 from './Exercises/ReduxExercise1'

//Simple Counter Exercise Imports
import { Provider as SimpleCounterProvider } from 'react-redux'
import SimpleCounterStore from '../Redux/Exercises/SimpleCounter/Store'

//Steps Exercise
import { Provider as ReduxExercise1Provider } from 'react-redux'
import ReduxExercise1Store from '../Redux/Exercises/ReduxExercise1/Store'

const Redux = () => {
  const location = useLocation()
  return (
    <div>
      <Header location={location.pathname} />
      <SimpleCounterProvider store={SimpleCounterStore}>
        <SimpleCounter />
      </SimpleCounterProvider>
      <ReduxExercise1Provider store={ReduxExercise1Store}>
        <ReduxExercise1 />
      </ReduxExercise1Provider>
    </div>
  )
}

export default Redux



