import React, { useEffect, useRef } from "react";
import "./BigText.css";
import heroImg from "../assets/cards/justice-scale1.png"; // your image

const titleWords = [
  "MAKING EASY",
  "FILING",
  "SIMPLE &",
  "STRESS FREE",
  
];

export default function BigText() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const words = sectionRef.current.querySelectorAll(".word-animate");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((word) => word.classList.add("in-view"));
          observer.disconnect(); // animate once
        }
      },
      {
        threshold: 0.9,
        rootMargin: "0px 0px -80px 0px"
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="easy-filing-hero" ref={sectionRef}>
      <div className="hero-container">

        {/* BIG TITLE */}
        <h1 className="home-title">
          {titleWords.map((word, index) => (
            <span
              key={index}
              className="word-animate"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {word}
            </span>
          ))}

         
          <img
            src={heroImg}
            alt="Justice Scale"
            className="hero-image"
          />
        </h1>

        {/* SUBTITLE */}
        {/* <p className="hero-subtitle">
          We simplify filing and compliance processes to help businesses stay
          legally secure and stress-free with expert-led, transparent services.
        </p> */}

      </div>
    </section>
  );
}
