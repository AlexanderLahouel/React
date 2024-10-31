import React from 'react'
import FaqHeader from './FaqHeader'
import ContactCard from './ContactCard'
import Accordion from './Accordion'
import ContactBtn from './ContactBtn'

const Faq = () => {
  return (
    <div className='container2'>
        <div className='faq-left'>
            <FaqHeader/>
            <ContactCard/>
        </div>

        <div className='faq-right'>
            <Accordion/>
            <ContactBtn/>
        </div>
    </div>
  )
}

export default Faq