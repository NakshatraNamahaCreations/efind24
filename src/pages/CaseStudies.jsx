import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/lawyers-handshake-agreement.jpg';
import './CaseStudies.css';

function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const introTitleRef = useRef(null);
  const introDescriptionRef = useRef(null);
  const carouselWrapperRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const ctaContentRef = useRef(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Trademark Registration Success',
      category: 'Trademark',
      client: 'TechStart Innovations',
      challenge: 'A startup needed to protect their brand identity across multiple classes while operating on a limited budget.',
      solution: 'We conducted a comprehensive trademark search, identified potential conflicts, and successfully registered the trademark across 5 classes within 6 months.',
      result: 'Trademark registered successfully with no oppositions. Client saved 40% on registration costs through strategic class selection.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Copyright Objection Resolution',
      category: 'Copyright',
      client: 'Creative Media Solutions',
      challenge: 'Client received an objection notice for their copyright application, threatening their product launch timeline.',
      solution: 'Our team prepared a detailed response addressing all objections, provided supporting documentation, and represented the client in hearings.',
      result: 'Objection resolved within 3 months. Copyright granted, allowing product launch to proceed as scheduled.',
      year: '2023'
    },
    {
      id: 3,
      title: 'Trademark Opposition Victory',
      category: 'Trademark',
      client: 'Global Retail Chain',
      challenge: 'Facing opposition from a competitor claiming similarity to their existing trademark.',
      solution: 'Conducted extensive market research, gathered evidence of distinctiveness, and presented a strong case demonstrating no likelihood of confusion.',
      result: 'Opposition dismissed. Trademark registration approved, protecting client\'s brand in the Indian market.',
      year: '2024'
    },
    {
      id: 4,
      title: 'Expedited Trademark Registration',
      category: 'Trademark',
      client: 'E-commerce Platform',
      challenge: 'Client needed urgent trademark protection before a major product launch in 2 months.',
      solution: 'Utilized expedited registration process, coordinated with trademark office, and ensured all documentation was perfect to avoid delays.',
      result: 'Trademark registered in 45 days instead of standard 6-12 months. Product launch proceeded with full IP protection.',
      year: '2024'
    },
    {
      id: 5,
      title: 'Trademark Renewal & Portfolio Management',
      category: 'Trademark',
      client: 'Manufacturing Company',
      challenge: 'Multiple trademarks approaching expiration, risk of losing brand protection across product lines.',
      solution: 'Audited entire trademark portfolio, identified renewal deadlines, and processed renewals systematically across all classes.',
      result: 'All 12 trademarks renewed successfully. Portfolio maintained with zero lapses in protection.',
      year: '2023'
    },
    {
      id: 6,
      title: 'Copyright Registration for Software',
      category: 'Copyright',
      client: 'Software Development Firm',
      challenge: 'Complex software application requiring copyright protection with multiple components and third-party integrations.',
      solution: 'Prepared comprehensive application covering all software components, source code documentation, and user interface elements.',
      result: 'Copyright granted for entire software suite. Client secured exclusive rights to their proprietary technology.',
      year: '2024'
    }
  ];

  // Update cards per view based on screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1200) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  // Update carousel position
  useEffect(() => {
    if (carouselRef.current && containerRef.current) {
      const cardWidth = containerRef.current.offsetWidth / cardsPerView;
      const gap = 30;
      const translateX = currentIndex * (cardWidth + gap);
      carouselRef.current.style.transform = `translateX(-${translateX}px)`;
    }
  }, [currentIndex, cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, caseStudies.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex <= 0 ? Math.max(0, caseStudies.length - cardsPerView) : prevIndex - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements that need animation
    const elementsToObserve = [
      sectionTitleRef.current,
      introTitleRef.current,
      introDescriptionRef.current,
      carouselWrapperRef.current,
      ctaSectionRef.current,
      ctaContentRef.current
    ];

    elementsToObserve.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="case-studies-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Case Studies</h2>
        <div className="breadcrumb_watermark">Case  <br /> Studies</div>
      </section>

      <section className="case-studies-intro">
        <div className="container">
          <div className="intro-content">
            <h3 ref={introTitleRef} className="intro-title fade-in-up">Our Success Stories</h3>
            <p ref={introDescriptionRef} className="intro-description fade-in-up delay-1">
              Explore how we've helped businesses protect their intellectual property and navigate complex legal challenges. 
              Each case study represents our commitment to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="case-studies-section">
        <div className="container">
          <h2 ref={sectionTitleRef} className="section-title fade-in-up">Featured Case Studies</h2>
          <div ref={carouselWrapperRef} className="carousel-wrapper fade-in-up delay-2">
            <button className="carousel-nav carousel-prev custom-nav-btn" onClick={prevSlide} aria-label="Previous">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="arrow-icon arrow-prev">
                <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" fill="currentColor"></path>
              </svg>
            </button>
            <div className="carousel-container" ref={containerRef}>
              <div className="case-studies-carousel" ref={carouselRef}>
                {caseStudies.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    className="case-study-card"
                  >
                    <div className="case-study-card-inner">
                      <div className="case-study-header">
                        <span className="case-study-category">{caseStudy.category}</span>
                        <span className="case-study-year">{caseStudy.year}</span>
                      </div>
                      <h3 className="case-study-title">{caseStudy.title}</h3>
                      <div className="case-study-client">
                        <strong>Client:</strong> {caseStudy.client}
                      </div>
                      <div className="case-study-content">
                        <div className="case-study-section">
                          <h4 className="case-study-subtitle">Challenge</h4>
                          <p>{caseStudy.challenge}</p>
                        </div>
                        <div className="case-study-section">
                          <h4 className="case-study-subtitle">Solution</h4>
                          <p>{caseStudy.solution}</p>
                        </div>
                        <div className="case-study-section">
                          <h4 className="case-study-subtitle">Result</h4>
                          <p className="case-study-result">{caseStudy.result}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-nav carousel-next custom-nav-btn" onClick={nextSlide} aria-label="Next">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="arrow-icon arrow-next">
                <path d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z" fill="currentColor"></path>
              </svg>
            </button>
            <div className="carousel-dots">
              {Array.from({ length: Math.max(1, caseStudies.length - cardsPerView + 1) }).map((_, index) => (
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

      <section ref={ctaSectionRef} className="cta-section fade-in-up">
        <div className="container">
          <div ref={ctaContentRef} className="cta-content">
            <h3 className="cta-title">Ready to Protect Your Intellectual Property?</h3>
            <p className="cta-description">
              Let us help you navigate the complexities of trademark and copyright law. 
              Contact us today for a consultation.
            </p>
            <a href="/contact" className="cta-button">Get Started</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudies;

