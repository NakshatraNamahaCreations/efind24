import React, { useState } from "react";
import "./ServiceSection.css";

import img1 from "../assets/icon/img-11_blue.png";
import img2 from "../assets/icon/img-12_blue.png";
import img3 from "../assets/icon/img-13_blue.png";
import img4 from "../assets/icon/img-14_blue.png";
import img5 from "../assets/icon/img-15_blue.png";
import img6 from "../assets/icon/img-16_blue.png";

const steps = [
  {
    title: "Intellectual Property Law",
    contentTitle: "Intellectual Property Law",
    contentDesc:
      "Trademark, patent and copyright protection, infringement actions, IP litigation and portfolio advisory services.",
    image: img1,
  },
  {
    title: "Administrative Law",
    contentTitle: "Administrative Law",
    contentDesc:
      "Representation before tribunals, High Courts and Supreme Court in employment, pension and service matters.",
    image: img2,
  },
  {
    title: "Commercial & Corporate Law",
    contentTitle: "Commercial & Corporate Law",
    contentDesc:
      "Contract drafting, mergers and acquisitions, corporate compliance, governance and dispute resolution.",
    image: img3,
  },
  {
    title: "Civil & Criminal Law",
    contentTitle: "Civil & Criminal Law",
    contentDesc:
      "Comprehensive representation in civil and criminal litigation including property, family and tort claims.",
    image: img4,
  },
  {
    title: "Alternative Dispute Resolution",
    contentTitle: "Alternative Dispute Resolution",
    contentDesc:
      "Arbitration, mediation, conciliation and strategic dispute management for domestic and international matters.",
    image: img5,
  },
  {
    title: "Real Estate Law",
    contentTitle: "Real Estate Law",
    contentDesc:
      "Title due diligence, property transactions, lease documentation and real estate dispute advisory.",
    image: img6,
  },
];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="process-section">
           <h2>Service Offerings</h2>
      <div className="process-container">
     

        {/* LEFT */}
        <div className="process-left-wrap">
          <span className="process-vertical-line"></span>

         {/* LEFT ACTIVE LINE */}
{activeIndex < 3 && (
  <span
    className="process-vertical-line-active"
    style={{ top: `${activeIndex * 116}px` }}
  />
)}


          <div className="process-left">
            {steps.slice(0, 3).map((step, index) => (
  <div
    key={index}
    className={`process-step fade-up ${
      activeIndex === index ? "active" : ""
    }`}
    style={{ animationDelay: `${index * 0.12}s` }}
    onClick={() => setActiveIndex(index)}
  >
    <h4>{step.title}</h4>
  </div>
))}

          </div>
        </div>

        {/* CENTER */}
        <div className="process-center">
          <div className="process-image-wrap">
            <div className="process-image-ring">
              <img src={steps[activeIndex].image} alt="" />
            </div>
          </div>

          <div className="process-content">
            <h3>{steps[activeIndex].contentTitle}</h3>
            <p>{steps[activeIndex].contentDesc}</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="process-right-wrap">
          <span className="process-vertical-line"></span>

         {/* RIGHT ACTIVE LINE */}
{activeIndex >= 3 && (
  <span
    className="process-vertical-line-active"
    style={{ top: `${(activeIndex - 3) * 116}px` }}
  />
)}


          <div className="process-right">
           {steps.slice(3, 6).map((step, index) => {
  const realIndex = index + 3;
  return (
    <div
      key={realIndex}
      className={`process-step fade-up ${
        activeIndex === realIndex ? "active" : ""
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
      onClick={() => setActiveIndex(realIndex)}
    >
      <h4>{step.title}</h4>
    </div>
  );
})}

          </div>
        </div>

      </div>
    </section>
  );
}

