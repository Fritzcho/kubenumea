import React from 'react'
import './map.css';

const Map = () => {
  return (
    <div className='sbb__map' id='map'>
        <h1 className='sbb__map-heading'>
            HITTA TILL OSS
        </h1>
        <div className='sbb__map-flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.6021425311299!2d20.307800388185566!3d63.84991759896129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b2f092149a9%3A0x9ed74ea423f0fe9e!2zRm9ybXbDpGdlbiA4QiwgOTA2IDIxIFVtZcOl!5e0!3m2!1ssv!2sse!4v1673655337650!5m2!1ssv!2sse"
            height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='sbb__map-map'>
            </iframe>
            <div className='sbb__map-info'>
                <h1>ÖPPETTIDER:</h1>
                <p>Måndag till Söndag 10-19</p>
            </div>
         </div>
    </div>
  )
}

export default Map