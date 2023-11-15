import {React, useState} from 'react'
import './form.css'
import {send} from 'emailjs-com'

function Form() {
    const [toSend, setToSend] = useState({
        from_mail: '',
        message: '',
    });

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };
    
    const onSubmit = (e) => {
        alert("Tack för ditt meddelande. Vi återkopplar så snart vi kan!");
        e.preventDefault();
        send(
          'service_0uzd47k',
          'template_syvcbjk',
          toSend,
          'nzG3124MktubstWdF'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
    
  return (
    <div className='sbb__form'>
        <div className='sbb__form-text' id="form">
            <h1>Kontakta oss</h1>
            <p>Frågor och funderingar? Kontakta oss så återkommer vi så snabbt vi kan!</p>
        </div>
        <form id="contact-form" className='sbb__form-form' onSubmit={onSubmit}>
            <input type="text" placeholder='din epost*' name='from_mail' value={toSend.from_mail} onChange={handleChange}/>
            <textarea type="text" rows="4" name="message" form="contact-form" placeholder='meddelande*' 
                value={toSend.message}
                onChange={handleChange}>
            </textarea>
            <input type="submit" value="Skicka"/>
        </form>
    </div>
  )
}

export default Form