import React from 'react';
import { Link } from 'react-scroll';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className='brand'>Sharif</h2>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
            Services
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="experience" spy={true} smooth={true} offset={-70} duration={500}>
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
            Education
          </Link>
        </li>


      </ul>
    </nav>
  );
};

export default Navbar;
