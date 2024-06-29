import React, { useState } from 'react';
import "./Projects.css";

const Projects = () => {
  const [see, setSee] = useState(false);

  const toggleSee = () => {
    setSee(!see);
  };

  const projectsData = [
    {
      id: 1,
      heading: 'Spotify Clone',
      text: 'A user-friendly e-commerce website for browsing products, adding them to cart, making purchases, and managing accounts.',
      link: 'https://github.com/ramishbinsiddique15/Spotify-Clone'
    },
    {
      id: 2,
      heading: 'Weather App',
      text: 'A social media platform where users can create profiles, connect with friends, share posts, photos, and engage in discussions.',
      link: 'https://github.com/ramishbinsiddique15/PRODIGY_WD_05'
    },
    {
      id: 3,
      heading: 'Text Utils',
      text: 'A text utility web app that provides to perform basic text-based functions with just one click.',
      link: 'https://github.com/ramishbinsiddique15/Text-Utils'
    },
    {
      id: 4,
      heading: 'PassBank',
      text: 'Your own password manager.',
      link: 'https://github.com/ramishbinsiddique15/PassBank'
    },
    // Add more projects here if needed
  ];

  return (
    <section id='projects' className='projects-full'>
      <div className="projects-box">
        <h1 className="projects-head">Projects</h1>
        <p className="projects-txt">Explore a diverse range of dynamic projects demonstrating expertise in web development.</p>
        <div className="projects">
          {projectsData.slice(0, see ? projectsData.length : 3).map(project => (
            <div className={`project project${project.id}`} key={project.id}>
              <div className="project-det">
                <h1 className="project-heading">{project.heading}</h1>
                <p className="project-text">{project.text}</p>
                {project.link ? (
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <button className="project-btn">View</button>
                  </a>
                ) : (
                  <button className="project-btn">View</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className='projects-btn' onClick={toggleSee}>
          {see ? 'See Less' : 'See All'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
