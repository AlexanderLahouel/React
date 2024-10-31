import React from 'react'
import Call from '../assets/images/Faq/call.svg'
import ArrowRight from '../assets/images/Faq/right-arrow.svg'
import Message from '../assets/images/Faq/message.svg'
import ArrowGreen from '../assets/images/Faq/right-arrow-green.svg'

const ContactCard = () => {
  return (
    <div className="contact-options">
    <div className="contact-card">
        <img className="faq-icon" src={Call} alt="Call icon"/>
        <h5>Still have questions?</h5>
        <a href="#">Contact us </a>
        <img id="right-arrow" src={ArrowRight} alt="rightarrow"/>
    </div>
    <div className="contact-card">
        <img className="faq-icon" src={Message} alt="Message icon"/>
        <h5>Don't like phone calls?</h5>
        <a id="green" href="#">Contact us </a>
        <img id="right-arrow" src={ArrowGreen} alt="rightarrow"/>
    </div>
    </div>
  )
}

export default ContactCard