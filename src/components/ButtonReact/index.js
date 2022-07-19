import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReactJS = () => {
  const navigate = useNavigate();
  return (
    <button
    onClick={() => navigate('/React')}
    >React</button>
  )
}

export default ReactJS