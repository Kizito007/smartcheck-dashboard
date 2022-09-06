import React from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import smartcheck from "../assets/SmartcheckLogoWhite.svg"

const Header = () => {
  return (
    <nav>
        <div className='smartcheck'>
            <img src={smartcheck} />
        </div>
        <ResponsiveAppBar />
    </nav>
  )
}

export default Header