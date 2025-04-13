import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCard from './sections/FeatureCard'

function App() {
  return (
    <>
      <NavBar/>
      <Hero />
      <ShowcaseSection/>
      <LogoSection/>
      <FeatureCard/>
    </>
  )
}

export default App