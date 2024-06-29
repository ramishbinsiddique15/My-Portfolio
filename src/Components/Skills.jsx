import React from 'react'
import "./Skills.css"

const Skills = () => {
    const skills = [
        {
            id: 1,
            skill: "React.js",
            skillimg: `/assets/react.ico`,
            skilltext: `Empowers applications with lightning-fast, interactive user interfaces that engage and retain users, leading to increased engagement and satisfaction.`,
        },
        {
            id: 2,
            skill: "Tailwind CSS",
            skillimg: `/assets/tailwind.png`,
            skilltext: `Streamlines the design process with a consistent visual language, resulting in aesthetically pleasing and highly usable interfaces that captivate audiences.`,
        },
        {
            id: 3,
            skill: "Express.js",
            skillimg: `/assets/express.png`,
            skilltext: `Enhances the performance and scalability of backend systems, ensuring smooth operation even under heavy loads, and delivering a seamless user experience.`,
        },
        {
            id: 4,
            skill: "MongoDB",
            skillimg: `/assets/mongodb.png`,
            skilltext: `Provides flexibility and agility in managing data, allowing for rapid iteration and adaptation to changing requirements, while ensuring scalability and resilience to support growth.`,
        },
        {
            id: 5,
            skill: "Next.js",
            skillimg: `/assets/nextjs.ico`,
            skilltext: `Boosts website performance and search engine visibility by leveraging server-side rendering and optimized client-side navigation, resulting in improved load times, SEO rankings, and user engagement.`,
        },
    ]
    return (
        <section id='skills' className='skills-full'>
            <div className="skill-box">
                <h1 className='skills-head'>Skills</h1>
                <p className='skills-para'>As an experienced full-stack developer, I offer a deep understanding of technologies that drive tangible value to projects.</p>
                <div className="skills">
                    {skills.map((obj)=>{
                        return(
                            <div key={obj.id} className="skill">
                            <div className="heading">
                                <h1 className="skill-heading">{obj.skill}</h1>
                                <img className='skill-img' src={obj.skillimg} alt="" />
                            </div>
                            <div className="skill-txt">{obj.skilltext}</div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Skills