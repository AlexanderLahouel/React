import React, { useEffect, useState } from 'react';
import Chevron from '../assets/images/Faq/chevron.svg'
const Accordion = () => {
  const [faqData, setFaqData] = useState ([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    { question: 'Is any of my personal information stored in the App?', answer: 'Your personal information is stored securely in the app and is accessible only to you.' },
    { question: 'What formats can I download my transaction history in?', answer: 'You can download your transaction history in PDF, CSV, and Excel formats.' },
    { question: 'Can I schedule future transfers?', answer: 'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.' },
    { question: 'When can I use Banking App services?', answer: 'Banking App services are available 24/7 for your convenience.' },
    { question: 'Can I create my own password that is easy for me to remember?', answer: 'Yes, you can create a password that meets our security requirements.' },
    { question: 'What happens if I forget or lose my password?', answer: 'If you forget your password, you can easily reset it through the app.' }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            <span>{item.question}</span>
            <span
              className={`faq-arrow ${activeIndex === index ? 'active' : ''}`}
            >
              <button className='btn-round'> 
              <img id='chevron' src={Chevron} alt="Chevron" />

              </button>
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
