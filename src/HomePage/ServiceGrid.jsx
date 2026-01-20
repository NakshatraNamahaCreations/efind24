import React from "react";
import "./ServiceGrid.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/icon/img-11_blue.png";
import img2 from "../assets/icon/img-12_blue.png";
import img3 from "../assets/icon/img-13_blue.png";
import img4 from "../assets/icon/img-14_blue.png";
import img5 from "../assets/icon/img-15_blue.png";
import img6 from "../assets/icon/img-16_blue.png";

const services = [
  { title: "Trademark Registration", icon: img1, link:"/trademark-registration" },
  { title: "Trademark Objection", icon: img2 , link:"/trademark-objection"},
  { title: "Trademark Certificate", icon: img3 , link:"/trademark-certification"},
  { title: "Trademark Opposition", icon: img4, link:"/trademark-opposition" },
  { title: "Trademark Hearing", icon: img5, link:"/trademark-hearing"},
  { title: "Trademark Rectification", icon: img6, link:"/trademark-rectification" },
  { title: "Trademark Renewal", icon: img1, link:"/trademark-renewal" },
  { title: "Expedited TM Registration", icon: img2, link:"/expedited-trademark-registration" },
  { title: "Copyright Registration", icon: img3, link:"/copyright-registration" },
  { title: "Copyright Objection", icon: img4 , link:"/copyright-objection"},
];

export default function ServiceGrid() {
  const leftColumn = services.slice(0, 5);
  const rightColumn = services.slice(5, 10);

  useEffect(() => {
  const elements = document.querySelectorAll(".fade-up, .bookmark-column");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  return (
    <section className="service-bookmark-section">
        <div className="service-desc-grid">
      <h2>Comprehensive Trademark Services</h2>
      <p>Our trademark services cover every stage of brand protection—from name search and registration to objections, renewals, and enforcement. </p>
      </div>

      <div className="bookmark-two-column">
        
        {/* LEFT COLUMN */}
       <div className="bookmark-column fade-up">
  {leftColumn.map((service, index) => (
    <Link
      to={service.link}
      key={index}
      className="service-bookmark-link"
    >
      <div className="service-bookmark">
        <div className="bookmark-icon">
          <img src={service.icon} alt={service.title} />
        </div>
        <span className="bookmark-title">{service.title}</span>
      </div>
    </Link>
  ))}
</div>


        {/* RIGHT COLUMN */}
       <div className="bookmark-column fade-up">
  {rightColumn.map((service, index) => (
    <Link
      to={service.link}
      key={index}
      className="service-bookmark-link"
    >
      <div className="service-bookmark">
        <div className="bookmark-icon">
          <img src={service.icon} alt={service.title} />
        </div>
        <span className="bookmark-title">{service.title}</span>
      </div>
    </Link>
  ))}
</div>


      </div>
    </section>
  );
}
