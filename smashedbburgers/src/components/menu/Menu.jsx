import React from 'react'
import './menu.css'

const Menu = () => {
  return (
    <div className='sbb__menu'>
        <h1 className='sbb__menu-menu' id="menu">
            MENY
        </h1>
        <img src={require('../../assets/menu.jpg')}/>
    </div>
  )
}

export default Menu