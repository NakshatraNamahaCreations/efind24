import { useState, useEffect, useRef } from 'react';
import historyBg from '../assets/cards/history-bg.png';
import './TestimonialsNews.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  <section ref={sectionRef} className="tn-v2">
  <div className="container">
    <div className="tn-v2-grid">

      {/* TESTIMONIAL FEATURE */}
      <div className="tn-v2-testimonial fade-in-left">
        <span className="tn-eyebrow">Client Voices</span>
        <h3>What Our Clients Say</h3>

        <div className="tn-v2-quote-box">
          <p className="tn-v2-quote">
            “{testimonials[currentTestimonial].quote}”
          </p>
          <p className="tn-v2-text">
            {testimonials[currentTestimonial].text}
          </p>

          <div className="tn-v2-author">
            <strong>{testimonials[currentTestimonial].author}</strong>
            <span>{testimonials[currentTestimonial].position}</span>
          </div>
        </div>

        <div className="tn-v2-controls">
          <button onClick={prevTestimonial}><FaChevronLeft style={{marginTop:"4px"}}/></button>
          <button onClick={nextTestimonial}><FaChevronRight style={{marginTop:"4px"}}/></button>
        </div>
      </div>

      {/* NEWS TIMELINE */}
      <div className="tn-v2-news fade-in-right">
        <span className="tn-eyebrow">Insights</span>
        <h3>Legal Updates & News</h3>

        <div className="tn-v2-timeline">
          {newsPosts.map((post, index) => (
            <div key={index} className="tn-v2-item">
              <div className="tn-v2-date">
                <span>{post.day}</span>
                <small>{post.month}</small>
              </div>

              <div className="tn-v2-content">
                <h4>{post.title}</h4>
                <p>{post.excerpt}</p>
                <a href={post.link}>Read article →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


  );
}

export default TestimonialsNews;

