import React from "react";
import "./StorySection.css";

export default function StorySection() {
  return (
    <section className="about-editorial">
      <div className="about-wrap">

        {/* LEFT */}
        <div className="about-intro-block">
          {/* <span className="about-eyebrow">About Us</span> */}
          <h2 className="about-heading">
            Trusted Expertise for Legal & Compliance Matters
          </h2>
           <p className="about-lead">
            We support businesses through every stage of their legal and
            compliance journey with structured processes, accurate execution,
            and dependable guidance.
          </p>
        </div>

        {/* RIGHT */}
        <div className="about-content-block">

         

          <div className="about-points">

            <div className="about-point">
              <h4>Built on Experience</h4>
              <p>
                Our team brings deep industry knowledge and hands-on experience
                across company filings, trademarks, and regulatory compliance.
              </p>
            </div>

            <div className="about-point">
              <h4>Process-Driven Approach</h4>
              <p>
                Every engagement follows a clear, documented process to ensure
                accuracy, accountability, and timely completion.
              </p>
            </div>

            <div className="about-point">
              <h4>Focused on Long-Term Trust</h4>
              <p>
                We act as a long-term compliance partner, helping businesses
                remain aligned with evolving regulations as they grow.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
