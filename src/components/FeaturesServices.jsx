// import { useEffect, useRef } from 'react';
// import icon1 from '../assets/icon/img-11_blue.png';
// import icon2 from '../assets/icon/img-12_blue.png';
// import icon3 from '../assets/icon/img-16_blue.png';
// import './FeaturesServices.css';

// function FeaturesServices() {
//   const cardRefs = useRef([]);
//   const features = [
//     {
//       icon: icon1,
//       title: "Professional",
//       titleLine2: "Services",
//       description: "We provide comprehensive legal services with exceptional expertise and dedication. Our team ensures quality representation and strategic solutions for all your legal needs.",
//       link: "#"
//     },
//     {
//       icon: icon2,
//       title: "Top Legal",
//       titleLine2: "Experts",
//       description: "Our experienced legal professionals are committed to delivering outstanding results. We understand your requirements and provide the best possible resolution.",
//       link: "#"
//     },
//     {
//       icon: icon3,
//       title: "Competitive",
//       titleLine2: "Pricing",
//       description: "We offer transparent and competitive pricing for all our legal services. Get quality legal representation that fits your budget without compromising on excellence.",
//       link: "#"
//     }
//   ];

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

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section id="features-services" className="feature-services-section">
//       <div className="feature-container">
//         <div className="feature-row">
//           {features.map((feature, index) => (
//             <div key={index} className="feature-col">
//               <div 
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className={`feature-card ${index === 1 ? 'active' : ''} ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}
//               >
//                 <div className="feature-icon-wrapper">
//                   <img src={feature.icon} alt={feature.title} />
//                   <h4>
//                     <a href={feature.link}>{feature.title} {feature.titleLine2}</a>
//                   </h4>
//                 </div>
//                 <div className="feature-text-content">
//                   <p>{feature.description}</p>
//                   <a href={feature.link}>
//                     <i className="fal fa-arrow-right"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturesServices;


import { useEffect, useRef } from "react";
import "./FeaturesServices.css";

function FeaturesServices() {
  const cardRefs = useRef([]);

  const features = [
    {
      title: "Professional Services",
      description:
        "Comprehensive legal and trademark services delivered with precision, integrity, and a deep understanding of regulatory frameworks.",
      icon: (
        <svg viewBox="0 0 64 64">
          <path d="M32 6v52M14 14h36M20 14l-8 18h16l-8-18zm24 0l-8 18h16l-8-18z" />
        </svg>
      ),
    },
    {
      title: "Legal Experts",
      description:
        "Our experienced legal professionals provide strategic guidance and representation to protect your business interests.",
      icon: (
        <svg viewBox="0 0 64 64">
          <path d="M20 26l12-12 12 12M32 14v26M18 40h28" />
        </svg>
      ),
    },
    {
      title: "Transparent Pricing",
      description:
        "Clear, competitive pricing with no hidden costs—ensuring value-driven legal solutions you can trust.",
      icon: (
        <svg viewBox="0 0 64 64">
          <path d="M32 6l20 10v14c0 14-9 26-20 28C21 56 12 44 12 30V16L32 6z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      cardRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="features-modern">
      <div className="features-container">
        <div className="features-grid">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="feature-card-modern fade-up"
            >
              <div className="icon-box">{item.icon}</div>

              <h3>{item.title}</h3>
              {/* <p>{item.description}</p> */}

              {/* <a href="#" className="learn-more">
                Learn More →
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesServices;
