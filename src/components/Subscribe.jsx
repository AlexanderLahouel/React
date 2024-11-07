import React from 'react'
import Bell from '../assets/images/Subscribe/notification.svg'
import SubscribeForm from './SubscribeForm'

const Subscribe = () => {
  return (
    <section id="subscribe">
    <div className="container">
        <div className="subscribe-container">
            
                <div className="subscribe-header">
                    <img src={Bell} alt="Bell"/>
                    <h2 id="mobile2">Subscribe to our<br/> newsletter </h2>
                    <h2 id="desktop2">Subscribe to our newsletter to stay informed about latest updates</h2>
                </div>
             <SubscribeForm/>
            
        </div>
    </div>
</section>
  )
}

export default Subscribe