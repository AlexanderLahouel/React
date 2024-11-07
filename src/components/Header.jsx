import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import User from '../assets/images/Header/user.svg';
import Menu from '../assets/images/Header/menu.svg';
import LogoType from '../assets/images/Header/logo.svg';
import LogoTypeDark from '../assets/images/Header/logo-dark.svg';
import DarkModeToggle from './DarkMode';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  useEffect(() => {
    const header = document.querySelector('header');
    if (location.pathname === '/contact') {
      header.classList.add('header-contact');
    } else {
      header.classList.remove('header-contact');
    }
  }, [location]);

  return (
    <header>
      <div className="container">
        <a href="/">
          <img className="show-light" src={LogoType} alt="Silicon Logotype" />
          <img className="show-dark" src={LogoTypeDark} alt="Silicon Logotype" />
        </a>

        <nav id="main-menu" className="navbar">
          <a id="features" href="#">Features</a>
          <NavLink id="contactnav" to="/contact">Contact</NavLink>
        </nav>

        <DarkModeToggle />

        <a id="auth-signin" href="#" className="btn-primary">
          <img src={User} />
          <span>Sign in/up</span>
        </a>
        <button className="btn-mobile">
          <a href="index.html">
            <img src={Menu} alt="menu button" />
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;

