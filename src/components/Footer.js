import React from 'react'
import linkedin from '../images/linkedin.png';
import whatsapp from '../images/whatsapp.png';
import telegram from '../images/telegrama.png';
import gmail from '../images/gmail.png';
import '../styles/Footer.css'

export const Footer = () => {
  return (
    <>
        <div className='container-foot'>
          <h2><b>Medios De Contacto</b></h2>
          <div className='social-network-icons'>
            <a href='https://www.linkedin.com/in/julian-jaimes-361846186/'><img src={linkedin} alt='LinkedIn Icon' /></a>
            <a href='https://web.whatsapp.com'><img src={whatsapp} alt='WhatsApp Icon' /></a>
            <a href='https://web.telegram.org/z/'><img src={telegram} alt='Telegram Icon' /></a>
            <a href='  '><img src={gmail} alt='Gmail Icon' /></a>
            <p>Julian Jaimes &#169;</p>
          </div>
        </div>
    </>
  );
}
