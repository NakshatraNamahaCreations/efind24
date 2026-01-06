import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const servicesList = [
    { name: 'Trademark Registration', route: '/trademark-registration' },
    { name: 'Trademark Objection', route: '/trademark-objection' },
    { name: 'Trademark Certificate', route: '/trademark-certification' },
    { name: 'Trademark Opposition', route: '/trademark-opposition' },
    { name: 'Trademark Hearing', route: '/trademark-hearing' },
    { name: 'Trademark Rectification', route: '/trademark-rectification' },
    { name: 'Trademark Renewal', route: '/trademark-renewal' },
    { name: 'Expedited TM Registration', route: '/expedited-trademark-registration' },
    { name: 'Copyright Registration', route: '/copyright-registration' },
    { name: 'Copyright Objection', route: '/copyright-objection' }
  ];

  return (
    <footer className="footer">
      <div className="newsletter text-center ptb-140">
        <h3 className="tx-white">Subscribe to Our Newsletter!</h3>
        <p>We will only send you important updates and notices.</p>
        <div className="site-sub">
          <form action="#">
            <i className="ph-fill ph-envelope-open"></i>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" className="mt-btn">Subscribe Now</button>
          </form>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column footer-column--brand">
              <div className="footer-logo">
                <span className="logo-icon">⚖</span>
                <span className="logo-text">efind24</span>
              </div>
              <p className="footer-description">
                Our culture nurtures and strives to achieve innovation, creativity, legal expertise and is client focused. Daily, we enhance our entrepreneurial environment to be flexible and supportive.
              </p>
              <div className="footer-social">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><a href="#news">Blogs</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Trademark</h4>
              <ul className="footer-links">
                {servicesList.map((service, index) => (
                  <li key={index}>
                    <Link to={service.route}>{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-label">Address:</span>
                  <span className="contact-value">19/1, F5, First floor, KCD complex, CSI compound, 3rd Cross, Mission road, Bangalore - 560 027</span>
                </li>
                <li>
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">+91 7204063525</span>
                </li>
                <li>
                  <span className="contact-label">Phone:</span>
                  <span className="contact-value">080 4093 4599</span>
                </li>
                <li>
                  <span className="contact-label">Email:</span>
                  <span className="contact-value">manuvenkatareddyv123@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">© efind24. All Rights Reserved</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Faqs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



