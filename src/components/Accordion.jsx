import React, { useEffect, useState } from 'react';
import Chevron from '../assets/images/Faq/chevron.svg';

const Accordion = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqData = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await response.json();
        setFaqData(data.items || data); 
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    
    fetchFaqData();
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {faqData.length === 0 ? (
        <p>Loading FAQs...</p>
      ) : (
        faqData.map((item, index) => (
          <div key={item.id} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.title}</span> 
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
                {item.content} 
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
  // Chatgpt hjälpte det mesta här//
};  

export default Accordion;
