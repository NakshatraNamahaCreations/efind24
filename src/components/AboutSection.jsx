// import { useEffect, useRef } from 'react';
// import about1 from '../assets/images/about1.jpg';
// import about2 from '../assets/images/about2.jpg';
// import awardIcon from '../assets/icon/awward-icon.png';
// import backgroundImage from '../assets/cards/abstract-truth-concept-arrangement-removebg-preview.png';
// import './AboutSection.css';

// function AboutSection() {
//   const textRef = useRef(null);
//   const imagesRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('animated');
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     if (textRef.current) observer.observe(textRef.current);
//     if (imagesRef.current) observer.observe(imagesRef.current);

//     return () => {
//       if (textRef.current) observer.unobserve(textRef.current);
//       if (imagesRef.current) observer.unobserve(imagesRef.current);
//     };
//   }, []);

//   return (
//     <section className="about-section" style={{ '--bg-image': `url(${backgroundImage})` }}>
//       <div className="container">
//         <div className="about-content">
//           <div ref={textRef} className="about-text fade-in-left">
//             <div className="about-label">About Us</div>
//             <h2 className="about-title">We provide legal<br /> experts to assist you.</h2>
//             <div className="about-description">
//               <p>We pride ourselves on our ability to assess our client's needs. We appreciate and understand the pressures of the modern day legal environment and we work with our clients to provide the most suitable solution for their legal issues in hand.</p>
//             </div>
//             <a href="#" className="btn btn--about">
//               READ MORE
//             </a>
//           </div>
//           <div ref={imagesRef} className="about-images fade-in-right">
//             <div className="about-image-main">
//               <img src={about1} alt="Legal professionals" />
//             </div>
//             <div className="about-image-overlay">
//               <img src={about2} alt="Lady Justice" />
//             </div>
//             <div className="about-counter-card">
//               <div className="about-counter-icon">
//                 <img src={awardIcon} alt="Award" />
//               </div>
//               <div className="about-counter-content">
//                 <div className="about-counter-number">25+</div>
//                 <div className="about-counter-label">Years of Experience</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;

import { useEffect, useRef, useState } from "react";
import "./AboutSection.css";
import justice from "../assets/cards/justice-scale1.png";

/* ================= COUNTER ================= */
function Counter({ end, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const rafRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          startTime = null;
          rafRef.current = requestAnimationFrame(animate);
        }

        if (!entry.isIntersecting) {
          // reset when leaving viewport
          cancelAnimationFrame(rafRef.current);
          startedRef.current = false;
          setCount(0);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={counterRef}>{count}</span>;
}

/* ================= ABOUT SECTION ================= */
function AboutSection() {
  return (
    <section className="about-ai-style">
      <div className="about-ai-container">
        {/* LEFT CONTENT */}
        <div className="about-ai-text">
          <span className="about-pill">About Us</span>

          <h2>
            Smart Legal & Trademark <br />
            Solutions for Modern Businesses
          </h2>

          <p>
            We help startups, enterprises, and professionals navigate complex
            legal and compliance requirements with clarity and confidence.
          </p>

          <p>
            From trademark protection to regulatory compliance, we act as a
            long-term legal partner focused on accuracy, speed, and trust.
          </p>

          <a href="/about" className="about-cta">
            Learn more →
          </a>
        </div>

        {/* RIGHT STATS */}
        <div className="about-ai-stats">
          <div className="stat-card">
            <div className="stat-value">
              <span className="stat-number">
                <Counter end={25} />
              </span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-label">Years of Experience</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">
              <span className="stat-number">
                <Counter end={5000} />
              </span>
              <span className="stat-suffix">+</span>
            </div>
            <div className="stat-label">Clients Served</div>
          </div>

          <div className="stat-card">
            <div className="stat-value">
              <span className="stat-number">
                <Counter end={98} />
              </span>
              <span className="stat-suffix">%</span>
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>

          {/* Floating Justice Image */}
          <div className="stat-card-img">
            <img
              src={justice}
              width={200}
              height={200}
              alt="Justice Scale"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
