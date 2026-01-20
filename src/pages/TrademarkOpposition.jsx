import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/icon/hero.jpg';
import './TrademarkOpposition.css';
import { FaBalanceScale } from 'react-icons/fa';

function TrademarkOpposition() {
  const [selectedService, setSelectedService] = useState('Opposition');
  const [formData, setFormData] = useState({
    applicationNumber: '',
    brandName: '',
    class: ''
  });
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  // Refs for scroll animations
  const infoPanelRef = useRef(null);
  const formPanelRef = useRef(null);
  const processMainTitleRef = useRef(null);
  const processContentRefs = useRef([]);
  const benefitCardsRefs = useRef([]);
  const relatedGuidesCardRef = useRef(null);
  const faqSectionRef = useRef(null);
  const comparisonTableRef = useRef(null);

  // Scroll animation observer
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
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    // Helper function to check if element is in viewport and observe
    const observeElement = (element) => {
      if (element) {
        // Check if already in viewport
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          // Add a small delay to ensure DOM is ready
          setTimeout(() => {
            element.classList.add('animated');
          }, 100);
        }
        observer.observe(element);
      }
    };

    // Observe all elements
    observeElement(infoPanelRef.current);
    observeElement(formPanelRef.current);
    observeElement(processMainTitleRef.current);
    observeElement(relatedGuidesCardRef.current);
    observeElement(faqSectionRef.current);
    observeElement(comparisonTableRef.current);
    
    processContentRefs.current.forEach((ref) => {
      observeElement(ref);
    });

    benefitCardsRefs.current.forEach((ref) => {
      observeElement(ref);
    });

    return () => {
      if (infoPanelRef.current) observer.unobserve(infoPanelRef.current);
      if (formPanelRef.current) observer.unobserve(formPanelRef.current);
      if (processMainTitleRef.current) observer.unobserve(processMainTitleRef.current);
      if (relatedGuidesCardRef.current) observer.unobserve(relatedGuidesCardRef.current);
      if (faqSectionRef.current) observer.unobserve(faqSectionRef.current);
      if (comparisonTableRef.current) observer.unobserve(comparisonTableRef.current);
      processContentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      benefitCardsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleLoadMoreFAQs = () => {
    setShowAllFAQs(!showAllFAQs);
  };

  return (
    <div className="trademark-opposition-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Opposition</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Opposition</div>
      </section>
      
      <section className="manage-track-section">
        <div className="container">
          <div className="manage-track-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="info-panel fade-in-left">
              <span className='manage-track-kicker'><FaBalanceScale/>TRADEMARK OPPOSITION</span>
              <h2 className="info-heading">
                <span className="underline-blue">Manage</span> & <span className="underline-orange">Track</span> your Trademark Application. Consult our Trademark Experts.
              </h2>
              <p className="info-description">
                AI-powered search and government-backed filings, handled end-to-end by India's most trusted compliance platform. Tailored for MSMEs, Corporates, and Global Founders.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                    </svg>
                  </div>
                  <p className="feature-text">100% Legal Validity & Govt. Filing Guarantee</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon magnifying">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                    </svg>
                  </div>
                  <p className="feature-text">AI-Powered Trademark Search & Filing</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon rocket">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2.81 14.12L5.64 11.3l-1.42-1.42L1.39 12.7c-.39.39-.39 1.02 0 1.41l1.42 1.01zm17.57-4.96l-1.59 1.59-1.42-1.42-2.87 2.87-1.42-1.42 2.87-2.87-1.42-1.42-1.59 1.59-4.24-4.24 5.66-5.66 4.24 4.24zm-6.36-6.36l1.42 1.42-7.07 7.07-1.42-1.42 7.07-7.07zM5.64 16.7l-1.42-1.42 1.41-1.41 1.42 1.41-1.41 1.42z" fill="white"/>
                    </svg>
                  </div>
                  <p className="feature-text">Dedicated Experts + Compliance Support</p>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon graph">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="white"/>
                    </svg>
                  </div>
                  <p className="feature-text">MSME Priority Pricing, Corporate Bundles & International Protection</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div ref={formPanelRef} className="form-panel fade-in-right">
              <div className="form-card">
                <h3 className="form-title">Trademark Services</h3>
                
                <div className="form-group">
                  <label className="form-label">Trademark Services</label>
                  <select 
                    className="form-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="Opposition">Opposition</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Certification">Trademark Certification</option>
                  </select>
                </div>

                {selectedService === 'Opposition' && (
                  <div className="form-info-message">
                    <p className="info-text">File a formal challenge with IP India against a trademark application before its registration, typically to protect your existing rights.</p>
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label">Application Number</label>
                  <input
                    type="text"
                    name="applicationNumber"
                    className="form-input"
                    placeholder="Application Number"
                    value={formData.applicationNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    className="form-input"
                    placeholder="Brand Name"
                    value={formData.brandName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Class</label>
                  <select 
                    className="form-select"
                    name="class"
                    value={formData.class}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Class</option>
                    <option value="1">Class 1 - Chemicals</option>
                    <option value="2">Class 2 - Paints</option>
                    <option value="3">Class 3 - Cosmetics</option>
                    <option value="4">Class 4 - Industrial Oils</option>
                    <option value="5">Class 5 - Pharmaceuticals</option>
                    <option value="6">Class 6 - Metals</option>
                    <option value="7">Class 7 - Machinery</option>
                    <option value="8">Class 8 - Hand Tools</option>
                    <option value="9">Class 9 - Electronics</option>
                    <option value="10">Class 10 - Medical Equipment</option>
                  </select>
                </div>

                <div className="form-buttons">
                  <button className="btn-get-quote">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-wrapper">
            {/* Left Column - Content Card */}
            <div className="process-content-card">
              <div className="card-body">
                {/* Author Info */}
                <div className="author-info-card">
                  <a href="https://www.indiafilings.com/expert/siranjeevi-b/" className="author-link">
                    <div className="author-content">
                      <img 
                        src="https://img.indiafilings.com/catalog/professionals/118381561.jpg" 
                        alt="SIRANJEEVI B" 
                        className="author-image"
                        loading="lazy"
                      />
                      <div className="author-details">
                        <span className="author-name">SIRANJEEVI B</span>
                        <span className="author-role">Business Advisor</span>
                      </div>
                    </div>
                  </a>
                  <div className="author-updated">
                    Updated on: <span className="update-date">Sep 18, 2024</span>
                  </div>
                </div>

                {/* Main Content */}
                <div ref={(el) => (processContentRefs.current[0] = el)} className="process-content-block fade-in-left">
                  <h1 ref={processMainTitleRef} className="content-main-title fade-in-left">Trademark Opposition</h1>
                  
                  <p className="content-block-text">
                    Once the registry accepts a trademark application, it undergoes a crucial step – publication in the government journal for four months. During this phase, any general public member can raise Opposition against the trademark. This opposition of trademark stage holds significant importance in determining whether the trademark can proceed toward registration or if valid objections need to be addressed. efind24 stands ready to offer expert assistance and guidance to navigate the process of trademark opposition in India, ensuring a seamless and effective resolution.
                  </p>

                  <h2 className="content-block-title">Trademark Opposition</h2>
                  <p className="content-block-text">
                    Under the Trademarks Act of 1999, trademarks can be registered in India. To do this, trademark owners must submit their application to the Registrar of Trademarks. Once the Registrar reviews the application, they will publicize the trademark in the official trademark journal. Any individual can challenge the registration of a trademark once it's listed in the Trademark Journal. Such challenges or oppositions should be directed to the Trademark Registry, where the original application was made. Should any opposition arise, the trademark registry will hold a trademark opposition hearing to resolve the issue.
                  </p>
                  <p className="content-block-text">
                    The procedures and guidelines for trademark opposition in India are outlined in the Trademarks Act, 1999 and the Trade Marks Rules, 2017.*
                  </p>

                  <h2 className="content-block-title">Initiation of Trademark Opposition -Eligibility</h2>
                  <ul className="content-list">
                    <li className="content-list-item">According to Section 21 of the Trademark Act, 'any person' can oppose a trademark, irrespective of their commercial or personal interest.</li>
                    <li className="content-list-item">A trademark can be countered by filed by a customer, member of the public or competitor, or any other person. Also, the person filing the trademark opposition needs to be a prior registered trademark owner.</li>
                    <li className="content-list-item">After a opposition of trademark is filed, both parties need to conclude whether the trademark should be abandoned or registered.</li>
                    <li className="content-list-item">Anyone who believes that the published mark might create confusion among the public can file for the Opposition while defending the trademark lies in the trademark registrant's hands.</li>
                  </ul>

                  <h2 className="content-block-title">Grounds For Trademark Opposition</h2>
                  <p className="content-block-text">
                    The Indian trademark law does not provide any specific grounds of opposition. There are various reasons a trademark opposition in India in may be opposed mentioned below:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">The trademark is similar or identical to an earlier or existing registered trademark.</li>
                    <li className="content-list-item">The trademark is devoid of distinctive character.</li>
                    <li className="content-list-item">The trademark is descriptive.</li>
                    <li className="content-list-item">The trademark registration application is made with bad faith.</li>
                    <li className="content-list-item">The trademark is customary in the current language and or in the established practices of a business.</li>
                    <li className="content-list-item">The trademark is likely to deceive the public or cause confusion.</li>
                    <li className="content-list-item">The trademark is contrary to the law or prevented by law.</li>
                    <li className="content-list-item">The trademark is prohibited under the Emblem and Names Act, 1950.</li>
                    <li className="content-list-item">The trademark contains matters that are likely to hurt any class or section of people's religious feelings.</li>
                  </ul>

                  <h2 className="content-block-title">Trademark Opposition Procedure</h2>
                  <p className="content-block-text">
                    The trademark opposition procedure is as follows:
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[0] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Initiating a Trademark Opposition</h3>
                      <p className="benefit-card-text">
                        Suppose an individual wishes for an opposition of trademark. In that case, they can submit their concerns to the Registrar within four months from the date the registration application was advertised in the trademark journal. This is done using Form TM-O, accompanied by the necessary fee.
                      </p>
                      <p className="benefit-card-text">
                        This opposition notice should detail the trademark registration application, information about the opposing party, and the reasons for Opposition. Within three months of receiving this, the Registrar will forward the applicant a copy of the opposition notice.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[1] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Stage One: Responding with a Counter statement</h3>
                      <p className="benefit-card-text">
                        Upon receiving the opposition notice, the applicant has a two-month window to submit a counterstatement using Form TM-O. This statement should clarify their stance. The Registrar will provide the opposing party with the applicant's counter statement within two months.
                      </p>
                      <p className="benefit-card-text">
                        If the applicant doesn't respond within the specified two months, their trademark registration application is deemed abandoned, halting the registration process.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[2] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Stage two: Presenting Evidence in the Opposition Process</h3>
                      <p className="benefit-card-text">
                        The party opposing the trademark must present Evidence backing their Opposition to the Registrar within two months of receiving the applicant's counterstatement. This Evidence should also be shared with the applicant.
                      </p>
                      <p className="benefit-card-text">
                        Subsequently, the applicant has two months to submit Evidence supporting their application after receiving the opposition evidence. This Evidence must be shared with both the Registrar and the opposing party.
                      </p>
                      <p className="benefit-card-text">
                        Optional Stage Three: If needed, the opposing party has another month to submit further Evidence after receiving the applicant's Evidence. This, too, must be shared with the applicant and the Registrar.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[3] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Trademark Opposition Hearing & Determining the Outcome of the Opposition</h3>
                      <p className="benefit-card-text">
                        The Registrar schedules a trademark opposition hearing after the evidence exchange, notifying both parties. Should the opposing party be absent, their Opposition is dismissed, leading to the trademark's registration. Conversely, if the applicant is absent, their application is considered abandoned and is dismissed. All written arguments provided by both sides will be taken into account.
                      </p>
                      <p className="benefit-card-text">
                        Post deliberation, the Registrar determines whether to register the trademark or dismiss the application. This decision is then communicated in writing to both parties at their specified addresses. This is the specific process involved in the trademark opposition hearing.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[4] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Conclusion & Final Steps in the Trademark Opposition Procedure</h3>
                      <p className="benefit-card-text">
                        If the Registrar rules in favor of the applicant, the trademark gets registered, and a certificate is issued. However, the trademark registration application is denied if the decision is in the opposing party's favor.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">Importance of Compliance with Filing Requirements</h2>
                  <p className="content-block-text">
                    Both the applicant and the opposing party must adhere to filing requirements during the opposition of trademark process, as failure to do so can have serious consequences:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Abandonment of Opposition:</strong> Failure to submit counter-reply or supporting documents on time may lead to the abandonment of the Opposition, allowing the trademark application to proceed.</li>
                    <li className="content-list-item"><strong>Removal of Trademark Application:</strong> If the applicant fails to respond or provide necessary Evidence, the trademark application may be removed, preventing registration.</li>
                  </ul>

                  <h2 className="content-block-title">Significance of Trademark Opposition in India</h2>
                  <p className="content-block-text">
                    The trademark opposition procedure in India ensures that only deserving trademarks are granted registration. It facilitates public participation and prevents conflicting trademarks from coexisting in the market. Timely adherence to timelines and filing requirements is crucial for effective case presentation.
                  </p>
                  <p className="content-block-text">
                    If you're facing trademark opposition or considering opposing a trademark, consult efind24 for expert guidance and support throughout the process.
                  </p>

                  <h2 className="content-block-title">efind24: Your Partner in Trademark Opposition</h2>
                  <p className="content-block-text">
                    <strong>efind24 offers comprehensive assistance in the trademark opposition process in India:</strong> Expert Guidance: Our experienced professionals, well-versed in trademark laws, provide expert guidance and advice throughout the opposition process, ensuring a well-founded and effective opposition.
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Expert Guidance:</strong> Our experienced professionals, well-versed in trademark laws, provide expert guidance and advice throughout the process of trademark opposition procedure, ensuring a well-founded and effective opposition.</li>
                    <li className="content-list-item"><strong>Thorough Trademark Search:</strong> Before initiating the Opposition, efind24 conducts a meticulous <a href="https://www.indiafilings.com/trademark-search" className="content-link">trademark search</a> to identify similar or conflicting trademarks. This step is critical for building a strong case and avoiding potential issues.</li>
                    <li className="content-list-item"><strong>Document Preparation:</strong> Our experts assist in preparing all necessary documents required for filing the trademark opposition, ensuring accuracy and compliance with legal requirements.</li>
                    <li className="content-list-item"><strong>Efficient Filing:</strong> efind24 handles the entire filing process, submitting the Opposition to the Trademark Registry on your behalf and handling trademark opposition hearing. This streamlines the process and ensures timely submission.</li>
                    <li className="content-list-item"><strong>Timely Updates:</strong> Throughout the process, we provide regular updates, keeping you informed about the progress of your trademark opposition.</li>
                  </ul>
                  <p className="content-block-text">
                    By choosing efind24, individuals and businesses can navigate the opposition of trademark process efficiently, increasing the likelihood of successfully protecting their valuable trademark rights in India. Trust efind24 to be your reliable and trusted partner for all trademark-related matters, including trademark search, <a href="https://www.indiafilings.com/trademark-registration" className="content-link">trademark registration,</a> <a href="https://www.indiafilings.com/trademark-objection" className="content-link">trademark objections,</a> <a href="https://www.indiafilings.com/trademark-renewal" className="content-link">trademark renewal,</a> and more.
                  </p>

                  <h2 className="content-block-title">Difference between Trademark Objection and Trademark Opposition</h2>
                  <p className="content-block-text">
                    People often get confused between trademark objection and trademark opposition. We have a table to explain the fundamental difference between the trademark objection and trademark opposition.
                  </p>

                  <div ref={comparisonTableRef} className="comparison-table-card fade-in-up">
                    <div className="card-table scrollable-x-auto">
                      <table className="comparison-table">
                        <thead>
                          <tr className="table-header-row">
                            <th className="table-header-cell"><strong>Trademark Objection</strong></th>
                            <th className="table-header-cell"><strong>Trademark Opposition</strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-row-alt">
                            <td className="table-cell">A Trademark Examiner issues trademark objection.</td>
                            <td className="table-cell-alt">A trademark gets opposition from a third party.</td>
                          </tr>
                          <tr className="table-row-alt">
                            <td className="table-cell">One does not need to pay fees.</td>
                            <td className="table-cell-alt">Fees are required to be submitted along with the reply to the opposition.</td>
                          </tr>
                          <tr className="table-row-alt">
                            <td className="table-cell">A reply should be submitted within one month.</td>
                            <td className="table-cell-alt">A reply should be submitted within three months(which may exceed not more than one month)</td>
                          </tr>
                          <tr className="table-row-alt">
                            <td className="table-cell">Trademark objection is a part of the registration process.</td>
                            <td className="table-cell-alt">A trademark opposition is a different process.</td>
                          </tr>
                          <tr className="table-row-alt">
                            <td className="table-cell">If there is no response from the applicant, it leads to the removal of the trademark.</td>
                            <td className="table-cell-alt">Similar is the case with trademark opposition; no response will lead to the removal of the trademark.</td>
                          </tr>
                          <tr className="table-row-alt">
                            <td className="table-cell">An appeal can be made after the rejection.</td>
                            <td className="table-cell-alt">An appeal can be made after the judgment is passed.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Related Guides */}
            <div className="right-column-cards">
              {/* Related Guides Card */}
              <div ref={relatedGuidesCardRef} className="related-guides-card fade-in-right">
                <div className="card-header">
                  <h2 className="guides-title">Related Guides</h2>
                </div>
                <div className="card-body">
                  <div className="guides-list">
                    <a href="#" className="guide-link">Online Trademark Search in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Class</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Procedure for Trademark Opposition in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Patent vs Copyright vs Trademark</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Reasons to Obtain Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Opposition and Timelines for Trademark opposition in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Who can file trademark opposition?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="faq-section fade-in-up">
        <div className="container">
          <div className="faq-wrapper">
            <h2 className="faq-title">FAQ's on Trademark Opposition</h2>
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3162' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3162')}
                >
                  <span className="accordion-question">What exactly is trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3162' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3162' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3162' ? 'active' : ''}`} id="accordion_3162_content">
                  <div className="page-content">
                    Trademark opposition is a legal challenge against the registration of a trademark, initiated during its four-month publication period in the official government journal. This allows any member of the public to object to the trademark if they believe it infringes on their rights or is otherwise unsuitable for registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3163' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3163')}
                >
                  <span className="accordion-question">Who is eligible to file a trademark opposition in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3163' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3163' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3163' ? 'active' : ''}`} id="accordion_3163_content">
                  <div className="page-content">
                    Any individual or entity, including customers, competitors, or any member of the public, can oppose a trademark application. The opposer does not need to have a prior registered trademark or a direct commercial interest in the matter.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3164' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3164')}
                >
                  <span className="accordion-question">Where should one file a trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3164' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3164' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3164' ? 'active' : ''}`} id="accordion_3164_content">
                  <div className="page-content">
                    A trademark opposition must be filed at the same Trademark Registry office where the original trademark application was submitted. This ensures that the opposition is directed to the correct jurisdiction for the matter at hand.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3165' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3165')}
                >
                  <span className="accordion-question">What are the grounds for opposing a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3165' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3165' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3165' ? 'active' : ''}`} id="accordion_3165_content">
                  <div className="page-content">
                    Grounds include similarity to an existing trademark, lack of distinctiveness, descriptiveness, bad faith, customary usage, likelihood of confusion, illegality, prohibition under the Emblem and Names Act, 1950, and potential to offend religious sentiments.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3166' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3166')}
                >
                  <span className="accordion-question">What is the first step in initiating a trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3166' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3166' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3166' ? 'active' : ''}`} id="accordion_3166_content">
                  <div className="page-content">
                    The first step is to file a notice of opposition using Form TM-O within four months of the trademark's publication in the journal.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3167' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3167')}
                >
                  <span className="accordion-question">What happens after an opposition notice is filed?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3167' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3167' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3167' ? 'active' : ''}`} id="accordion_3167_content">
                  <div className="page-content">
                    The Registrar sends a copy of the opposition notice to the trademark applicant, who then has two months to respond with a counterstatement.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3168' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3168')}
                >
                  <span className="accordion-question">What if the applicant doesn't respond to the opposition notice?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3168' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3168' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3168' ? 'active' : ''}`} id="accordion_3168_content">
                  <div className="page-content">
                    If the applicant fails to respond within two months, their application is deemed abandoned.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3169' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3169')}
                >
                  <span className="accordion-question">What evidence is required in a trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3169' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3169' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3169' ? 'active' : ''}`} id="accordion_3169_content">
                  <div className="page-content">
                    Both parties need to submit evidence supporting their case to the Registrar and each other within specified time frames.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3170' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3170')}
                >
                  <span className="accordion-question">How is a trademark opposition resolved?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3170' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3170' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3170' ? 'active' : ''}`} id="accordion_3170_content">
                  <div className="page-content">
                    After evidence submission and a hearing, the Registrar makes a decision to either register the trademark or dismiss the application based on the arguments and evidence presented.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3171' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3171')}
                >
                  <span className="accordion-question">What happens if the Registrar rules in favor of the trademark application?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3171' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3171' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3171' ? 'active' : ''}`} id="accordion_3171_content">
                  <div className="page-content">
                    The trademark gets registered, and a registration certificate is issued to the applicant.
                  </div>
                </div>
              </div>

              {/* Hidden FAQs that show on Load More */}
              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3172' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3172')}
                >
                  <span className="accordion-question">What are the consequences of not complying with filing requirements?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3172' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3172' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3172' ? 'active' : ''}`} id="accordion_3172_content">
                  <div className="page-content">
                    Failure to meet deadlines or submit necessary documents can result in the opposition being abandoned or the trademark application being removed.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3173' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3173')}
                >
                  <span className="accordion-question">Why is the trademark opposition process important?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3173' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3173' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3173' ? 'active' : ''}`} id="accordion_3173_content">
                  <div className="page-content">
                    It ensures that only deserving trademarks are registered, facilitating public participation and preventing market confusion.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3174' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3174')}
                >
                  <span className="accordion-question">How can efind24 assist in the trademark opposition process?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3174' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3174' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3174' ? 'active' : ''}`} id="accordion_3174_content">
                  <div className="page-content">
                    efind24 offers expert guidance, conducts thorough trademark searches, prepares necessary documents, handles filing, and provides timely updates.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3175' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3175')}
                >
                  <span className="accordion-question">What is the significance of a thorough trademark search by efind24?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3175' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3175' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3175' ? 'active' : ''}`} id="accordion_3175_content">
                  <div className="page-content">
                    It helps identify similar or conflicting trademarks, critical for building a strong opposition case and avoiding potential issues.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3176' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3176')}
                >
                  <span className="accordion-question">How does efind24 streamline the filing process?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3176' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3176' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3176' ? 'active' : ''}`} id="accordion_3176_content">
                  <div className="page-content">
                    efind24 submits the opposition on behalf of clients, ensuring accuracy and timely submission to the Trademark Registry.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3177' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3177')}
                >
                  <span className="accordion-question">Can efind24 help if I'm considering opposing a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3177' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3177' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3177' ? 'active' : ''}`} id="accordion_3177_content">
                  <div className="page-content">
                    Yes, efind24 provides expert guidance and support throughout the opposition process, from initial consultation to final resolution.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3178' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3178')}
                >
                  <span className="accordion-question">What other trademark services does efind24 offer?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3178' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3178' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3178' ? 'active' : ''}`} id="accordion_3178_content">
                  <div className="page-content">
                    efind24 also assists with trademark registration, objections, renewals, and more, providing comprehensive trademark support.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3179' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3179')}
                >
                  <span className="accordion-question">How important is timely adherence to timelines in trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3179' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3179' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3179' ? 'active' : ''}`} id="accordion_3179_content">
                  <div className="page-content">
                    It's crucial for effective case presentation and avoiding the abandonment of the opposition or the removal of the trademark application.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3180' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3180')}
                >
                  <span className="accordion-question">Why choose efind24 for trademark opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3180' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3180' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3180' ? 'active' : ''}`} id="accordion_3180_content">
                  <div className="page-content">
                    With experienced professionals and a commitment to thoroughness and efficiency, efind24 increases the likelihood of a successful outcome.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3181' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3181')}
                >
                  <span className="accordion-question">How does efind24 keep clients informed during the opposition process?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3181' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3181' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3181' ? 'active' : ''}`} id="accordion_3181_content">
                  <div className="page-content">
                    Clients receive regular updates about the progress of their trademark opposition, ensuring transparency and engagement.
                  </div>
                </div>
              </div>

              <button className="btn btn-outline btn-primary load-more-faq-btn" onClick={handleLoadMoreFAQs}>
                {showAllFAQs ? 'Show Less' : 'Load More'}
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default TrademarkOpposition;

