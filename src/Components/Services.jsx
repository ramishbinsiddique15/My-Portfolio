import React from 'react'
import "./Services.css"

const Services = () => {
    const scrollToSection = (id, event) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const service = [
        {
            id: 1,
            image: '/assets/custom.png',
            heading: 'Custom Web Development',
            text: `Crafting bespoke web solutions tailored to your unique business needs. From conceptualization to deployment, we'll work closely with you to create a custom web application that drives results and enhances your online presence.`
        },
        {
            id: 2,
            image: '/assets/responsive.png',
            heading: 'Responsive Web Design',
            text: `Ensuring your website looks and performs flawlessly across all devices and screen sizes. Our responsive design approach guarantees an optimal viewing experience for every visitor, maximizing engagement and conversions.`
        },
        {
            id: 3,
            image: '/assets/ecommerce.png',
            heading: 'E-commerce Solutions',
            text: `Creating seamless e-commerce experiences that maximize sales and enhance customer satisfaction. Whether you need a custom online store, payment gateway integration, or inventory management system, we'll deliver a robust e-commerce solution that scales with your business.`
        },
        {
            id: 4,
            image: '/assets/uiux.png',
            heading: 'UI/UX Design',
            text: `Crafting intuitive and visually appealing user interfaces (UI) while enhancing the overall user experience (UX) of your website or web application. We'll focus on creating designs that engage users, improve usability, and drive conversions.`
        },
        {
            id: 5,
            image: '/assets/handshake.png',
            heading: 'Consulting and Support',
            text: `Providing expert guidance and support throughout every stage of your web development journey. From initial strategy sessions to ongoing maintenance and updates, we're here to ensure your success and satisfaction.`
        },
    ]
    return (
        <section id='services' className='services-full'>
            <div className="service-box">
                <h1 className='Services-head'>Services</h1>
                <p className='services-para'>Discover our comprehensive range of services below, tailored to meet your unique needs and goals.</p>
                <div className="services">
                {service.map((obj)=>{
                return(
                     <div key={obj.id} className="service">
                        <img className='service-img' src={obj.image} alt="" />
                        <div className="service-heading">{obj.heading}</div>
                        <div className="service-text">{obj.text}</div>
                    </div> 
                )
                })}
                </div>
                <button onClick={() => scrollToSection('contact', event)} className='service-btn'>Get in touch</button>
            </div>
        </section>
    )
}

export default Services