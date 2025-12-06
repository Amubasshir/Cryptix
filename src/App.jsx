

import './App.css'
import CryptixFeatures from './components/Cryptix Landing Page Features'
import FAQ from './components/FAQ'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import Sectiongap from './components/Sectiongap'
import TestimonialGrid from './components/TestimonialGrid'


function App() {
  

  return (
    <>
      <div className=''>
       
        <HeroSection></HeroSection>
        <CryptixFeatures></CryptixFeatures>
        <Sectiongap></Sectiongap>
        <HowItWorksSection></HowItWorksSection>
        <Sectiongap></Sectiongap>
        <TestimonialGrid></TestimonialGrid>
        <Sectiongap></Sectiongap>
        <FAQ></FAQ>
         <Sectiongap></Sectiongap>
   </div>
    </>
  )
}

export default App
