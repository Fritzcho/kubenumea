import React from 'react'
import './map.css';

const Map = () => {
  return (
    <div className='sbb__map' id='map'>
        <h1 className='sbb__map-heading'>
            Hitta till oss!
        </h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1758.9733063853628!2d20.23622547403796!3d63.840882591688384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467c5b66613016e9%3A0x9ba75dba31a2e674!2zRsO2cnLDpWRzdsOkZ2VuIDEzLCA5MDEgMzIgVW1lw6U!5e0!3m2!1ssv!2sse!4v1657537382958!5m2!1ssv!2sse"
         height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='sbb__map-map'></iframe>
    </div>
  )
}

export default Map