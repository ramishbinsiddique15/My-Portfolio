import Aboutme from "./Components/Aboutme"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"
import Separator from "./Components/Separator"
import Services from "./Components/Services"
import Skills from "./Components/Skills"
import Testimonials from "./Components/Testimonials"

function App() {

  return (
    <>
    <div className="fullscreen">
     <Header/>
     <Hero/>
     <Separator/>
     <Aboutme/>
     <Separator/>
     <Services/>
     <Separator/>
     <Skills/>
     <Separator/>
     <Projects/>
     <Separator/>
     <Testimonials/>
     <Separator/>
     <Contact/>
     <Separator/>
     <Footer/>
    </div>
    </>
  )
}

export default App
