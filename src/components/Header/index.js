import React, { useState } from 'react'


import ReturnHomeButton from '../../assets/svg/ReturnHomeButton.svg'



const Header = ({ location }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <div
      alignItems="center"
      style={{
        borderBottom: '1px solid #000',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <div style={{
        marginLeft: '39.25%'
      }}>
        <h1
          style={{
            cursor: 'default',
          }}
        >
          Training Grounds - {location ? location.substring(1) : location}
        </h1>
      </div>
      <div
        style={{
          marginTop: '20px',
          height: '50px',
          width: '100px',
        }}

      >
        <a
          href='/'
        >
          <img
            alt='return-home-button'
            src={ReturnHomeButton}
            height='48.5px'
            width='48.5px'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: isHovering ? 'ease-in-out 0.3s ' : '',
              transform: isHovering ? 'scale(1.3)' : ''
            }}
          />
        </a>
      </div>
    </div>
  )
}

export default Header