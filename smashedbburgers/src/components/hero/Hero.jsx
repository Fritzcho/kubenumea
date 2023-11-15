import React from 'react'
import './hero.css'
import Arrow from '../../assets/Arrow.svg';
import Logo from '../../assets/logo.svg';
import Header from '../header/Header';

const Hero = () => {
  return (
    <div className='sbb__hero'>
        <div className="sbb__hero-logo">
            <img src={Logo} height="150%"/>
        </div>
        <div className="sbb__hero-text-h1">
            Gatukök med inspiration från världen över <br/> på Ersboda handelsområde
        </div>
        <div className="sbb__hero-text-h3">
            Beställ via hemsidan eller ring 090-202 30 10. Du kan även beställa på plats hos oss <br/>
            Formvägen 8C
        </div>
        <a href='https://kuben.yabie.online'><button>BESTÄLL ONLINE</button></a>
        {/*<div className='sbb__hero-arrow-container'>
          <div className='sbb__hero-arrow'>
            <a href='#Menu'><img src={Arrow} width="100px"/></a>
            <p>Se vår meny!</p>
          </div>
        </div>*/}
    </div>
  )
}

export default Hero