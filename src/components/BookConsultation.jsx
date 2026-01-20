import "./BookConsultation.css"




export default function BookConsultation(){
    return(
        <>
    <section className="consultation-section">
      <div className="container">
        <div className="consultation-grid">

          {/* LEFT CONTENT */}
          <div className="consultation-content fade-in-left">
            <span className="consultation-eyebrow">Free Consultation</span>
            <h2>Book a Consultation With Our Experts</h2>
            <p>
              Get clear legal guidance tailored to your situation. Our experienced
              professionals will help you understand your options, risks, and the
              best path forward — with complete confidentiality.
            </p>

            <ul className="consultation-points">
              <li>✔ 30-minute expert consultation</li>
              <li>✔ Clear legal & strategic advice</li>
              <li>✔ No obligation, completely confidential</li>
            </ul>
          </div>

          {/* RIGHT FORM */}
          <div className="consultation-form fade-in-right">
            <h4>Schedule Your Call</h4>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Briefly describe your requirement"></textarea>

              <button type="submit">Book Consultation</button>
            </form>
          </div>

        </div>
      </div>
    </section>
        </>
    )
}