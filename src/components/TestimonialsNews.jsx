import { useState, useEffect, useRef } from 'react';
import historyBg from '../assets/cards/history-bg.png';
import './TestimonialsNews.css';

function TestimonialsNews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      quote: "Exceptional legal expertise and support!",
      text: "The team provided outstanding legal representation for my intellectual property case. Their expertise and dedication helped me secure my trademark rights. I highly recommend their services to anyone in need of professional legal assistance.",
      author: "Rajesh Kumar",
      position: "Business Owner"
    },
    {
      quote: "Professional and result-oriented approach!",
      text: "I was facing a complex corporate law issue and the legal team guided me through every step with clarity and professionalism. Their strategic approach and attention to detail resulted in a favorable outcome for my business.",
      author: "Priya Sharma",
      position: "CEO, Tech Solutions"
    },
    {
      quote: "Reliable legal partners for all my needs!",
      text: "From contract drafting to dispute resolution, this law firm has been my trusted legal partner. Their team of skilled advocates understands business needs and provides practical solutions that work. Truly exceptional service.",
      author: "Amit Patel",
      position: "Entrepreneur"
    }
  ];

  const newsPosts = [
    {
      day: "21",
      month: "Mar",
      title: "New Intellectual Property Law Amendments",
      excerpt: "Recent updates to IP laws that impact trademark and patent filings...",
      link: "#"
    },
    {
      day: "15",
      month: "Feb",
      title: "Corporate Law Updates for 2025",
      excerpt: "Key changes in corporate governance and compliance requirements...",
      link: "#"
    },
    {
      day: "08",
      month: "Jan",
      title: "Employment Law Regulations Update",
      excerpt: "Important changes in employment law affecting hiring practices...",
      link: "#"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (sectionRef.current) {
        const elements = sectionRef.current.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="testimonials-news-section">
      <div className="testimonials-bg">
        <img src={historyBg} alt="Background" />
      </div>
      <div className="section-overlay"></div>
      <div className="container">
        <div className="testimonials-news-content">
          <div className="testimonials-column fade-in-left">
            <div className="testimonials-header">
              <h3 className="testimonials-title">Testimonial</h3>
              <div className="testimonials-nav">
                <i className="testimonials-nav-prev" onClick={prevTestimonial}>‹</i>
                <i className="testimonials-nav-next" onClick={nextTestimonial}>›</i>
              </div>
            </div>
            <div className="testimonials-divider"></div>
            <div className="testimonials-carousel">
              <div className="testimonials-viewport">
                <div 
                  className="testimonials-slides"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-item">
                      <div className="testimonial-item-outer">
                        <div className="testimonial-item-inner">
                          <div className="testimonial-content">
                            <p>
                              <span className="testimonial-quote">{testimonial.quote}</span><br />
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-info">
                          <span className="testimonial-author">{testimonial.author}</span>
                          <span className="testimonial-position">{testimonial.position}</span>
                        </div>
                        <div className="testimonial-gimmick"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="news-column fade-in-right">
            <div className="news-header">
              <h3 className="news-title">Recent News</h3>
            </div>
            <div className="news-list">
              {newsPosts.map((post, index) => (
                <article key={index} className="news-item">
                  <div className="blog-date-wrapper">
                    <span className="blog-date-day">{post.day}</span>
                    <span className="blog-date-month">{post.month}</span>
                  </div>
                  <div className="news-content">
                    <header className="post-header">
                      <div className="news-title-link">
                        <a href={post.link}>{post.title}</a>
                      </div>
                      <div className="news-excerpt">
                        {post.excerpt}
                        <div className="clear"></div>
                        <a href={post.link} className="excerpt-read-more">Read More</a>
                      </div>
                    </header>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsNews;

