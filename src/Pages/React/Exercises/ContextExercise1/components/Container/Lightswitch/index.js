import React, { useContext } from 'react';
import { DarkModeContext } from '../../../context/DarkModeContext'
import on from '../../../assets/lightswitch-on.png'
import off from '../../../assets/lightswitch-off.png'


function Lightswitch() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    toggleDarkMode();
  }

  return (
    <div className="Lightswitch">
      <img
        width='200px'
        src={darkMode ? off : on}
        alt='lightswitch on'
        onClick={handleClick}
      />
    </div>
  )

}

export default Lightswitch;