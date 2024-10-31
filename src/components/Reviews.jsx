import React from 'react'
import Quotes from '../assets/images/Reviews/quotes.svg'
import Rating1 from '../assets/images/Reviews/rating1.svg'
import Fannie from '../assets/images/Reviews/Fannie.svg'
import FannieDark from '../assets/images/Reviews/Fannie-darkmode.svg'
import Rating2 from '../assets/images/Reviews/rating2.svg'
import Albert from '../assets/images/Reviews/albert.svg'
import AlbertDark from '../assets/images/Reviews/albert-darkmode.svg'


const Reviews = () => {
  return (
    <section className="reviews">
            <div className="container">
              

                <div className="review-grid">
                    <h2>Clients are<br/> Loving Our App</h2>
                    <div id="box-1" className="review-box">
                        <img id="quotes" src={Quotes} alt="quotes"/>
                        <img id="stars" src={Rating1} alt="4 star rating"/>
                        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <img className="show-light" id="person" src={Fannie} alt="Fannie"/>
                        <img className="show-dark" id="person" src={FannieDark} alt="Fannie"/>
                    </div>
                    <div id="box-2" className="review-box">
                        <img id="quotes" src={Quotes} alt="quotes"/>
                        <img id="stars" src={Rating2} alt="5 star rating"/>
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                        <img className="show-light" id="person" src={Albert} alt="Albert"/>
                        <img className="show-dark" id="person" src={AlbertDark} alt="Albert"/>
                    </div>
                </div>
            </div>
        </section>
        
  )
}

export default Reviews