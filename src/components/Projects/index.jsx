import React from 'react';
import './projects.css';
import project1 from './project1.jpg'
import project2 from './project2.jpg'

const Services = () => {
  return (
    <section className="projects">
<div className='project1'>


<a href="https://sharif2552.pythonanywhere.com/">
<img className='img1' src={project1} alt="img1" />
<h2 className='name1'>Education Website</h2>
  </a>
</div>
<div className='project2'>
  <a href="https://ecommerce159951.pythonanywhere.com/">
    <img className='img2' src={project2} alt="img2" />
<h2 className='name2'>Ecommerce Website</h2>
  </a>

</div>
    </section>
  );
};

export default Services;
