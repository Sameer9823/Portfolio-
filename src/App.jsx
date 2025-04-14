import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCard from './sections/FeatureCard'
import Exprience from './sections/Exprience'
import TechStack from './sections/TechStack'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCard/>
      <Exprience/>
      <TechStack/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App