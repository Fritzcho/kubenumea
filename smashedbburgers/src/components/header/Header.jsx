import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='sbb__header'>
        <a className='sbb__header-order' href="#">Beställ</a>
        <img className='sbb__header-img' src={require("../../assets/BrooklynBurgers.png")}/>
        <a className='sbb__header-map' href="#map">Hitta till oss</a>
    </div>
  )
}

export default Header