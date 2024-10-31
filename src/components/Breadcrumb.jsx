{/* ChatGPT generated*/} 

import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/images/Breadcrumb/bx-home-alt.svg'


const Breadcrumb = () => {
  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">
        <img src={HomeIcon}/>
        <span id ="home">Homepage</span>
      </Link>
      <span className="breadcrumb-separator">»</span>
      <Link to="/contact" className="breadcrumb-item breadcrumb-active">
        Contact
      </Link>
    </nav>
  );
};

export default Breadcrumb;

