import "./AboutHero.css";
import { FaBalanceScale, FaPlay } from "react-icons/fa";
import abtimg1 from "../assets/images/efind-4.png";
import abtimg2 from "../assets/images/efind-2.jpg"

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-container">

        {/* LEFT CONTENT */}
        <div className="about-left ">
           
         {/* TITLE + BREADCRUMBS */}
<div className="about-title-row" data-aos="fade-up">

  <h1>
   Making legal filings simple, transparent, and accessible
  </h1>

 
</div>


          <div className="about-images">
            <div className="img-card" data-aos="fade-right">
              <img
                src={abtimg1}
                alt="Team discussion"
              />
            </div>

            <div className="img-cards video-card" data-aos="fade-left">
              <img
                src={abtimg2}
                alt="Team working"
              />
              {/* <button className="play-btn">
                <FaPlay />
              </button> */}
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
           <div className="breadcrumbs">
    <span>Home</span>
    <span className="separator">/</span>
    <span className="current">About Us</span>
  </div>
          <p>
            We help individuals and businesses complete legal filings with clarity, accuracy, and ease—without confusion or hidden steps.
          </p>

          <div className="tag-list">
            <span>Professional Services</span>
            <span>Legal Experts</span>
            <span>Transparent Pricing</span>
            <span>Process Driven</span>
          </div>
        </div>

      </div>
    </section>
  );
}
