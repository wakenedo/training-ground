import React from 'react'

import Counter from './Exercises/Counter'
import CallBackFunctions from './Exercises/CallbackFunctions'
import Header from '../../components/Header'
import { useLocation } from 'react-router-dom'

const JavaScript = () => {
    const location = useLocation()
    return (
        <div>
            <Header location={location.pathname} />
            <Counter />
            <CallBackFunctions />
        </div>
    )
}

export default JavaScript