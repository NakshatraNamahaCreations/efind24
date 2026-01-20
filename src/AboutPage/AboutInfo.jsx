import React, { useEffect } from "react";
import "./AboutInfo.css";
import aboutImg from "../assets/images/efind-1.jpg";
import MovingText from "../HomePage/MovingText";
import { FaBalanceScale } from "react-icons/fa";
import aboutImg1 from "../assets/images/efind-7.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa6";

export default function AboutInfo() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 120
    });
  }, []);

  return (
    <>
     <section className="about-section">
          <div className="about-container">
    
            {/* LEFT CONTENT */}
            <div className="about-left">
             <span className="about-tag">
      <FaBalanceScale size={18} />
      <span>ABOUT US</span>
    </span>
    
    
              <h2 className="about-title">
                Simplifying trademark, copyright, and legal filings.
              </h2>
    
              {/* <p className="about-desc">
                We specialize in creating brands that stand out by blending
                strategic thinking, design excellence, and digital innovation.
              </p> */}
    
              {/* <ul className="about-list">
                <li>Creative strategies that elevate your brand presence</li>
                <li>Personalized solutions aligned with your goals</li>
                <li>Experienced professionals across design & development</li>
                <li>Results-driven execution with measurable impact</li>
              </ul> */}
            </div>
    
            {/* RIGHT IMAGES */}
            <div className="about-right">
              <div className="about-img main">
                <img src={aboutImg1} alt="Team discussion" />
              </div>
    
              {/* <div className="about-img floating">
                <img src={aboutImg2} alt="Creative collaboration" />
              </div> */}
            </div>
    
          </div>
        </section>


    <section className="about-section">
      <div className="about-container">
 
        {/* LEFT IMAGE */}
        <div
          className="about-image-wrapper"
          data-aos="fade-right"
        >
          <img src={aboutImg} alt="Our Team" />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="about-content"
          data-aos="fade-left"
        >
          {/* ICON TEXT */}
          {/* <span
            className="icon-text"
            data-aos="fade-up"
          >
            <FaBalanceScale size={20} />
            <span>About Us</span>
          </span> */}

          {/* <h2 data-aos="fade-up" data-aos-delay="150">
            We Build Brands That Stand Out
          </h2> */}

          <p className="about-intro" data-aos="fade-up" data-aos-delay="250">
            We specialize in creating brands that stand out, combining bold,
            forward-thinking strategies with innovative design.
          </p>

          <ul className="about-points">
            {[
              "Our team brings deep industry knowledge and hands-on experience",
              "Every engagement follows a clear, documented process to ensure accuracy.",
              "We act as a long-term compliance partner, helping businesses remain aligned."
            ].map((item, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={350 + index * 120}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* <div className="about-actions" data-aos="fade-up" data-aos-delay="750">
            <button className="btn-primary">
              Learn More <FaArrowRight/>
            </button>
          </div> */}

          {/* MOVING TEXT */}
          <div data-aos="fade-left" data-aos-delay="900">
            <MovingText />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
