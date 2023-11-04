import React from 'react';
import './hero.css';
import logoImage from './logo512.png'; // Import the image and assign it to a variable

const Hero = () => {
  return (
    <section className="hero">
      <div className='text'>
      <h1>Web Developer</h1>
      <h2>Sharif Hossain</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
.</p>

      </div>
      
      <div className='photo'>
      <img className='image' src={logoImage} alt="Profile" />

      </div>

    </section>
  );
};

export default Hero;
