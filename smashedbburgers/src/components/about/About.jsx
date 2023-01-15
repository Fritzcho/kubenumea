import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='sbb__about'>
        <img className='sbb__about-img' src={require('../../assets/about.png')}/>
        <div className='sbb__about-text'>
            <h1 className='sbb__about-header'>
                Vi gör saker annorlunda
            </h1>
            <p className='sbb__about-paragraph'>
                Olikt vissa andra restauranger är  vår mat inte samma varor som du hittar i din närmsta frysdisk, den är vår egen och unik
            </p>
            <button className='sbb__about-button'>BESTÄLL HÄR</button>
        </div>
    </div>
  )
}

export default About