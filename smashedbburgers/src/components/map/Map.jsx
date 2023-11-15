import React from 'react'
import './map.css';

const Map = () => {
  return (
    <div className='sbb__map' id='map'>
        <h1 className='sbb__map-heading'>
            HITTA TILL OSS
        </h1>
        <div className='sbb__map-flex'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.216827879291!2d20.306833758401158!3d63.84951627799647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b2f0b17a721%3A0xc9dda15064a11da1!2zRm9ybXbDpGdlbiA4QywgOTA2IDIxIFVtZcOl!5e0!3m2!1ssv!2sse!4v1675007592965!5m2!1ssv!2sse"
            height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='sbb__map-map'>
            </iframe>
            <div className='sbb__map-info'>
                <h1>ÖPPETTIDER:</h1>
                <p>
                    Måndag till Fredag 10:30-19:00
                    <br/><br/>
                    Lördagar 12:00-19:00
                </p>
            </div>
         </div>
    </div>
  )
}

export default Map