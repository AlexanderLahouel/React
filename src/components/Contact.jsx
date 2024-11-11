import React from 'react'
import Arrow from '../assets/images/Contact/arrow.svg'
import Email from '../assets/images/Contact/email-us.svg'
import ContactUs from '../assets/images/Contact/contact-us.svg'


const Contact = () => {
  return (
    <section id="contact">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="contact-grid">
                    <div className="contact-items">

                        <div className="contact-item">
                            <div className="icon-container">
                                <div className="btn-circle2"><img src={Email}/></div>
                            </div>
                            <div className="info">
                                <h3>Email us</h3>
                                <p>Please feel free to drop us a line. We will<br/> respond as soon as possible.</p>
                                <div className="message">
                                    <a href="#">Leave a message</a>
                                    <img src={Arrow} alt="Arrow pointing right"/>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="icon-container">
                                <div className="btn-circle2"><img src={ContactUs}/></div>
                            </div>
                            <div className="info">
                                <h3>Careers</h3>
                                <p>Sit ac ipsum leo lorem magna nunc mattis<br/> maecenas non vestibulum.</p>
                                <div className="message">
                                    <a href="#">Send an application</a>
                                    <img src={Arrow} alt="Arrow pointing right"/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="consultation-form">
                        <h2>Get Online Consultation</h2>
                        <form>
                            <div className="form-group">
                                <label for="name">Full name</label>
                                <input type="text" id="name" name="name"/>
                            </div>
                            
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" id="email" name="email"/>
                            </div>
                            
                            <div className="form-group">
                                <label for="specialist">Specialist</label>
                                <select id="specialist" name="specialist">
                                    <option value=""></option>
                                    <option value="specialist1">Specialist 1</option>
                                    <option value="specialist2">Specialist 2</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">Make an appointment</button>
                        </form>
                </div>
            </div>
                
            </div>
        </section>
  )
}

export default Contact