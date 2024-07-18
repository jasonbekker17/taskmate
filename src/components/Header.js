import React from 'react'

import Logo from '../assets/logo.png'
import './Header.css'


const Header = () => {
  return (
    <header className='logo'>
        <img  alt="logo" src={Logo}></img>
        <a   href='/'>Home</a> 
    </header>
  )
}

export default Header
