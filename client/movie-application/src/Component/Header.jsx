import React from 'react'
import logo from "../images/VR.png"
import "../styles/header.css"
const Header = () => {
  return (
    <div className="main-header">
        <div className="logo">
            <img src={logo} alt="logo-image" />
        </div>
        <div className="navlink-container">
            <a className='navlink' href="">Home</a>
            <a className='navlink' href="">Favorite</a>
            <a className='navlink' href="">About</a>
            <a className='navlink' href="">Contact</a>
        </div>
    </div>
  )
}

export default Header