import React from 'react'
import "./Projects.css"

const Projects = () => {
    return (
        <section id='projects' className='projects-full'>
            <div className="projects-box">
                <h1 className="projects-head">Projects</h1>
                <p className="projects-txt">Explore a diverse range of dynamic projects demonstrating expertise in web development.</p>
                <div className="projects">
                    <div className="project project1">
                        <div className="project-det">
                            <h1 className="project-heading">Spotify Clone</h1>
                            <p className="project-text">A user-friendly e-commerce website for browsing products, adding them to cart, making purchases, and managing accounts.</p>
                           <a href="https://github.com/ramishbinsiddique15/Spotify-Clone" target='_blank'> <button className="project-btn">View</button></a>
                        </div>
                    </div>
                    <div className="project project2">
                        <div className="project-det">
                            <h1 className="project-heading">Weather App</h1>
                            <p className="project-text">A social media platform where users can create profiles, connect with friends, share posts, photos, and engage in discussions.</p>
                            <a href="https://github.com/ramishbinsiddique15/PRODIGY_WD_05" target='_blank'><button className="project-btn">View</button>
                            </a>
                        </div>
                    </div>
                    <div className="project project3">
                        <div className="project-det">
                            <h1 className="project-heading">Task Management App</h1>
                            <p className="project-text">A task management application for organizing and tracking tasks, projects, and deadlines.</p>
                            <button className="project-btn">View</button>
                        </div>
                    </div>
                </div>
                    <button className='projects-btn'>See all</button>
            </div>
        </section>
    )
}

export default Projects
