import React from 'react'
import "./Hero.css"

const Hero = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id='hero' className='herosection'>
      <div className='left-sec'>
        <div className="hero-img">
        <img className='person-img' src="/src/assets/minewbg.png" alt="" />
        </div>
      </div>
      <div className='right-sec'>
        <div className="hero-content">
            <h1 className='heroh1'>Ramish Bin Siddique</h1>
            <h2 className='heroh2'>Full-Stack Web Developer</h2>
            <p className='herop'>Step into the world of innovation and creativity, where every line of code tells a story. I'm Ramish, a passionate full-stack web developer on a mission to build intuitive, high-performance websites that exceed expectations.</p>
            <button onClick={() => scrollToSection('contact', event)} className='herobtn'>Contact</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
