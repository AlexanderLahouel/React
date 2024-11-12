import React from 'react'
import Map from '../assets/images/Medic/map.svg'
import Pin from '../assets/images/Medic/pin.svg'
import Call from '../assets/images/Medic/bx-phone-call.svg'
import Clock from '../assets/images/Medic/bx-time-five.svg'
import Fb from '../assets/images/Medic/bxl-facebook-square.svg'
import Tw from '../assets/images/Medic/bxl-twitter.svg'
import Ig from '../assets/images/Medic/bxl-instagram-alt.svg'
import Ytb from '../assets/images/Medic/youtube.svg'

const Medic = () => {
  return (
    <section id="medic">

    <div className="map">
        <img src={Map} alt="Map"/>
    </div>
        <div className="locations">
            <div className="location-item">
                 <h2>Medical Center 1</h2>
                <p><img src={Pin} alt="Pin"/>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p><img src={Call} alt="Call"/>(406) 555-0120</p>
                <p><img src={Clock} alt="Clock"/><strong>Mon - Fri:</strong> 9:00 am – 22:00 pm</p>
                <p id="saturday"><strong>Sat - Sun:</strong> 9:00 am – 20:00 pm</p>
        </div>
         <div className="location-item">
            <h2>Medical Center 2</h2>
                <p><img src={Pin} alt="Pin"/>2464 Royal Ln. Mesa,New Jersey 45463</p>
                <p><img src={Call} alt="Call"/>(406) 544-0123</p>
                <p><img src={Clock} alt="Clock"/><strong>Mon - Fri:</strong> 9:00 am – 22:00 pm</p>
                <p id="saturday"><strong>Sat - Sun:</strong> 9:00 am – 20:00 pm</p>
            </div>
        <div className="socials">
                <a className="icon" href="#"><img src={Fb} alt="Facebook logo"/></a>
                <a className="icon" href="#"><img src={Tw} alt="Twitter logo"/></a>
                <a className="icon" href="#"><img src={Ig} alt="Instagram logo"/></a>
                <a className="icon" href="#"><img src={Ytb} alt="Youtube logo"/></a>
    </div>
        </div>

</section>

  )
}

export default Medic