import React from 'react';
import { Link } from 'react-router-dom';
import NavbarIcon from '../img/navbar-icon.svg';
import GitHubIcon from '../img/github-icon.png';

const Navbar = () => {
  const openNavbar = () => {
    const element = document.getElementById('navbar-content');
    element.style.width = '17vw';
    element.style.padding = '10px 10px 10px 10px';
  };

  const closeNavbar = () => {
    const element = document.getElementById('navbar-content');
    element.style.width = '0';
    element.style.padding = '0';
  };

  return (
    <div className="navbar-container">
      <div className="open-navbar" onMouseEnter={openNavbar}>
        <img className="navbar-icon" src={NavbarIcon} alt="nav" />
      </div>
      <div className="navbar-content" id="navbar-content" onMouseLeave={closeNavbar}>
        <div className="navbar-link">
          <Link to="/circles" className="link">
            Circles
          </Link>
        </div>
        <hr></hr>
        <div className="navbar-link">
          <Link to="/memory" className="link">
            Memory Game
          </Link>
        </div>
        <div className="navbar-link bottom">
          <a href="https://www.github.com/tjayling" className="link">
            <img src={GitHubIcon} className="github-link" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
