import React from 'react'
import AppStore from '../assets/images/Hero/appstore-light.svg'
import AppStoreDark from '../assets/images/Hero/appstore-dark.svg'
import GooglePlay from '../assets/images/Hero/googleplay-light.svg'
import GooglePlayDark from '../assets/images/Hero/googleplay-dark.svg'
import IphoneBack from '../assets/images/Hero/iphone-mybudget.svg'
import IphoneFront from '../assets/images/Hero/iphone-yourcards.svg'

const Hero = () => {
  return (
    <section id="hero">
            <div id="mainpage" className="container">
                
                <div className= "headline">
                    <h1>Manage All Your Money in One App </h1>
                </div>
                <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                <div className = "buttons">
                    <a className="btn-download-app" href ="#">
                    <img className="show-light" src ={AppStore} alt="appstore"/> 
                    <img className="show-dark" src = {AppStoreDark} alt="appstore"/> 

                    </a>
                    
                    <a className="btn-download-app" href="#">
                        <img className="show-light" src ={GooglePlay} alt="google play"/> 
                        <img className="show-dark" src ={GooglePlayDark} alt="google play"/>
                    </a>
                    
                 </div>
                 <a href="#" className="discover-more">
                    <span className="btn-circle">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span>Discover more</span>

                 </a>
            
                 </div>
                <div className="images">
                    <img className="img-back" src={IphoneBack} alt="iphone-mybudget"/>
                    <img className="img-front" src={IphoneFront} alt="iphone-yourcards"/>
                </div>
            </div>   

                 
        </section>
  )
}

export default Hero