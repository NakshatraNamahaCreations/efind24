import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/close-up-law-hammer.jpg';
import './TrademarkRectification.css';

function TrademarkRectification() {
  const [selectedService, setSelectedService] = useState('Rectification');
  const [formData, setFormData] = useState({
    applicationNumber: '',
    brandName: '',
    class: ''
  });
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);
  const [showAllDocuments, setShowAllDocuments] = useState(false);

  // Refs for scroll animations
  const infoPanelRef = useRef(null);
  const formPanelRef = useRef(null);
  const processMainTitleRef = useRef(null);
  const processContentRefs = useRef([]);
  const benefitCardsRefs = useRef([]);
  const relatedGuidesCardRef = useRef(null);
  const faqSectionRef = useRef(null);

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

  const handleLoadMore = () => {
    setShowAllDocuments(!showAllDocuments);
  };

  return (
    <div className="trademark-rectification-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Rectification</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Rectification</div>
      </section>
      
      <section className="manage-track-section">
        <div className="container">
          <div className="manage-track-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="info-panel fade-in-left">
              <h2 className="info-heading">
                <span className="underline-blue">Manage</span> & <span className="underline-orange">Track</span> your <span className="underline-orange">Trademark</span> Application. Consult our Trademark Experts.
              </h2>
              <p className="info-description">
                AI-powered search and government-backed filings, handled end-to-end by efind24's most trusted compliance platform. Tailored for MSMEs, Corporates, and Global Founders.
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
                    <option value="Rectification">Rectification</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Certification">Trademark Certification</option>
                    <option value="Trademark Hearing">Trademark Hearing</option>
                  </select>
                </div>

                {selectedService === 'Rectification' && (
                  <div className="form-info-message">
                    <p className="info-text">Drafting and filing of rectification for applications marked "Formalities Check Fail" by the Trademark Examiner. Exclusive pricing for applications filed through efind24. Inclusive of government fees and taxes.</p>
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
                  <a href="#" className="author-link">
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
                    Updated on: <span className="update-date">Mar 25, 2025</span>
                  </div>
                </div>

                {/* Main Content */}
                <div ref={(el) => (processContentRefs.current[0] = el)} className="process-content-block fade-in-left">
                  <h1 ref={processMainTitleRef} className="content-main-title fade-in-left">Trademark Rectification</h1>
                  
                  <p className="content-block-text">
                    A trademark is a distinct symbol or emblem that sets one product apart, akin to an individual's unique birthmark. To establish the trademark's uniqueness and exclusivity, it must be registered by the regulations outlined in the Trademark Act and Rules. When applying for a trademark or even after its registration, if the applicant discovers minor errors or deems alterations necessary, they can initiate a rectification of trademark process with the Registrar to address these issues. At efind24, we offer comprehensive Trademark Rectification services to guide clients through this vital aspect of trademark management.
                  </p>

                  <p className="content-block-text">
                    Take control of your trademark's accuracy and exclusivity today. Contact us for expert Trademark Rectification services.
                  </p>

                  <h2 className="content-block-title">Trademark Rectification</h2>
                  <p className="content-block-text">
                    Trademark Rectification involves correcting errors or omissions in the trademark register that occur after the initial registration of trademarks. This process addresses situations where a trademark may have been erroneously registered or remains in the register even after expiration. Such cases necessitate rectification, and the Indian Trademark Act contains provisions for this purpose. Chapter 7 of the Trademark Act of 1999 outlines these rectification provisions.
                  </p>
                  <p className="content-block-text">
                    According to Section 57 of the Act, any individual associated with trademark registration or adversely affected has the right to seek rectification. It's important to note that not all situations are eligible for rectification, and in some cases, rectification can result in the cancellation of the trademark registration. Therefore, this process should be approached with caution.
                  </p>

                  <h2 className="content-block-title">Reasons for trademark rectification</h2>
                  <p className="content-block-text">
                    The reasons for rectification of trademark can be categorized as follows:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Errors in the Application Form:</strong> This includes instances of inaccuracies in the application form submitted for trademark registration, such as providing the wrong address or contact information.</li>
                    <li className="content-list-item"><strong>Incorrect Information on Trademark Details:</strong> Rectification may be necessary when there are errors or inaccuracies in the information related to the trademark's class, description, classification, or design.</li>
                    <li className="content-list-item"><strong>Inaccurate Information at Registration:</strong> Situations may arise where the information provided during the initial registration of the trademark was incorrect, requiring rectification.</li>
                    <li className="content-list-item"><strong>Updates to Application Information:</strong> Changes in application details, such as alterations to the applicant's information or address, can also necessitate rectification.</li>
                    <li className="content-list-item"><strong>Non-Use After Five Years and Three Months:</strong> Trademarks that have not been used for five years and three months may become eligible for removal from the trademark register.</li>
                    <li className="content-list-item"><strong>Registrar-Approved Grounds:</strong> Any additional grounds for rectification that the Registrar has approved and prescribed as valid reasons for rectification.</li>
                    <li className="content-list-item"><strong>Aggrieved Party's Application:</strong> In cases where an aggrieved party applies for rectification or removal of a trademark, the Registrar may issue an order for rectification based on the application's merits.</li>
                  </ul>
                  <p className="content-block-text">
                    These various reasons highlight the need for trademark rectification, which aims to ensure the accuracy and integrity of trademark information by legal requirements and to address errors or discrepancies that may arise during the trademark registration process.
                  </p>

                  <h2 className="content-block-title">Who can File a Trademark Rectification Application?</h2>
                  <p className="content-block-text">
                    The following individuals or entities can file an application for Trademark Rectification as per the Trademark Act:
                  </p>

                  <h3 className="content-subtitle">Person Aggrieved</h3>
                  <p className="content-block-text">
                    Any individual who feels aggrieved by factors such as the similarity of the mark or the registration of a mark for malicious purposes is eligible to initiate the process of rectification filed in trademark. This can be done at any office with the appropriate jurisdiction.
                  </p>

                  <h3 className="content-subtitle">Trademark Holder</h3>
                  <p className="content-block-text">
                    When the trademark holder identifies mistakes or omissions related to their own trademark, they have the right to address these issues and file for rectification. It's important to note that an aggrieved person is not the only one permitted to file for rectification under trademark law.
                  </p>

                  <h3 className="content-subtitle">Third Party</h3>
                  <p className="content-block-text">
                    Any third-party individual or entity, distinct from the trademark holder or the aggrieved person, can also initiate the process of Trademark Rectification. This is applicable in cases where there has been a misunderstanding or where the use of a trademark infringes upon societal interests or a part of society. It's essential to understand that entities can pursue rectification beyond just those who are directly affected or hold the trademark. A third party has the option to apply for rectification.
                  </p>

                  <h2 className="content-block-title">Forms for Rectification of Trademark</h2>
                  <p className="content-block-text">
                    You can request rectification through three distinct application processes, depending on your circumstances:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Correction or Cancellation Requested by the Trademark Proprietor:</strong> If the trademark proprietor wishes to initiate rectification, they should submit the "TM-16" form, accompanied by the necessary payments and fees.</li>
                    <li className="content-list-item"><strong>Rectification or Cancellation Initiated by the Registrar:</strong> When the registrar initiates rectification, the appropriate form to use is "TM-M," along with the relevant fees as prescribed.</li>
                    <li className="content-list-item"><strong>Rectification or Cancellation Initiated by Any Aggrieved Party:</strong> If an aggrieved party seeks rectification or cancellation of a trademark, they should complete the "TM-26" form and submit it along with the required fees.</li>
                  </ul>
                  <p className="content-block-text">
                    These distinct application processes of rectification filed in trademark ensure that individuals or entities with different roles and interests in rectification of trademark can initiate the necessary procedures as per their specific circumstances and requirements.
                  </p>

                  <h2 className="content-block-title">Jurisdiction for Trademark Rectification Applications in India</h2>
                  <p className="content-block-text">
                    The applicant can submit a Trademark Rectification application to the appropriate authority, which may include the Trademark Registry with jurisdiction, the Appellate Board, or the Tribunal, depending on the circumstances and where an order related to rectification may be issued. Jurisdiction is a critical factor in both Trademark Registration and Trademark Rectification processes.
                  </p>
                  <p className="content-block-text">
                    Typically, a Trademark Rectification application is filed at the trademark office where the original registration application was initially submitted. The key offices associated with Trademark Jurisdiction include:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item">Mumbai</li>
                    <li className="content-list-item">Chennai</li>
                    <li className="content-list-item">Kolkata</li>
                    <li className="content-list-item">Delhi</li>
                    <li className="content-list-item">Ahmedabad</li>
                  </ul>
                  <p className="content-block-text">
                    These offices are essential locations for handling matters related to Trademark Jurisdiction and are where applicants can file their Trademark Rectification applications as needed.
                  </p>

                  <h2 className="content-block-title">The Trademark Rectification Process</h2>
                  <p className="content-block-text">
                    Whether initiated by the proprietor or the registrar, the process for rectification of trademark remains consistent and involves the following steps:
                  </p>

                  <h3 className="content-subtitle">Drafting of the Application</h3>
                  <p className="content-block-text">
                    The applicant begins by carefully drafting the rectification application, ensuring all necessary information is included. Precision in this step is crucial, as any errors can result in application rejection.
                  </p>

                  <h3 className="content-subtitle">Form Filing</h3>
                  <p className="content-block-text">
                    After drafting the application, it is essential to do the rectification filed in trademark using the requisite form with the Trademark Registrar, accompanied by the prescribed fees. This step is mandatory for initiating the rectification process.
                  </p>

                  <h3 className="content-subtitle">Documents Submission</h3>
                  <p className="content-block-text">
                    Following form submission, the applicant must provide the necessary documents for rectification, ensuring proper formatting and including proof, such as identity documents, address proof, or PAN details, where alterations are required.
                  </p>

                  <h3 className="content-subtitle">Documents Verification</h3>
                  <p className="content-block-text">
                    Once the documents are submitted, they undergo verification by the concerned authorities. If the verification is successful and satisfies the authorities, the process proceeds. However, if the verification is satisfactory, the application may be accepted.
                  </p>

                  <h3 className="content-subtitle">Final Order</h3>
                  <p className="content-block-text">
                    After hearing both parties and reviewing evidence, the Registrar or the Appellate Court issues an order following the verification process. This order can involve rectification, addition, variation, or substitution in the trademark register, as deemed appropriate.
                  </p>

                  <h2 className="content-block-title">Process for Rectification Initiated by an Aggrieved Person</h2>
                  <p className="content-block-text">
                    When an aggrieved person initiates rectification, the process involves the following steps:
                  </p>

                  <h3 className="content-subtitle">Filing for Rectification</h3>
                  <p className="content-block-text">
                    The aggrieved individual files for rectification using Form TM–26, including reasons for rectification, and submits it to the Registrar along with the prescribed fees.
                  </p>

                  <h3 className="content-subtitle">Notice to Trademark Holder</h3>
                  <p className="content-block-text">
                    The Registrar sends a notice to the trademark holder, prompting them to file a counter statement in response to the rectification initiated by the aggrieved party.
                  </p>

                  <h3 className="content-subtitle">Affidavits and Evidence</h3>
                  <p className="content-block-text">
                    Both parties are required to submit affidavits along with relevant evidence.
                  </p>

                  <h3 className="content-subtitle">Verification and Decision</h3>
                  <p className="content-block-text">
                    The Registrar or the Appellate Board reviews the documents and hears both parties. The final decision may involve rectification, addition, removal, or cancellation of the trademark, based on their discretion.
                  </p>

                  <h2 className="content-block-title">Consequences of Trademark Rectification</h2>
                  <p className="content-block-text">
                    Trademark rectification can result in removing a registered trademark, but this decision is reached through a thorough process that considers relevant evidence. A trademark that remains unused for five years or lacks genuine market utilization for three years or more becomes liable for removal from the Trademark Register. It is essential for a registered trademark to maintain its presence and reputation in the market. Please do so to avoid trademark cancellation or temporary removal.
                  </p>

                  <h2 className="content-block-title">Why Choose efind24 for Trademark Rectification?</h2>
                  <p className="content-block-text">
                    efind24 offers several compelling reasons for choosing our services:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Comprehensive Legal and Financial Support:</strong> efind24 is a platform that caters to all your legal and financial needs and connects you with experienced professionals.</li>
                    <li className="content-list-item"><strong>Simplified Legal Requirements:</strong> The platform focuses on streamlining legal requirements for clients, making the process hassle-free.</li>
                    <li className="content-list-item"><strong>Expert Guidance:</strong> efind24's dedicated team of experts is readily available to answer your questions and guide you through the Trademark Rectification process.</li>
                    <li className="content-list-item"><strong>Reliability and Trust:</strong> Clients can rely on efind24 for trustworthy, high-quality services.</li>
                    <li className="content-list-item"><strong>Client-Centric Approach:</strong> efind24 aims to create a user-friendly and efficient system for its clients.</li>
                    <li className="content-list-item"><strong>Transparent Progress Tracking:</strong> Clients can track the progress of their cases on the platform.</li>
                  </ul>
                  <p className="content-block-text">
                    Trademark Rectification is a critical process to correct errors or inaccuracies in trademark registration. efind24 provides a valuable resource for navigating this process efficiently and effectively. Whether you require assistance with trademark registration, rectification, renewal, or objection filing, efind24's team of professionals is here to assist you. Feel free to reach out to efind24 for any trademark-related queries or guidance.
                  </p>
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
                    <a href="#" className="guide-link">How do I Register for a Trademark?</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">How to find Trademarks according to their Class?</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">What is a Class in Trademark?</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Can you have a trademark without registering?</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">How to select a trademark?</a>
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
            <h2 className="faq-title">FAQ's on Trademark Rectification</h2>
            
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1567' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1567')}
                >
                  <span className="accordion-question">What is trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1567' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1567' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1567' ? 'active' : ''}`} id="accordion_1567_content">
                  <div className="page-content">
                    Trademark rectification is a legal process used to correct errors or inaccuracies in a registered trademark, such as a spelling mistake, incorrect information, or inadequate specification of goods or services.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1568' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1568')}
                >
                  <span className="accordion-question">When should I consider trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1568' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1568' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1568' ? 'active' : ''}`} id="accordion_1568_content">
                  <div className="page-content">
                    You should consider trademark rectification when you discover errors or inaccuracies in your registered trademark that need correction. Its essential to maintain the accuracy of your trademark registration to protect your brand.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1569' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1569')}
                >
                  <span className="accordion-question">What are some common errors that require trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1569' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1569' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1569' ? 'active' : ''}`} id="accordion_1569_content">
                  <div className="page-content">
                    Common errors include spelling mistakes in the trademark, incorrect details about the trademark owner, errors in the specification of goods or services, and inaccuracies in the graphical representation of the trademark.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1570' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1570')}
                >
                  <span className="accordion-question">How do I initiate the trademark rectification process?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1570' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1570' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1570' ? 'active' : ''}`} id="accordion_1570_content">
                  <div className="page-content">
                    To initiate the trademark rectification process, you typically need to file an application with the relevant trademark office in your jurisdiction. Consult with a trademark attorney or agent for guidance through this process.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1571' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1571')}
                >
                  <span className="accordion-question">What documents are required for trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1571' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1571' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1571' ? 'active' : ''}`} id="accordion_1571_content">
                  <div className="page-content">
                    The specific documents required may vary by jurisdiction, but generally, you will need to submit an application for rectification, along with supporting documentation that demonstrates the error and the requested correction.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1572' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1572')}
                >
                  <span className="accordion-question">Can anyone apply for trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1572' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1572' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1572' ? 'active' : ''}`} id="accordion_1572_content">
                  <div className="page-content">
                    Typically, only the trademark owner or an authorized representative can apply for trademark rectification. This is to ensure that only legitimate parties can make changes to a registered trademark.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1573' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1573')}
                >
                  <span className="accordion-question">Is there a time limit for filing a trademark rectification application?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1573' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1573' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1573' ? 'active' : ''}`} id="accordion_1573_content">
                  <div className="page-content">
                    Time limits for filing trademark rectification applications can vary by jurisdiction. Its crucial to check with your local trademark office or consult a legal expert for specific deadlines.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1580' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1580')}
                >
                  <span className="accordion-question">What is the cost of trademark rectification?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1580' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1580' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1580' ? 'active' : ''}`} id="accordion_1580_content">
                  <div className="page-content">
                    The cost of trademark rectification can also vary depending on your jurisdiction and the complexity of the correction required. Fees may include application filing fees and legal fees if you hire an attorney.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1581' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1581')}
                >
                  <span className="accordion-question">How long does the trademark rectification process take?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1581' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1581' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1581' ? 'active' : ''}`} id="accordion_1581_content">
                  <div className="page-content">
                    The duration of the process can vary widely, but it generally takes several months to a year or more. The timeline depends on factors such as the backlog at the trademark office and the complexity of the correction.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1582' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1582')}
                >
                  <span className="accordion-question">What happens after trademark rectification is approved?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1582' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1582' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1582' ? 'active' : ''}`} id="accordion_1582_content">
                  <div className="page-content">
                    After your trademark rectification is approved, the corrected information will be updated in the official trademark register, and you will receive a new registration certificate reflecting the changes.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1583' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1583')}
                >
                  <span className="accordion-question">What are the potential risks of not rectifying trademark errors?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1583' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1583' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1583' ? 'active' : ''}`} id="accordion_1583_content">
                  <div className="page-content">
                    Failing to correct trademark errors can lead to legal complications, potential loss of trademark protection, and difficulties enforcing your trademark rights. Its essential to maintain an accurate trademark registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1584' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1584')}
                >
                  <span className="accordion-question">Can I rectify an expired trademark registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1584' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1584' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1584' ? 'active' : ''}`} id="accordion_1584_content">
                  <div className="page-content">
                    Trademark rectification typically applies to active registrations. If your trademark has expired, you may need to explore other options, such as reapplying for trademark registration. Remember to adapt these FAQs to your specific audience and jurisdiction if needed, and consider seeking legal advice for any trademark rectification concerns.
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

export default TrademarkRectification;

