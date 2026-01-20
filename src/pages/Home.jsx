import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeaturesServices from '../components/FeaturesServices'
import ServiceCards from '../components/ServiceCards'
import ServiceOfferings from '../components/ServiceOfferings'
// import AboutSection from '../components/AboutSection'
import TestimonialsNews from '../components/TestimonialsNews'
import CounterSection from '../components/CounterSection'
import AccordionSection from '../components/AccordionSection'
import LegalPractices from '../components/LegalPractices'
import PracticesStats from '../components/PracticesStats'
import Footer from '../components/Footer'
import BookConsultation from '../components/BookConsultation'
import AboutSection from '../HomePage/AboutSection'
import ServiceSection from "../HomePage/ServiceSection"
import ReviewSection from '../HomePage/ReviewSection'
import StorySection from '../HomePage/StorySection'
import ServiceGrid from '../HomePage/ServiceGrid'
import AbtSection from '../HomePage/AbtSection'
import BigText from '../HomePage/BigText'
import ServiceSlider from '../HomePage/ServiceSlider'
import Faq from '../HomePage/Faq'
import HomeBan from '../HomeBanner/HomeBan'
import ServiceTypes from '../HomeBanner/ServiceTypes'
import AbtDescription from "../HomeBanner/AbtDescription"
import WhyChooseUs from '../HomeBanner/WhyChooseUs'
import PromoSection from "../HomeBanner/PromoSection"

function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <HomeBan/>
        {/* <HeroSection /> */}
        {/* <AboutSection/> */}
        <AbtDescription/>
        <AbtSection/>
        <BigText/>
        <ServiceTypes/>
        <WhyChooseUs/>
       
        {/* <ServiceSlider/> */}
        <Faq/>
         <PromoSection/>
        {/* <StorySection/> */}
        {/* <ServiceGrid/> */}
        {/* <ServiceSection/> */}
        {/* <ReviewSection/> */}
        {/* <FeaturesServices /> */}
        {/* <ServiceCards /> */}
        {/* <AboutSection /> */}
        {/* <ServiceOfferings /> */}
        {/* <TestimonialsNews /> */}
        {/* <PracticesStats /> */}
        {/* <CounterSection /> */}
        {/* <AccordionSection /> */}
         {/* <LegalPractices />  */}
         {/* <BookConsultation/>  */}
      </main>
      <Footer />
    </>
  )
}

export default Home













