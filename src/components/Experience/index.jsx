import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="experience-title">Experience</h2>
        <div className="experience-list">
          {/* Example experience entry */}
          <div className="experience-item">
            <h3>Job Title #1</h3>
            <h4>Company Name</h4>
            <p className="experience-dates">January 2020 - Present</p>
            <ul className="experience-details">
              <li>Detail about your responsibilities and achievements.</li>
              <li>Another important task or milestone achieved.</li>
              {/* Add more list items as needed */}
            </ul>
          </div>
          
          {/* Repeat for other experiences */}
          <div className="experience-item">
            <h3>Job Title #2</h3>
            <h4>Company Name</h4>
            <p className="experience-dates">Month Year - Month Year</p>
            <ul className="experience-details">
              <li>Detail about the role and responsibilities.</li>
              <li>Key achievements or projects completed.</li>
              {/* Add more list items as needed */}
            </ul>
          </div>

          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
