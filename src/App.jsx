

import './App.css'

import CTASection from './components/CTASection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

import HowItWorksSection from './components/HowItWorksSection'
import Sectiongap from './components/Sectiongap'
import TestimonialGrid from './components/TestimonialGrid'
import WhyCryptix from './components/WhyCryptix'
import CryptoPlatform from './components/CryptoPlatform'
import HeroWithNavbar from './components/NavBar'


function App() {
  

  return (
    <>
      <div className=''>
       <HeroWithNavbar></HeroWithNavbar>
       
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
