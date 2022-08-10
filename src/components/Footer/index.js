import React from 'react'
import ButtonJavaScript from '../ButtonJavaScript'
import ButtonReact from '../ButtonReact'

const Footer = () => {
  return (
    <div
      style={{
        position: 'sticky',
        bottom: '0',
        height: 'fit-content',
      }}
    >
      <ButtonJavaScript />
      <ButtonReact />
    </div>
  )
}

export default Footer