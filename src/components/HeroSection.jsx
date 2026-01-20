// import { useState, useEffect } from 'react';
// import businessmanImage from '../assets/images/lawyers-handshake-agreement.jpg';
// import lawyerSigningImage from '../assets/images/close-up-lawyer-signing-papers.jpg';
// import handshakeImage from '../assets/images/businessman-reading-contract-closeup.jpg';

// import './HeroSection.css';

// function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Driven by success,",
//       subtitle: "Defined by results.",
//       description: "Smart approaches to legal solutions with exceptional service. Legal talent and expertise necessary to meet our clients' needs in an ever-changing and fast-paced environment.",
//       image: businessmanImage
//     },
//     {
//       title: "Law Firm Devoted To",
//       subtitle: "Our Clients",
//       description: "Our lawyers offer clients a range of integrated global capabilities. It includes some of the world's most active M&A, real estate, financial services and corporate risk practices.",
//       image: lawyerSigningImage
//     },
//     {
//       title: "We Appear",
//       subtitle: "When You Can't",
//       description: "If you are accused of committing a crime, you will need the very best criminal defense attorneys in Fresno. We are especially skilled in the different law practice areas.",
//       image: handshakeImage
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="hero-section">
//       <div className="hero-slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
//           >
//             <div className="hero-tile">
//               <div className="bg-stretch">
//                 <img src={slide.image} alt={slide.title} />
//               </div>
//               <div className="container">
//                 <div className="hero-content">
//                   <h2 className="hero-tile__title h1">
//                     {slide.title} <br /> {slide.subtitle}
//                   </h2>
//                   <div className="text-wrap fade-up">
//                     <p>{slide.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="swiper-pagination">
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               className={`swiper-pagination-bullet ${index === currentSlide ? 'active' : ''}`}
//               onClick={() => setCurrentSlide(index)}
//               role="button"
//               tabIndex={0}
//               aria-label={`Go to slide ${index + 1}`}
//             ></span>
//           ))}
//         </div>
//         <div 
//           className="slider-nav slider-nav--next"
//           onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
//           role="button"
//           tabIndex={0}
//           aria-label="Next slide"
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//             <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

// import { useState, useEffect } from "react";
// import "./HeroSection.css";
// import justicescale from "../assets/cards/justice-scale.png"

// function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Driven by Success,",
//       subtitle: "Defined by Results.",
//       description:
//         "Strategic trademark and intellectual property solutions built on experience, precision, and trust."
//     },
//     {
//       title: "Law Firm Devoted To",
//       subtitle: "Our Clients",
//       description:
//         "We deliver reliable legal support with a business-focused approach, ensuring long-term protection and compliance."
//     },
//     {
//       title: "We Stand With You",
//       subtitle: "At Every Step",
//       description:
//         "From registration to enforcement, our legal experts guide you with clarity, confidence, and accountability."
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   return (
//     <section className="hero-modern-slider">
//       <div className="hero-slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-slide ${index === currentSlide ? "active" : ""}`}
//           >
//             <div className="hero-slide-inner">
              {/* LEFT CONTENT */}
              // <div className="slide-container">
              //   <div className="hero-content">
              //     <span className="hero-tag">Legal & Trademark Experts</span>

              //     <h1 className="hero-title">
              //       {slide.title} <br /> {slide.subtitle}
              //     </h1>

              //     <p className="hero-description">{slide.description}</p>

              //     <div className="hero-actions">
              //       <a href="/contact" className="btn-primary">
              //         Get Consultation
              //       </a>
              //       <a href="/about" className="btn-outline">
              //         Learn More
              //       </a>
              //     </div>
              //   </div>
              // </div>

              {/* RIGHT FLOATING IMAGE */}
              {/* <div className="hero-floating-image">
                <img
                  src= {justicescale}
                  alt="Justice Balance Scale"
                />
              </div> */}
        //     </div>
        //   </div>
        // ))}

        {/* PAGINATION */}
        // <div className="hero-pagination">
        //   {slides.map((_, index) => (
        //     <span
        //       key={index}
        //       className={`hero-dot ${
        //         index === currentSlide ? "active" : ""
        //       }`}
        //       onClick={() => setCurrentSlide(index)}
        //     />
        //   ))}
        // </div>

        {/* NEXT ARROW */}
//         <div
//           className="hero-arrow"
//           onClick={() =>
//             setCurrentSlide((prev) => (prev + 1) % slides.length)
//           }
//         >
//           <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M9 18L15 12L9 6"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;



import "./HeroSection.css";

function HeroSection() {
  const slidingTexts = [
    "Clear Guidance",
    "Accurate Documentation",
    "Complete Compliance"
  ];

  return (
    <section className="hero-modern-slider">
      <div className="hero-slider">
        <div className="hero-slide active">
          <div className="hero-slide-inner">
            <div className="slide-container">
              <div className="hero-content">
                <span className="hero-tag">Legal & Trademark Experts</span>

                <h1 className="hero-title">
                 We Simplify Filing with
                  <span className="text-rotate">
                    {slidingTexts.map((text, index) => (
                      <span key={index}>{text}</span>
                    ))}
                  </span>
                </h1>

                <p className="hero-description">
                  We help individuals, startups, and growing businesses handle their legal and compliance filings with confidence. From understanding requirements to preparing accurate documents and meeting regulatory deadlines, our expert-led process ensures every filing is completed correctly, efficiently, and without unnecessary delays.
                </p>

                {/* ACTION BUTTONS */}
                <div className="hero-actions">
                  <a href="/contact" className="btn-primary">
                    Get Consultation
                  </a>
                  <a href="/about" className="btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
