import React from 'react'
import ButtonJavaScript from '../ButtonJavaScript'
import ButtonReact from '../ButtonReact'

const Footer = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '0',

      }}
    >
      <ButtonJavaScript />
      <ButtonReact />
    </div>
  )
}

export default Footer