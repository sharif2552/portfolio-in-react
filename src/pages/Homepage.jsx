import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Projects';

import Education from '../components/EducationSkills';
// ... other imports
import './Homepage.css'
const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      {/* ... other sections */}

      <div id="education">
        <Education />
      </div>
    </>
  );
}

export default HomePage;
