import React from 'react'

import Logo from '../assets/logo.png'


const Header = () => {
  return (
    <div className='logo'>
        <img  alt="logo" src={Logo}></img>
        <a   href='/'>Home</a> 
    </div>
  )
}

export default Header
