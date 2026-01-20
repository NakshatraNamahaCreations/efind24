import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import TrademarkObjection from './pages/TrademarkObjection'
import TrademarkRegistration from './pages/TrademarkRegistration'
import TrademarkCertification from './pages/TrademarkCertification'
import TrademarkOpposition from './pages/TrademarkOpposition'
import TrademarkHearing from './pages/TrademarkHearing'
import TrademarkRectification from './pages/TrademarkRectification'
import CopyrightRegistration from './pages/CopyrightRegistration'
import CopyrightObjection from './pages/CopyrightObjection'
import TrademarkRenewal from './pages/TrademarkRenewal'
import ExpeditedTrademarkRegistration from './pages/ExpeditedTrademarkRegistration'
import ContactUs from './pages/ContactUs'
import CaseStudies from './pages/CaseStudies'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import BackToTop from './components/BackToTop'
import About from './AboutPage/About'

function App() {
  return (
    <Router>
      <BackToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/trademark-objection" element={<TrademarkObjection />} />
        <Route path="/trademark-registration" element={<TrademarkRegistration />} />
        <Route path="/trademark-certification" element={<TrademarkCertification />} />
        <Route path="/trademark-opposition" element={<TrademarkOpposition />} />
        <Route path="/trademark-hearing" element={<TrademarkHearing />} />
        <Route path="/trademark-rectification" element={<TrademarkRectification />} />
        <Route path="/trademark-renewal" element={<TrademarkRenewal />} />
        <Route path="/expedited-trademark-registration" element={<ExpeditedTrademarkRegistration />} />
        <Route path="/copyright-registration" element={<CopyrightRegistration />} />
        <Route path="/copyright-objection" element={<CopyrightObjection />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Router>
  )
}

export default App
