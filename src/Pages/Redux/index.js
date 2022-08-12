import React from 'react'
import { useLocation } from 'react-router-dom'

//Components
import Header from '../../components/Header'

//Inner Components
import SimpleCounter from './SimpleCounter'

//Simple Counter Exercise Imports
import { Provider as SimpleCounterProvider } from 'react-redux'
import SimpleCounterStore from './SimpleCounter/Store'

const Redux = () => {
  const location = useLocation()
  return (
    <div>
      <Header location={location.pathname} />
      <SimpleCounterProvider store={SimpleCounterStore}>
        <SimpleCounter />
      </SimpleCounterProvider>
    </div>
  )
}

export default Redux



