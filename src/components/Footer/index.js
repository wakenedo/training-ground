import React from 'react'
import ButtonJavaScript from '../ButtonJavaScript'
import ButtonReact from '../ButtonReact'

const Footer = () => {


  return (
    <div
      style={{
        position: 'sticky',
        bottom: '0',
        zIndex: '999'

      }}
    >
      <ButtonJavaScript />
      <ButtonReact />
    </div>
  )
}

export default Footer