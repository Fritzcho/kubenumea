import React from 'react'
import './hero.css'
import Arrow from '../../assets/Arrow.svg';

const Hero = () => {
  return (
    <div className='sbb__hero'>
        <div class="sbb__hero-text-h1">
          Välkommen till Brooklyn Burgers i Umeå!
        </div>
        <div class="sbb__hero-text-h2">
          Du hittar oss på Västerslätt, där vi levererar smash-burgare på högrev av högsta grad.
        </div>
        <div className='sbb__hero-arrow-container'>
          <div className='sbb__hero-arrow'>
            <a href='#Menu'><img src={Arrow} width="100px"/></a>
            <p>Se vår meny!</p>
          </div>
        </div>
    </div>
  )
}

export default Hero