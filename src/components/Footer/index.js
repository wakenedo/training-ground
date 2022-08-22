import React from 'react'
//import ButtonJavaScript from '../ButtonJavaScript'
import ButtonReact from '../ButtonReact'
import ButtonRedux from '../ButtonRedux'

const Footer = () => {


  return (
    <div
      style={{
        position: 'sticky',
        bottom: '0',
        zIndex: '999'

      }}
    >
      {/*<ButtonJavaScript />*/}
      <ButtonReact />
      <ButtonRedux />
    </div>
  )
}

export default Footer