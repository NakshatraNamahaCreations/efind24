import { useState, useEffect, useRef } from 'react';
import backgroundImage from '../assets/cards/man_background.jpg';
import './LegalPractices.css';

function LegalPractices() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState(new Set());

  const practices = [
    {
      title: "Awards and Accolades",
      items: [
        ["Climate Change", "Energy", "Energy & EPC Matters", "Energy Supply Transactions", "Natural Resources"],
        ["Environmental Compliance", "Oil & Natural Gas", "Regulation & Litigation", "Intellectual Property"]
      ]
    },
    {
      title: "Finance & Financial Services",
      items: [
        ["Banking Law", "Securities Regulation", "Investment Management", "Financial Planning"],
        ["Credit & Lending", "Capital Markets", "Derivatives", "Compliance"]
      ]
    },
    {
      title: "Health Care & Life Sciences",
      items: [
        ["Health Care Regulation", "Pharmaceutical Law", "Medical Device Compliance", "HIPAA Compliance"],
        ["FDA Regulations", "Clinical Trials", "Health Insurance", "Telemedicine"]
      ]
    },
    {
      title: "Insurance",
      items: [
        ["Insurance Regulation", "Claims Management", "Policy Review", "Risk Assessment"],
        ["Reinsurance", "Coverage Disputes", "Underwriting", "Compliance"]
      ]
    },
    {
      title: "Real Estate & REITs",
      items: [
        ["Property Transactions", "REIT Formation", "Commercial Leasing", "Zoning & Land Use"],
        ["Real Estate Finance", "Development Law", "Property Management", "Title Issues"]
      ]
    },
    {
      title: "Technology & Telecom",
      items: [
        ["IT Law", "Telecommunications", "Data Privacy", "Cybersecurity"],
        ["Software Licensing", "Cloud Computing", "E-commerce", "IP Protection"]
      ]
    },
    {
      title: "Transportation",
      items: [
        ["Aviation Law", "Maritime Law", "Railroad Regulation", "Logistics"],
        ["Transportation Safety", "Regulatory Compliance", "Freight & Shipping", "Infrastructure"]
      ]
    },
    {
      title: "Additional Industries",
      items: [
        ["Energy Law", "Environmental Law", "Construction Law", "Entertainment Law"],
        ["Sports Law", "Hospitality Law", "Retail Law", "Manufacturing"]
      ]
    }
  ];

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const leftColumn = practices.slice(0, 4);
  const rightColumn = practices.slice(4, 8);

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
    // <section ref={sectionRef} className="legal-practices-section" style={{ '--bg-image': `url(${backgroundImage})` }}>

      <section ref={sectionRef} className="legal-practices-section">
      <div className="container">
        <div className="legal-practices-content">
          <h2 className="legal-practices-title fade-in-up">LEGAL PRACTICES</h2>
          <p className="legal-practices-description fade-in-up">
            Our firm represents a variety of business, financial, institutional, and individual clients in a wide range of matters.
          </p>
          
          <div className="legal-practices-list">
            <div className="legal-practices-column fade-in-left">
              {leftColumn.map((practice, index) => (
                <div key={index} className="legal-practice-wrapper">
                  <div className="legal-practice-item">
                    <span className="legal-practice-name">{practice.title}</span>
                    <span className="legal-practice-separator"></span>
                    <button 
                      className={`legal-practice-toggle ${expandedItems.has(index) ? 'expanded' : ''}`}
                      onClick={() => toggleItem(index)}
                      aria-label={`Toggle ${practice.title}`}
                    >
                      {expandedItems.has(index) ? '−' : '+'}
                    </button>
                  </div>
                  <div className={`legal-practice-content ${expandedItems.has(index) ? 'expanded' : ''}`}>
                    <div className="legal-practice-list">
                      {practice.items.map((column, colIndex) => (
                        <ul key={colIndex}>
                          {column.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="legal-practices-column fade-in-right">
              {rightColumn.map((practice, index) => {
                const actualIndex = index + 4;
                return (
                  <div key={actualIndex} className="legal-practice-wrapper">
                    <div className="legal-practice-item">
                      <span className="legal-practice-name">{practice.title}</span>
                      <span className="legal-practice-separator"></span>
                      <button 
                        className={`legal-practice-toggle ${expandedItems.has(actualIndex) ? 'expanded' : ''}`}
                        onClick={() => toggleItem(actualIndex)}
                        aria-label={`Toggle ${practice.title}`}
                      >
                        {expandedItems.has(actualIndex) ? '−' : '+'}
                      </button>
                    </div>
                    <div className={`legal-practice-content ${expandedItems.has(actualIndex) ? 'expanded' : ''}`}>
                      <div className="legal-practice-list">
                        {practice.items.map((column, colIndex) => (
                          <ul key={colIndex}>
                            {column.map((item, itemIndex) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="legal-practices-footer">
            <a href="#" className="legal-practices-button">
              Find Out More
              <svg className="icon" width="21" height="12" viewBox="0 0 21 12">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 6.75L0 6.75L0 5.25L15 5.25V6.75Z"></path>
                <path d="M21 5.99986L14.25 11.196L14.25 0.803711L21 5.99986Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalPractices;

