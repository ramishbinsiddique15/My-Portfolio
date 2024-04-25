import React from 'react'
import "./Header.css"
import { useState,useEffect } from 'react'

const Header = () => {
    const [showitems, setshowitems] = useState(false);
    const toggleitems = () => {
        setshowitems(!showitems);
    }
    const scrollToSection = (id, event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const handleDocumentClick = (event) => {
        if (event.target.id !== 'div' && event.target.id !== 'img') {
            setshowitems(false); 
        }
      };
      document.addEventListener('click', handleDocumentClick);
    return (
        <>
            <nav className='navbar'>
                <div onClick={() => scrollToSection('hero', event)} className='logo'>Portfolio</div>
                <div className='nav-items'>
                    <ul className='UL'>
                        <li onClick={() => scrollToSection('about', event)} className="list-items">About me</li>
                        <li onClick={() => scrollToSection('services', event)} className="list-items">Services</li>
                        <li onClick={() => scrollToSection('skills', event)} className="list-items">Skills</li>
                        <li onClick={() => scrollToSection('projects', event)} className="list-items">Projects</li>
                        <li onClick={() => scrollToSection('testimonials', event)} className="list-items">Testimonials</li>
                        <img id='img' onClick={toggleitems} className='menu-img' src="/src/assets/menu.png" alt="" />
                    </ul>
                </div>
            </nav>
            <div id='div' className={showitems ? "show-list" : "hide-lists"}>
                <li onClick={() => scrollToSection('about', event)} className={showitems ? 'show-lis' : 'lis'}><a href="about">About me</a></li>
                <li onClick={() => scrollToSection('services', event)} className={showitems ? 'show-lis' : 'lis'}><a href="services">Services</a></li>
                <li onClick={() => scrollToSection('skills', event)} className={showitems ? 'show-lis' : 'lis'}><a href="skills">Skills</a></li>
                <li onClick={() => scrollToSection('projects', event)} className={showitems ? 'show-lis' : 'lis'}><a href="projects">Projects</a></li>
                <li onClick={() => scrollToSection('testimonials', event)} className={showitems ? 'show-lis' : 'lis'}><a href="testimonials">Testimonials</a></li>
                <li onClick={() => scrollToSection('contact', event)} className={showitems ? 'show-lis' : 'lis'}><a href="contact">Contact</a></li>
            </div>
        </>
    )
}

export default Header
