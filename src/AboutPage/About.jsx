import Header from "../components/Header";
import AboutSection from "../HomePage/AboutSection";
import AbtSection from "../HomePage/AbtSection";
import AboutHero from "./AboutHero";
import AboutInfo from "./AboutInfo";
import VisionSection from "./VisionSection";
import Footer from "../components/Footer"


export default function About(){
    return(
        <>
          <Header/>
          <AboutHero/>
          <AboutInfo/>
          <VisionSection/>
          <Footer/>
        </>
    )
}