import React from 'react'
import "./Aboutme.css"

const Aboutme = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id='about' className='aboutme-full'>
      <div className="about-box">
        <h1 className='about-heading'>About me</h1>
        <p className='about-txt'>Hello! I'm Ramish, a full-stack web developer passionate about crafting immersive digital experiences. With a background in Computer Science and over five years of experience, I specialize in building dynamic web applications that captivate audiences.</p>
        <p className='about-txt'>My journey in web development began during college, sparking a love for coding and problem-solving. Since then, I've collaborated with a diverse range of clients, delivering innovative web solutions. I'm driven by the challenge of blending creativity with technology and staying ahead of industry trends.</p>
        <button onClick={() => scrollToSection('projects', event)} className='about-btn'>See Work</button>
      </div>
    </section>
  )
}

export default Aboutme
