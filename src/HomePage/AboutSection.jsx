// import React from "react";
// import "./AboutSection.css";
// import { FaBalanceScale, FaFileInvoiceDollar, FaRupeeSign } from "react-icons/fa";
// import { FaGavel } from "react-icons/fa6";

// export default function AboutSection() {
//   return (
//     <section className="experience-section">
//       <div className="experience-container">

//         {/* TOP CONTENT */}
//         <div className="experience-header">
//           <div className="experience-number">25</div>
//           <div className="experience-text">
//             <span>Years of</span>
//             <h2>Experience</h2>
//           </div>
//         </div>

//         <p className="experience-desc">
//           Business many variations of passages of Lorem Ipsum available
//           suffhumour or randomised words which don't look even slightly
//           believable. Lorem Ipsum available variations of passages.
//         </p>

//         {/* FEATURES */}
//         <div className="experience-features">
//           <div className="experience-card">
//             <div className="experience-icon">
//               <i className="icon"><FaBalanceScale/></i>
//             </div>
//             <h4>Professional Services</h4>
//             <span className="line"></span>
//             <p>
//               Comprehensive legal and trademark services delivered with precision, integrity, and a deep understanding of regulatory frameworks.
//             </p>
//           </div>

//           <div className="experience-card">
//             <div className="experience-icon">
//               <i className="icon"><FaGavel/></i>
//             </div>
//             <h4>Legal Experts</h4>
//             <span className="line"></span>
//             <p>
//               Our experienced legal professionals provide strategic guidance and representation to protect your business interests.
//             </p>
//           </div>

//           <div className="experience-card">
//             <div className="experience-icon">
//               <i className="icon"><FaFileInvoiceDollar/></i>
//             </div>
//             <h4>Transparent Pricing</h4>
//             <span className="line"></span>
//             <p>
//               Clear, competitive pricing with no hidden costs—ensuring value-driven legal solutions you can trust.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }


// import React from "react";
// import "./AboutSection.css";
// import { FaBalanceScale, FaFileInvoiceDollar } from "react-icons/fa";
// import { FaGavel } from "react-icons/fa6";


// export default function AboutSection() {
//   return (
//     <section className="experience-section">
//       <div className="experience-container">

        {/* HEADER */}
      //  <div className="experience-header">
  {/* LEFT STACK */}
  // <div className="experience-left fade-left">
  //   <span className="experience-number image-mask">25</span>

  //   <div className="experience-text">
  //     <span>Years of</span>
  //     <h2>Experience</h2>
  //   </div>
  // </div>

  {/* RIGHT DESCRIPTION */}
//   <div className="experience-right fade-right">
//     <p className="experience-desc">
//       We help startups, enterprises, and professionals navigate complex
//       legal and compliance requirements with clarity and confidence.
//       From trademark protection to regulatory compliance, we act as a
//       long-term legal partner focused on accuracy, speed, and trust.
//     </p>
//   </div>
// </div>


       
        {/* FEATURES */}
//         <div className="experience-features">

//           <div className="experience-card fade-left">
//             <div className="icon-ring">
//               <div className="icon-inner">
//                 <FaBalanceScale />
//               </div>
//             </div>
//             <h4>Professional Services</h4>
//             <span className="line"></span>
//             <p>
//               Comprehensive legal and trademark services delivered with
//               precision, integrity, and regulatory expertise.
//             </p>
//           </div>

//           <div className="experience-card fade-up">
//             <div className="icon-ring">
//               <div className="icon-inner">
//                 <FaGavel />
//               </div>
//             </div>
//             <h4>Legal Experts</h4>
//             <span className="line"></span>
//             <p>
//               Our experienced legal professionals provide strategic guidance
//               and representation to protect your business interests.
//             </p>
//           </div>

//           <div className="experience-card fade-right">
//             <div className="icon-ring">
//               <div className="icon-inner">
//                 <FaFileInvoiceDollar />
//               </div>
//             </div>
//             <h4>Transparent Pricing</h4>
//             <span className="line"></span>
//             <p>
//               Clear, competitive pricing with no hidden costs—ensuring
//               value-driven legal solutions you can trust.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import "./AboutSection.css";
import { FaBalanceScale } from "react-icons/fa";
import { FaFileInvoiceDollar, FaGavel } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <section className="experience-pills-section">
      <div className="experience-pills-container">

        {/* LEFT – EXPERIENCE */}
        <div className="experience-pill-left">
          <span className="experience-count">25</span>
          <div className="experience-label">
            <span>Years of</span>
            <strong>Experience</strong>
          </div>
        </div>

        {/* RIGHT – PILLS */}
        <div className="experience-pill-right">
          <span className="pill fade-right"><FaBalanceScale/> Professional Services</span>
          <span className="pill fade-right"><FaGavel/> Legal Experts</span>
          <span className="pill fade-right"><FaFileInvoiceDollar/> Transparent Pricing</span>
        </div>

      </div>
    </section>
  );
}
