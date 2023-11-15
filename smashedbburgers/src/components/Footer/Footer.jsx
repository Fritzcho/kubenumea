import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='sbb__footer'>
        <div className='sbb__footer-left'>
            <p>
                FORMVÄGEN 8C
                <br/>
                090-202 30 10
                <br/>
                info@KUBENUMEA.SE
            </p>
        </div>
        <div className='sbb__footer-right'>
            <img className='sbb__footer-img' src={Logo}/>
            <small>Hemsidan utvecklad i samarbete med <a style={{color: "white"}} href="https://fritzcho.github.io/portfolio_v2/">A. Ramezani</a></small>
        </div>
    </div>
  )
}

export default Footer