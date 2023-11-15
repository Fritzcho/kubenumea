import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='sbb__about'>
        <img className='sbb__about-img' src={require('../../assets/about.png')}/>
        <div className='sbb__about-text'>
            <h1 className='sbb__about-header'>
                Keep calm and take another bite
            </h1>
            <p className='sbb__about-paragraph'>
                Vi erbjuder en smakrik upplevelse som ger dig lugn i den stressamma vardagen. 
            </p>
            <a style={{textDecoration:"none"}} href='https://kuben.yabie.online'><button className='sbb__about-button'>BESTÄLL HÄR</button></a>
        </div>
    </div>
  )
}

export default About