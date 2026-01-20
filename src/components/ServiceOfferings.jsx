// import icon1 from '../assets/icon/img-11_blue.png';
// import icon2 from '../assets/icon/img-12_blue.png';
// import icon3 from '../assets/icon/img-13_blue.png';
// import icon4 from '../assets/icon/img-14_blue.png';
// import icon5 from '../assets/icon/img-15_blue.png';
// import icon6 from '../assets/icon/img-16_blue.png';
// import './ServiceOfferings.css';

// function ServiceOfferings() {
//   const services = [
//     {
//       icon: icon1,
//       title: "Intellectual Property Law",
//       description: "Intellectual property litigation, Drafting, Filing and prosecution of Trademarks, Patents and Copyrights, IP Research, IP portfolio advisory, Infringement opinions."
//     },
//     {
//       icon: icon2,
//       title: "Administrative Law",
//       description: "Representation before Karnataka State Administrative Tribunal, High Court and Supreme Court, Transfers, Pension related dispute, Employment regularisation, Termination."
//     },
//     {
//       icon: icon3,
//       title: "Commercial and Corporate Law",
//       description: "Commercial litigation, Company litigation, Drafting of contracts, Agreements, Licenses, Commercial and Corporate Transaction advisory, Deal structuring."
//     },
//     {
//       icon: icon4,
//       title: "Civil and Criminal Law",
//       description: "Civil and criminal litigation in all fora including the Trial courts, High courts, Supreme Court, Civil disputes advisory, Criminal trial."
//     },
//     {
//       icon: icon5,
//       title: "Alternate Dispute Resolution",
//       description: "Arbitration, Mediation, Agreement Review and Drafting."
//     },
//     {
//       icon: icon6,
//       title: "Real estate",
//       description: "Property related litigation, Title due diligence, Drafting of legal documents, Transaction advisory."
//     }
//   ];

//   return (
//     <section className="service-offerings-section">
//       <div className="container">
//         <div className="offerings-headline">
//           <h4 className="offerings-title">Service offerings</h4>
//         </div>
//         <ul className="offerings-list offerings-list--gap text--center">
//           {services.map((service, index) => (
//             <li key={index} className="offerings-item">
//               <div className="offerings-card offerings-card--overlay">
//                 <div className="offerings-card__image">
//                   <img src={service.icon} width="39" alt={service.title} />
//                 </div>
//                 <h4 className="offerings-card__title">{service.title}</h4>
//                 <div className="offerings-text-wrap">
//                   <p>{service.description}</p>
//                 </div>
//                 <a href="#" className="offerings-card__link"></a>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default ServiceOfferings;

// import { useEffect, useRef } from 'react';
// import icon1 from '../assets/icon/img-11_blue.png';
// import icon2 from '../assets/icon/img-12_blue.png';
// import icon3 from '../assets/icon/img-13_blue.png';
// import icon4 from '../assets/icon/img-14_blue.png';
// import icon5 from '../assets/icon/img-15_blue.png';
// import icon6 from '../assets/icon/img-16_blue.png';
// import './ServiceOfferings.css';

// function ServiceOfferings() {
//   const cardRefs = useRef([]);
//   const titleRef = useRef(null);
//   const services = [
//     {
//       icon: icon1,
//       title: "Intellectual Property Law",
//       description:
//         "IP litigation, Trademark and Patent filing, Copyright protection, IP portfolio advisory, and infringement opinions. Trademark opposition and Patent prosecution services."
//     },
//     {
//       icon: icon2,
//       title: "Administrative Law",
//       description:
//         "Representation before Administrative Tribunal, High Court and Supreme Court. Employment disputes, Pension matters, and service law cases. Transfers, regularisation, and termination matters."
//     },
//     {
//       icon: icon3,
//       title: "Commercial and Corporate Law",
//       description:
//         "Commercial litigation, Contract drafting, Corporate transactions, Mergers and acquisitions, and compliance advisory. Company formation and corporate governance matters."
//     },
//     {
//       icon: icon4,
//       title: "Civil and Criminal Law",
//       description:
//         "Civil and criminal litigation in all courts. Property disputes, Contract matters, Family law, and comprehensive legal representation. Criminal defense and Tort claims."
//     },
//     {
//       icon: icon5,
//       title: "Alternate Dispute Resolution",
//       description:
//         "Arbitration, Mediation, Conciliation services, ADR agreement drafting, and dispute resolution strategy. Domestic and international arbitration representation."
//     },
//     {
//       icon: icon6,
//       title: "Real Estate",
//       description:
//         "Property litigation, Title due diligence, Legal document drafting, Transaction advisory, and lease documentation. Property acquisition agreements and zoning matters."
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

//     if (titleRef.current) observer.observe(titleRef.current);
//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       if (titleRef.current) observer.unobserve(titleRef.current);
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <section className="service-offerings-section">
//       <div className="container">
//         <div className="offerings-headline">
//           <h4 ref={titleRef} className="offerings-title fade-in-up">Service Offerings</h4>
//         </div>

//         <ul className="offerings-list text--center">
//           {services.map((service, index) => (
//             <li key={index} className="offerings-item">
//               <div 
//                 ref={(el) => (cardRefs.current[index] = el)}
//                 className={`offerings-card offerings-card--overlay fade-in-up`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="offerings-card__image">
//                   <img src={service.icon} width="39" alt={service.title} />
//                 </div>

//                 <h4 className="offerings-card__title">
//                   {service.title}
//                 </h4>

//                 <div className="offerings-text-wrap">
//                   <p>{service.description}</p>
//                 </div>

//                 <a href="#" className="offerings-card__link" />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default ServiceOfferings;

import { useEffect, useRef } from "react";
import icon1 from "../assets/icon/img-11_blue.png";
import icon2 from "../assets/icon/img-12_blue.png";
import icon3 from "../assets/icon/img-13_blue.png";
import icon4 from "../assets/icon/img-14_blue.png";
import icon5 from "../assets/icon/img-15_blue.png";
import icon6 from "../assets/icon/img-16_blue.png";
import "./ServiceOfferings.css";

function ServiceOfferings() {
  const cardRefs = useRef([]);
  const titleRef = useRef(null);

  const services = [
    {
      icon: icon1,
      title: "Intellectual Property Law",
      description:
        "Trademark, patent and copyright protection, infringement actions, IP litigation and portfolio advisory services."
    },
    {
      icon: icon2,
      title: "Administrative Law",
      description:
        "Representation before tribunals, High Courts and Supreme Court in employment, pension and service matters."
    },
    {
      icon: icon3,
      title: "Commercial & Corporate Law",
      description:
        "Contract drafting, mergers and acquisitions, corporate compliance, governance and dispute resolution."
    },
    {
      icon: icon4,
      title: "Civil & Criminal Law",
      description:
        "Comprehensive representation in civil and criminal litigation including property, family and tort claims."
    },
    {
      icon: icon5,
      title: "Alternative Dispute Resolution",
      description:
        "Arbitration, mediation, conciliation and strategic dispute management for domestic and international matters."
    },
    {
      icon: icon6,
      title: "Real Estate Law",
      description:
        "Title due diligence, property transactions, lease documentation and real estate dispute advisory."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardRefs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      cardRefs.current.forEach(ref => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section className="services-modern-section">
      <div className="container">
        <h2 ref={titleRef} className="services-modern-title fade-in-up">
          Service Offerings
        </h2>

        <ul className="services-modern-grid">
  {services.map((service, index) => (
    <li
      key={index}
      ref={el => (cardRefs.current[index] = el)}
      className={`service-modern-card animate-${index % 4}`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="service-modern-icon">
        <img src={service.icon} alt={service.title} />
      </div>

      <div className="service-modern-content">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>

      <span className="service-modern-line"></span>
    </li>
  ))}
</ul>

      </div>
    </section>
  );
}

export default ServiceOfferings;
