import React, { useState, useEffect } from "react";
import "./ReviewSection.css";

const testimonials = [
  {
    quote: "Professional and result-oriented approach!",
    desc: "The team provided outstanding legal representation for my intellectual property case. Their expertise and dedication helped me secure my trademark rights. I highly recommend their services to anyone in need of professional legal assistance.",
    name: "Rajesh Kumar",
    role: "Founder, Tech Startup",
  },
  {
    quote: "Exceptional legal expertise and support!",
    desc: "I was facing a complex corporate law issue and the legal team guided me through every step with clarity and professionalism. Their strategic approach and attention to detail resulted in a favorable outcome for my business.",
    name: "Anita Sharma",
    role: "Managing Director",
  },
  {
    quote: "Reliable legal partners for all my needs!",
    desc: "From contract drafting to dispute resolution, this law firm has been my trusted legal partner. Their team of skilled advocates understands business needs and provides practical solutions that work. Truly exceptional service.",
    name: "Vikram Mehta",
    role: "Corporate Advisor",
  },
];

const news = [
  {
    date: "Jan 12, 2026",
    title: "Trademark Registration: Common Mistakes to Avoid",
  },
  {
    date: "Jan 05, 2026",
    title: "How Businesses Can Stay Compliant in 2026",
  },
  {
    date: "Dec 22, 2025",
    title: "Understanding Corporate Legal Risk Management",
  },
];



export default function ReviewSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="tn-section">
      <div className="tn-container">

        {/* TESTIMONIALS */}
        <div className="tn-testimonials">
          <span className="tn-label">Client Testimonials</span>
          <h2 className="tn-heading">What Our Clients Say</h2>

          <div className="testimonial-card">
            <h6 className="testimonial-quote">
              “{testimonials[active].quote}”
            </h6>

            {/* ✅ DESCRIPTION PART */}
            <p className="testimonial-desc">
              {testimonials[active].desc}
            </p>

            <div className="testimonial-author">
              <strong>{testimonials[active].name}</strong>
              <span>{testimonials[active].role}</span>
            </div>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* NEWS */}
        <div className="tn-news">
          <span className="tn-label">Latest Updates</span>
          <h2 className="tn-heading">Legal News & Insights</h2>

          <ul className="news-list">
            {news.map((item, index) => {
              const dateObj = new Date(item.date);
              const day = dateObj.getDate();
              const month = dateObj.toLocaleString("en-US", { month: "short" });
              const year = dateObj.getFullYear();

              return (
                <li key={index} className="news-item fade-up">
                  <div className="news-date-badge">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                    <span className="year">{year}</span>
                  </div>

                  <div className="news-content">
                    <h4>{item.title}</h4>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
