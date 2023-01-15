import React from 'react'
import './footer.css'
import Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='sbb__footer'>
        <div className='sbb__footer-left'>
            <p>
                FORMVÄGEN 8B
                <br/>
                090-765 70 33
                <br/>
                info@KUBENUMEA.SE
            </p>
        </div>
        <div className='sbb__footer-right'>
            <img className='sbb__footer-img' src={Logo}/>
            <small>Hemsidan utvecklad i samarbete med A. Ramezani</small> 
        </div>
    </div>
  )
}

export default Footer