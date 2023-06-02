import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'> 
            <b></b>
            The frontend of the application would be built using React, a JavaScript library and HTML CSS BootStrap and  API  for building user interfaces.  It would allow for dynamic updates and  a central hub or community for book lovers to connect, share, and discover new books</p>
            <p className='fs-17'>You're in the right place. Tell us what titles or genres you've enjoyed in the past, and we'll give you surprisingly insightful recommendations</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
