import React from 'react';
import './hero.css';
import logoImage from './logo512.png'; // Import the image and assign it to a variable

const Hero = () => {
  return (
    <div className="hero">
      <div className='text'>
        <h1>Web Developer</h1>
        <h2>Sharif Hossain</h2>
        <p>I am a passionate web developer with a deep interest in building engaging and intuitive user experiences. My journey into web development began with a curiosity for how websites work and a desire to create digital spaces that are both beautiful and functional. 
       </p>

      </div>
      
      <div className='photo'>
        <img className='image' src={logoImage} alt="Profile" />

      </div>

    </div>
  );
};

export default Hero;
