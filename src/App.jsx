

import './App.css'
import CryptixFeatures from './components/WhyCryptix'
import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import HowItWorksSection from './components/HowItWorksSection'
import Sectiongap from './components/Sectiongap'
import TestimonialGrid from './components/TestimonialGrid'
import WhyCryptix from './components/WhyCryptix'
import CryptoPlatform from './components/CryptoPlatform'


function App() {
  

  return (
    <>
      <div className=''>
       
        <HeroSection></HeroSection>
        <WhyCryptix></WhyCryptix>
        <Sectiongap></Sectiongap>
        <CryptoPlatform></CryptoPlatform>
        <Sectiongap></Sectiongap>
        <HowItWorksSection></HowItWorksSection>
        <Sectiongap></Sectiongap>
        <TestimonialGrid></TestimonialGrid>
        <Sectiongap></Sectiongap>
        <FAQ></FAQ>
        <Sectiongap></Sectiongap>
        <CTASection></CTASection>
        <Sectiongap></Sectiongap>
        <Footer></Footer>
   </div>
    </>
  )
}

export default App
