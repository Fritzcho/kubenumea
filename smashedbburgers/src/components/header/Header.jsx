import React, { useEffect, useState } from "react";
import './header.css'
import Logo from '../../assets/logo-black.svg'

const Header = () => {
    const [header, setHeader] = useState(false)
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
          setHeader(true)
        } else {
          setHeader(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
  return (
    <nav className={header ? 'sbb__header' : 'sbb__header-active'}>
        <img className={header ? 'sbb__header-logo' : 'sbb__header-logo-active'} src={Logo} height="65px"/>
        <div className='sbb__header-menu'>
            <a href="#menu">MENY</a>
            <a href="#map">HITTA HIT</a>
            <a href="#form">KONTAKTA OSS</a>
            <button>BESTÄLL</button>
        </div>
    </nav>
  )
}

export default Header