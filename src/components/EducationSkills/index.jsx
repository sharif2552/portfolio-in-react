import React from 'react';
import './educationskills.css'; // Assuming you're using the same CSS file for Education and Skills

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {/* Example education entry */}
          <div className="education-item">
            <h3>Master of Science in Computer Science</h3>
            <h4>University Name, Year</h4>
            <p>Thesis topic or other relevant information</p>
          </div>
          
          {/* Repeat for other education entries */}
          <div className="education-item">
            <h3>Bachelor of Science in Software Engineering</h3>
            <h4>University Name, Year</h4>
            <p>Relevant coursework or achievements</p>
          </div>

          {/* Add more education items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Education;
