import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

// Import the logo image
import logo from './assets/cloudy.png'; // Update the path according to your directory structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>
         
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Header;
