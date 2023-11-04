import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Education from '../components/EducationSkills';
// ... other imports

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
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
    </>
  );
}

export default HomePage;
