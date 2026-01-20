import React, { useState } from "react";
import "./ServiceTypes.css";
import serviceImg from "../assets/images/efind-6.jpg"; // replace image
import { FaBalanceScale } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Trademark Registration",
    desc:
      "Trademark registration secures exclusive legal rights to your brand identity.",
      link:"#"
  },
  {
    title: "Trademark Objection",
    desc:
      "Trademark objection is a notice highlighting issues with your application.",
      link:"#"
  },
  {
    title: "Trademark Certificate",
    desc:
      "A trademark certificate is official proof of trademark registration.",
      link:"#"
  },
   {
    title: "Trademark Opposition",
    desc:
      "Trademark opposition is a third-party challenge to your trademark application.",
      link:"#"
  },
  {
    title:"Trademark Hearing",
    desc:
      "Trademark hearing is a legal proceeding to resolve objections.",
      link:"#"
  },
  {
    title: "Trademark Rectification",
    desc:
      "rademark rectification is the process of correcting or removing errors.",
      link:"#"
  },
   {
    title: "Trademark Renewal",
    desc:
      "Trademark renewal is the process of extending the validity of a registered trademark.",
      link:"#"
  },
  {
    title: "Expedited TM Registration",
    desc:
      "Expedited TM registration fast-tracks the trademark application for quicker approval.",
      link:"#"
  },
  {
    title: "Copyright Registration",
    desc:
      "Copyright registration legally protects your original creative work from unauthorized use.", 
      link:"#"
  },
  {
    title: "Copyright Objection",
    desc:
      "Copyright objection is a notice raised questioning the validity of a copyright application.",
      link:"#"
  },
];

export default function ServiceTypes() {
  const [active, setActive] = useState(0);

  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT SIDE */}
        <div className="services-left">
          <span className="services-label">
  <FaBalanceScale size={18} />
  <span>OUR SERVICES</span>
</span>

          <h2 className="services-heading">
            Comprehensive Trademark Services
          </h2>

          <div className="image-wrapper">
            <img src={serviceImg} alt="Brand mockup" />
            {/* <div className="arrow-circle">↗</div> */}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="services-right">
          {services.map((item, index) => (
            <div
              key={index}
              className={`service-item ${active === index ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
            >
              <h3>{item.title}</h3>

              <div className="service-content">
                <p>{item.desc}</p>
                <Link to={item.link}>Read More ↗</Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
