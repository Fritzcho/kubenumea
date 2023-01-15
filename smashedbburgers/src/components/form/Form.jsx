import React from 'react'
import './form.css'

const Form = () => {
  return (
    <div className='sbb__form'>
        <div className='sbb__form-text' id="form">
            <h1>Kontakta oss</h1>
            <p>Frågor och funderingar? Kontakta oss så återkommer vi så snabbt vi kan!</p>
        </div>
        <form id="contact-form" className='sbb__form-form'>
            <input type="text" placeholder='din epost*'/>
            <textarea rows="4" name="comment" form="contact-form" placeholder='meddelande*'></textarea>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form