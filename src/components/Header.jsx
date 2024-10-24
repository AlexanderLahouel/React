import React from 'react'
import User from '../assets/images/Header/user.svg'
import Menu from '../assets/images/Header/menu.svg'
import LogoType from '../assets/images/Header/logo.svg'
import LogoTypeDark from '../assets/images/Header/logo-dark.svg'

const Header = () => {
  return (
    <header>
            <div className="container">
    
                <a href="/">
                    <img className="show-light" src={LogoType} alt="Silicon Logotype"/> 
                    <img className="show-dark" src={LogoTypeDark} alt="Silicon Logotype"/> 
                </a>
    
                <nav id="main-menu" className="navbar">
                    <a id="features" href="#">Features</a>
                    <a id="contactnav" href="#">Contact</a>
                </nav>
                <div id="darkmode-toggle-switch" className="btn-toggle-switch">
                    <span className="label">Dark mode</span>
                    <label for="darkmode-switch" className="toggle-switch">
                        <input type="checkbox" id="darkmode-switch"/>
                        <span className="slider round"></span>
                    </label>
                </div>
                <a id="auth-signin" href="#" className="btn-primary">
                    <img src={User}/>
                    <span>Sign in/up</span>
    
                    
                </a>
                <button className="btn-mobile">
                    <a href="index.html"><img src={Menu} alt="menu button"/>
                    </a>            
                </button>
    
            </div>
        </header>
  )
}

export default Header