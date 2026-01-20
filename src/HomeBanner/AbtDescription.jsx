import React from "react";
import "./AbtDescription.css";
import aboutImg1 from "../assets/images/efind-7.jpg";
import { FaBalanceScale } from "react-icons/fa";


export default function AbtDescription() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left">
         <span className="about-tag">
  <FaBalanceScale size={18} />
  <span>OUR STORY</span>
</span>


          <h2 className="about-title">
            BUILDING BRANDS WITH A <br />
            VISIONARY TWIST
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
  );
}
