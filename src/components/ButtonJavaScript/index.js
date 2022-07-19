import React from 'react'
import { useNavigate } from 'react-router-dom'


const JavaScript = () => {
  const navigate = useNavigate();

  return (

    <button 
    onClick={() => navigate('/JavaScript')}
    >JavaScript</button>

  )
}

export default JavaScript