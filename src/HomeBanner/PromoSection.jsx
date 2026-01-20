import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-box">
        <div className="promo-text">
          <h3>Need help with your filings?</h3>
          <p>
            Get expert assistance for GST, ITR, company registrations, and
            compliance. Submit your documents once and let our professionals
            handle the rest accurately and on time.
          </p>
        </div>

        <div className="promo-cta">
          <a href="/contact" className="promo-btn">
            Get Started <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
