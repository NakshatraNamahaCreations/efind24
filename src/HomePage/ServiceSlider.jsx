import React from "react";
import Slider from "react-slick";
import "./ServiceSlider.css";
import { Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const locations = [
  {
    title: "Trademark Registration",
    desc:
      "Trademark registration secures exclusive legal rights to your brand identity.",
      link:"/trademark-registration"
  },
  {
    title: "Trademark Objection",
    desc:
      "Trademark objection is a notice highlighting issues with your application.",
      link:"/trademark-objection"
  },
  {
    title: "Trademark Certificate",
    desc:
      "A trademark certificate is official proof of trademark registration.",
      link:"/trademark-certification"
  },
  {
    title: "Trademark Opposition",
    desc:
      "Trademark opposition is a third-party challenge to your trademark application.",
      link:"/trademark-opposition"
  },
  {
    title: "Trademark Hearing",
    desc:
      "Trademark hearing is a legal proceeding to resolve objections.",
      link:"/trademark-hearing"
  },
  {
    title: "Trademark Rectification",
    desc:
      "rademark rectification is the process of correcting or removing errors.",
      link:"/trademark-rectification"
  },
   {
    title: "Trademark Renewal",
    desc:
      "Trademark renewal is the process of extending the validity of a registered trademark.",
      link:"/trademark-renewal"
  },
  {
    title: "Expedited TM Registration",
    desc:
      "Expedited TM registration fast-tracks the trademark application for quicker approval.",
      link:"/expedited-trademark-registration"
  },
  {
    title: "Copyright Registration",
    desc:
      "Copyright registration legally protects your original creative work from unauthorized use.", 
      link:"/copyright-registration"
  },
  {
    title: "Copyright Objection",
    desc:
      "Copyright objection is a notice raised questioning the validity of a copyright application.",
      link:"/copyright-objection"
  },
];

export default function ServiceSlider() {
 const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,   // 🔥 REQUIRED (in ms)
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  pauseOnHover: true,   // 🔥 prevents stopping on hover
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
};

  return (
    <section className="solutions-section">
      <div className="solutions-container">

        {/* LEFT – SLIDER */}
        <div className="solutions-slider">
          <Slider {...settings}>
  {locations.map((item, index) => (
    <div key={index}>
      <div className="solution-card">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>

        <a href={item.link} className="details-link">
          Know More <FaArrowRight />
        </a>
      </div>
    </div>
  ))}
</Slider>

        </div>

        {/* RIGHT – CONTENT */}
        <div className="solutions-content">
          {/* <span className="solutions-label">Services</span> */}
          <h2>Comprehensive Trademark Services</h2>
          <p>
            Our comprehensive trademark services cover the complete lifecycle of your brand protection, including trademark search, application filing, objection handling, renewals, and ongoing compliance support. We help ensure your brand remains legally protected, distinctive, and secure as your business grows.
          </p>
        </div>

      </div>
    </section>
  );
}
