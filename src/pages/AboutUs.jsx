import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import bannerImage from '../assets/images/businessman-reading-contract-closeup.jpg';
import aboutImage from '../assets/images/aboutimage.avif';
import woodenImage from '../assets/icon/wooden-removebg-preview.png';
import pageTitleImage from '../assets/icon/page-title-img.png';
import './AboutUs.css';

function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const whatWeDoImageRef = useRef(null);
  const whatWeDoContentRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const teamCardLeftRef = useRef(null);
  const teamCardRightRef = useRef(null);
  
  const testimonials = [
    {
      quote: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
      name: "Mehedi Hasan",
      title: "Founder & CEO"
    },
    {
      quote: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
      name: "Judith Hawkins",
      title: "Senior Associate"
    },
    {
      quote: "Legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all between was",
      name: "Douglas Ray",
      title: "Accountant"
    },
    {
      quote: "Culture nurtures and strives, creativity, legal expertise and is client focused we enhance entrepreneurial environment to be flexible supportive, allowing our lawyers introduced rather to totally all and feel the charm of existence",
      name: "Johnathan Kennedy",
      title: "Office Manager"
    }
  ];

  const cardWidth = 445.75;
  const cardMargin = 30;
  const totalCardWidth = cardWidth + cardMargin;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - 1);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - 1);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const padding = 60; // Account for container padding
        const availableWidth = containerWidth - (padding * 2);
        
        // Calculate offset to center the card
        const centerOffset = (availableWidth - cardWidth) / 2;
        
        // Calculate the position of the current card
        const cardPosition = currentIndex * totalCardWidth;
        
        // Calculate translateX to center the card
        let translateX = cardPosition - centerOffset;
        
        // For the last card, ensure it doesn't scroll too far
        const maxCardPosition = (testimonials.length - 1) * totalCardWidth;
        const maxTranslate = maxCardPosition - centerOffset;
        
        // Clamp the translation to ensure last card is visible
        if (currentIndex === testimonials.length - 1) {
          translateX = Math.min(translateX, maxTranslate);
        }
        
        // Ensure we don't scroll to negative values
        translateX = Math.max(0, translateX);
        
        carouselRef.current.style.transform = `translateX(-${translateX}px)`;
      }
    };

    updateCarousel();
    
    window.addEventListener('resize', updateCarousel);
    return () => window.removeEventListener('resize', updateCarousel);
  }, [currentIndex, totalCardWidth, cardWidth, testimonials.length]);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.2 }
    );

    const refs = [
      whatWeDoImageRef.current,
      whatWeDoContentRef.current,
      testimonialsSectionRef.current,
      teamCardLeftRef.current,
      teamCardRightRef.current
    ];

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="about-us-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">About Us</h2>
        <div className="breadcrumb_watermark">About Us</div>
      </section>
      <section className="what-we-do-section" style={{ '--bg-image': `url(${woodenImage})` }}>
        <div className="container">
          <div className="what-we-do-content">
            <div ref={whatWeDoImageRef} className="what-we-do-image fade-in-left">
              <img src={aboutImage} alt="What we do" />
            </div>
            <div ref={whatWeDoContentRef} className="tile-wrapper__content fade-in-right">
              <h4 className="headtitle">Who we are</h4>
              <h3>With our recognized leadership in applying legal service and technology innovation, we deliver commercial advantage to clients.</h3>
              <p>Our lawyers offer clients a range of integrated global capabilities, including some of the world's most active M&A, real estate, financial services, litigation and corporate risk practices.</p>
            </div>
          </div>
        </div>
      </section>
      <AboutSection />
      <section ref={testimonialsSectionRef} className="testimonials-customers-section page-title-area fade-in-left" style={{ backgroundImage: `url(${pageTitleImage})` }}>
        <div className="section-overlay"></div>
        <div className="container">
          <h2 className="testimonials-customers-title">Trusted by Our Customers</h2>
          <div className="testimonials-carousel-wrapper">
            <button className="carousel-nav carousel-prev" onClick={prevSlide} aria-label="Previous">
              ‹
            </button>
            <div className="testimonials-carousel-container" ref={containerRef}>
              <div className="testimonials-customers-slider" ref={carouselRef}>
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="single-testimonial bg-dark-white owl-item">
                    <div className="testimonial-rating">
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star filled">★</span>
                      <span className="star empty">☆</span>
                    </div>
                    <div className="testimonial-content">
                      <p>"{testimonial.quote}"</p>
                      <h4 className={`testimonial-author heading-style2 ${index === 3 ? 'flaticon-quote' : ''}`}>
                        {testimonial.name}
                      </h4>
                      <span className="author-title">{testimonial.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-nav carousel-next" onClick={nextSlide} aria-label="Next">
              ›
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h4 className="team-label">Our Team</h4>
            <h2 className="team-title">Meet Our Legal Experts</h2>
          </div>
          <div className="team-grid">
            <div ref={teamCardLeftRef} className="team-card fade-in-left">
              <div className="team-card-header">
                <h3 className="team-member-name">Vijaya Simha Reddy.D.V</h3>
              </div>
              <div className="team-card-body">
                <p className="team-member-description">
                  "With over two decades of experience and practice in service matters, Mr Vijaya Simha Reddy.D.V has represented clients including Individuals, High ranking Government Officials, and various Departments of the Government, in various fora including the Karnataka State Administrative Tribunal, Central Administrative Tribunal, Karnataka Lokayukta, High Court of Karnataka and the Supreme Court of India.
                </p>
                <div className="team-member-qualifications">
                  <h5 className="qualification-title">Educational Qualification:</h5>
                  <ul className="qualification-list">
                    <li>BBM : Bangalore University</li>
                    <li>LLB (3 years): University Law College</li>
                  </ul>
                  <div className="bar-council">
                    <strong>Bar Council Enrolment</strong>
                    <p>Bangalore, Karnataka - 2005</p>
                  </div>
                </div>
              </div>
            </div>
            <div ref={teamCardRightRef} className="team-card fade-in-right">
              <div className="team-card-header">
                <h3 className="team-member-name">Manu Venkata Reddy V</h3>
              </div>
              <div className="team-card-body">
                <p className="team-member-description">
                  Mr. Manu is a legal professional with extensive experience in Civil, Intellectual Property litigation, Arbitration, Commercial litigation and Commercial Transactory work.
                </p>
                <div className="team-member-qualifications">
                  <h5 className="qualification-title">Educational Qualification:</h5>
                  <ul className="qualification-list">
                    <li>BA.LLB (5 years): University Law College, Bangalore</li>
                    <li>LL.M (specialising in Intellectual Property Law and Commercial Law) Queen Mary University, London</li>
                  </ul>
                  <div className="bar-council">
                    <strong>Bar Council Enrollment</strong>
                    <p>Bangalore, Karnataka - 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;

