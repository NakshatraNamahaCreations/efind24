import { useEffect, useRef, useState } from "react";
import "./Faq.css";
import faqImage from "../assets/icon/hero.jpg"; // replace with your image
import { FaPhoneAlt } from "react-icons/fa";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide trademark registration, objections handling, renewals, copyright registration, and complete brand protection services."
  },
  {
    q: "How much do your services cost?",
    a: "Our pricing depends on the scope of work and requirements. We offer flexible and transparent pricing tailored to your needs."
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary depending on the service, but most trademark registrations take between 6 to 12 months."
  },
  {
    q: "What’s your creative or legal process like?",
    a: "Our process includes consultation, documentation, filing, examination support, and post-registration assistance."
  },
  {
    q: "Do I own the rights to the final registration?",
    a: "Yes, once approved, you receive exclusive legal rights over your trademark or copyright."
  },
  {
    q: "Can changes be made after completion?",
    a: "Yes, modifications can be made through rectification, renewal, or amendment procedures."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".faq-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item, i) => {
      item.style.transitionDelay = `${i * 120}ms`; // stagger animation
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* LEFT FAQ */}
        <div className="faq-left" ref={containerRef}>
          {faqs.map((faq, i) => (
            <div className="faq-item" key={i}>
              <button
                className={`faq-question ${activeIndex === i ? "active" : ""}`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                {faq.q}
                <span className="faq-icon">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`faq-answer ${
                  activeIndex === i ? "open" : ""
                }`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT IMAGE */}
        <div className="faq-right">
            <h2>Frequently Asked Questions</h2>
            <p>Find clear answers to common questions about our trademark and copyright services, processes, timelines, and legal support.</p>
          <img src={faqImage} alt="FAQ Support" />
          <a href="+91 0987654321">
          <div className="faq-call">
            <FaPhoneAlt/>
          </div>
          </a>
        </div>

      </div>
    </section>
  );
}
