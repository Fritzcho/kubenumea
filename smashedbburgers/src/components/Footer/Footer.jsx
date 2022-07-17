import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='sbb__footer'>
        <div className='sbb__footer-left'>
            <p>
                Förrådsvägen 13, 901 32 Umeå
                <br/>
                090-765 70 33
                <br/>
                brooklynumea.info@gmail.com
            </p>
            <img className='sbb__footer-img' src={require("../../assets/BrooklynBurgers.png")}/>
        </div>
        <small>Hemsidan utvecklad i samarbete med A. Ramezani</small> 
        <br/>
        <small>&copy; Copyright 2022, Brooklyn Homemade Burgers</small> 
    </div>
  )
}

export default Footer