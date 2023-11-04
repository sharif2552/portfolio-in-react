import React from 'react';
import './about.css';
import logo from '../../images/logo512.png'
const About = () => {
  return (
    <section className="about">
      <div className='photo'>
        <img className='profileimage' src={logo} alt="not loaded" />
      </div>
      <div className='text'>
        <h2>About Me</h2>
        <p>Learn more about our company and our values.</p>
      </div>

    </section>
  );
};

export default About;
