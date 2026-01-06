import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesServices from '../components/FeaturesServices'
import ServiceCards from '../components/ServiceCards'
import ServiceOfferings from '../components/ServiceOfferings'
import AboutSection from '../components/AboutSection'
import TestimonialsNews from '../components/TestimonialsNews'
import CounterSection from '../components/CounterSection'
import AccordionSection from '../components/AccordionSection'
import LegalPractices from '../components/LegalPractices'
import PracticesStats from '../components/PracticesStats'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <HeroSection />
        <FeaturesServices />
        {/* <ServiceCards /> */}
        <AboutSection />
        <ServiceOfferings />
        <TestimonialsNews />
        {/* <PracticesStats /> */}
        {/* <CounterSection /> */}
        {/* <AccordionSection /> */}
        <LegalPractices />
      </main>
      <Footer />
    </>
  )
}

export default Home













