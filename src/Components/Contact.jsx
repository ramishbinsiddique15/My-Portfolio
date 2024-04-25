import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id='contact' className='contact-full'>
      <div className="contact-box">
        <h1 className="contact-head">Contact</h1>
        <p className="contact-txt">Drop us a message and let's turn your ideas into pixel-perfect reality! 🤝</p>
        <div className="email-box">
          <p className='email'>Email : </p>
          <a className='email-link' href="https://mail.google.com/mail/?view=cm&fs=1&to=recipient@gmail.com" target="_blank">ramishbinsiddique24@gmail.com</a>
        </div>
        <div className="other-contact">
          <a href="https://github.com/ramishbinsiddique15" target='_blank'><img className='contacts-icon3' src="/src/assets/github-icon.ico" alt="" /></a>
          <a href="https://www.linkedin.com/in/ramish15/" target='_blank'><img className='contacts-icon3' src="/src/assets/linkedin.png" alt="" /></a>
        </div>
      </div>
    </section>
  )
}

export default Contact
