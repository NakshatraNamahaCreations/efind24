import "./VisionSection.css";
import { FaEye, FaBullseye, FaBalanceScale } from "react-icons/fa";

export default function VisionSection() {
  return (
    <section className="vm-section">
      <div className="vm-container">

        {/* SECTION HEADER */}
        <div className="vm-header">
            <span className="vm-kicker" data-aos="fade-up"><FaBalanceScale size={18}/> OUR GOAL</span>
          <h2 data-aos="fade-up">
            Our <span>Purpose</span>
          </h2>
          <p data-aos="fade-up">
            Guided by clarity, trust, and accessibility in everything we build.
          </p>
        </div>

        {/* CARDS */}
        <div className="vm-grid">

          {/* VISION */}
          <div className="vm-card vision" data-aos="fade-right">
            <div className="vm-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted digital platform that simplifies legal and
              intellectual property filings, making them accessible,
              transparent, and reliable for individuals and businesses across
              India.
            </p>

            <span className="vm-accent" />
          </div>

          {/* MISSION */}
          <div className="vm-card mission" data-aos="fade-left">
            <div className="vm-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to remove complexity from legal filings by offering
              clear guidance, structured processes, and dependable support—so
              our users can file with confidence and focus on growth.
            </p>

            <span className="vm-accent" />
          </div>

        </div>
      </div>
    </section>
  );
}
