import React, { useEffect, useState } from 'react'
import Quotes from '../assets/images/Reviews/quotes.svg'
import Rating1 from '../assets/images/Reviews/rating1.svg'
import Fannie from '../assets/images/Reviews/Fannie.svg'
import FannieDark from '../assets/images/Reviews/Fannie-darkmode.svg'
import Rating2 from '../assets/images/Reviews/rating2.svg'
import Albert from '../assets/images/Reviews/albert.svg'
import AlbertDark from '../assets/images/Reviews/albert-darkmode.svg'


const Reviews = () => {
    const [testimonials, setTestimonials] = useState([]);
  
    useEffect(() => {
        fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Check data in the console
            setTestimonials(data);
          })
          .catch((error) => console.error('Error fetching testimonials:', error));
      }, []);
  
      return (
        <section className="reviews">
          <div className="container">
            <div className="review-grid">
              <h2>Clients are<br /> Loving Our App</h2>
    
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id || index} className="review-box">
                  <img id="quotes" src={Quotes} alt="quotes" />
                  <div className="rating">
                     {[...Array(5)].map((_, index) => (
                        <span
                         key={index}
                        className={index < testimonial.starRating ? 'star filled' : 'star outlined'}
                     >
                             ★
                        </span>
                 ))}
            </div>
                  <p>{testimonial.comment}</p>
                  <div className="reviewer-info">
                    <img
                      className="show-light"
                      id="person"
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author}
                    />
                    <img
                      className="show-dark"
                      id="person"
                      src={testimonial.avatarUrl} 
                      alt={testimonial.author}
                    />
                    <div className='reviewer-details'>
                      <strong className='reviewer-name'>{testimonial.author}</strong>
                      <p className='reviewer-role'>{testimonial.jobRole}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    };
    
    export default Reviews;