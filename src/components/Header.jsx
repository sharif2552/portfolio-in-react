import React from 'react';
import '../styles.css'; // Assuming styles.css contains your CSS

const Header = () => {
  return (
    <header className="header">
      <img src=".../publicg" alt="Portfolio Logo" className="logo" />
      <nav className="navigation">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
