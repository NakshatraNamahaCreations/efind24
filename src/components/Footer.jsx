import { Link } from 'react-router-dom';
import './Footer.css';
import { FaArrowUp, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


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

   const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <>
    <footer className="footer">
      {/* <div className="newsletter text-center ptb-140">
        <h3 className="tx-white">Subscribe to Our Newsletter!</h3>
        <p>We will only send you important updates and notices.</p>
        <div className="site-sub">
          <form action="#">
            <i className="ph-fill ph-envelope-open"></i>
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" className="mt-btn">Subscribe Now</button>
          </form>
        </div>
      </div> */}

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
                  <FaLinkedin size={20}/>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <FaTwitter size={20}/>
                </a>
                <a href="#" className="social-icon" aria-label="YouTube">
                  <FaYoutube size={20}/>
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
      </>
  );
}

export default Footer;



