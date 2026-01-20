import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "./HomeBan.css";
import heroImg from "../assets/images/efind-4.png";
import justice from "../assets/cards/justice-scale1.png";
import { FaBalanceScale } from "react-icons/fa";

export default function HomeBan() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,       // animate only once
      offset: 120       // trigger slightly before visible
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrap">

        {/* HEADLINES */}
        <div className="hero-headings">
          <h1 data-aos="fade-up">
            SIMPLIFYING COMPLIANCE
          </h1>

          <div className="headline-row">
            <span data-aos="fade-up" data-aos-delay="150">
              <img src={justice} width={80} height={100} alt="Justice" />
            </span>
            <h1 data-aos="fade-up" data-aos-delay="300">
              EMPOWERING BUSINESSES
            </h1>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-left">
            <div className="play" data-aos="fade-up" data-aos-delay="400">
              <FaBalanceScale size={25}/>
            </div>

            <p data-aos="fade-up" data-aos-delay="550">
              At efind24, we simplify filing and compliance processes to help
              businesses stay legally secure and stress-free. 
            </p>

            <div className="pills">
              {[
                "Professional Services",
                "Legal Experts",
                "Transparent Pricing",
                "Process Driven"
              ].map((item, i) => (
                <span
                  key={i}
                  className="pill"
                  data-aos="fade-up"
                  data-aos-delay={700 + i * 120}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right" data-aos="fade-left" data-aos-delay="500">
            <img src={heroImg} alt="Team discussion" />
          <Link to="about" className="arrow-btn">↗</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
