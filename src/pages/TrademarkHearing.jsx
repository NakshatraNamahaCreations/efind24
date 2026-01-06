import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/businessman-reading-contract-closeup.jpg';
import './TrademarkHearing.css';

function TrademarkHearing() {
  const [selectedService, setSelectedService] = useState('Hearing');
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
  const documentsSectionRef = useRef(null);
  const documentsTitleRef = useRef(null);
  const documentsCardRef = useRef(null);
  const relatedDocumentsCardRef = useRef(null);

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
    observeElement(documentsSectionRef.current);
    observeElement(documentsTitleRef.current);
    observeElement(documentsCardRef.current);
    observeElement(relatedDocumentsCardRef.current);
    
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
      if (documentsSectionRef.current) observer.unobserve(documentsSectionRef.current);
      if (documentsTitleRef.current) observer.unobserve(documentsTitleRef.current);
      if (documentsCardRef.current) observer.unobserve(documentsCardRef.current);
      if (relatedDocumentsCardRef.current) observer.unobserve(relatedDocumentsCardRef.current);
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
    <div className="trademark-hearing-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Hearing</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Hearing</div>
      </section>
      
      <section className="manage-track-section">
        <div className="container">
          <div className="manage-track-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="info-panel fade-in-left">
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
                    <option value="Hearing">Hearing</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Certification">Trademark Certification</option>
                  </select>
                </div>

                {selectedService === 'Hearing' && (
                  <div className="form-info-message">
                    <p className="info-text">Hearings are scheduled only when the Registry issues a notice. Your trademark hasn't reached that stage.</p>
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
                    Updated on: <span className="update-date">Mar 28, 2025</span>
                  </div>
                </div>

                {/* Main Content */}
                <div ref={(el) => (processContentRefs.current[0] = el)} className="process-content-block fade-in-left">
                  <h1 ref={processMainTitleRef} className="content-main-title fade-in-left">Trademark Hearing</h1>
                  
                  <p className="content-block-text">
                    A Trademark Hearing in India is an administrative proceeding conducted by the Registrar of Trademarks to resolve disputes between two parties regarding the registration, renewal, or infringement of a Trademark. During the trademark hearing process, each party has the opportunity to present their case, which may include testimony from witnesses, legal arguments, and other evidence. The Registrar will then decide based on the evidence presented. The final decision will significantly impact the Trademark in question. When you receive a trademark show cause hearing notice, it's crucial to respond promptly to protect your intellectual rights. It is essential to have experienced legal counsel present to ensure the best possible outcome.
                  </p>

                  <h2 className="content-block-title">Importance of Trademark Hearing</h2>
                  <p className="content-block-text">
                    Trademark Hearings in India are vital as they provide an opportunity for trademark applicants to defend their applications against objections raised by the Trademarks Registry or third parties. After an examiner assigns the trademark application with a status of 'ready for show cause hearing', then the application needs further review. These trademark show cause hearings enable applicants to provide further evidence and arguments supporting their applications, which can help ensure that they are accepted. They also provide an important forum for resolving disputes over the rights to use trademarks in the country, helping to ensure that trademark owners are adequately protected. Failing to address a show cause hearing trademark notice can result in the loss of your trademark rights.
                  </p>

                  <h2 className="content-block-title">Trademark Registry Jurisdiction</h2>
                  <p className="content-block-text">
                    Each state and union territory has been assigned to one of the five zones that comprise the regional jurisdiction for trademark applications and hearings:
                  </p>
                  <ul className="content-list">
                    <li className="content-list-item"><strong>Chennai</strong><br />Andhra Pradesh, Tamil Nadu, Telangana, Kerala, Karnataka, Lakshadweep Island, and the Union Territories of Pondicherry.</li>
                    <li className="content-list-item"><strong>Mumbai</strong><br />The state of Madhya Pradesh, Maharashtra, Goa, and Chhattisgarh.</li>
                    <li className="content-list-item"><strong>New Delhi</strong><br />Jammu and Kashmir, Haryana, Punjab, Uttar Pradesh, Delhi, Himachal Pradesh, and the Union Territories of Chandigarh and Uttarakhand.</li>
                    <li className="content-list-item"><strong>Ahmedabad</strong><br />Rajasthan, Gujarat, Dadra, Diu, Daman, and Nagar Haveli.</li>
                    <li className="content-list-item"><strong>Kolkata</strong><br />Assam, Bihar, Arunachal Pradesh, Manipur, Orissa, West Bengal, Mizoram, Sikkim, Meghalaya, Tripura, Jharkhand, and the Union Territories of Andaman & Nicobar Islands and Nagaland are all included.</li>
                  </ul>

                  <h2 className="content-block-title">Trademark Hearing Adjournment</h2>
                  <p className="content-block-text">
                    The concerned director may postpone a trademark hearing to allow for an appearance, or it may be stopped or postponed unilaterally by filing a TM-M application at least three days prior to the hearing period. If an applicant fails to appear for a scheduled trademark opposition hearing often referred to as being 'ready for show cause hearing', the concerned administrator may postpone it up to three times before rejecting their application.
                  </p>

                  <h2 className="content-block-title">Documents Required for Trademark Hearing</h2>
                  <p className="content-block-text">
                    Here is the list of documents typically required for trademark opposition hearing:
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[0] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Power of Attorney</h3>
                      <p className="benefit-card-text">
                        A power of attorney (POA) is a legal document that permits someone else the authority to act on your behalf in a legal or business matter. When registering for a trademark, the applicant must sign a power of attorney to give the right to represent them in the trademark registration process.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[1] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Authorisation Letter</h3>
                      <p className="benefit-card-text">
                        An authorisation letter is a document used to grant permission or authority to another person or entity to act on behalf of the sender in a certain capacity. In trademark registration, an authorisation letter is used to appoint a representative as the applicant's legal representative for the trademark registration process.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[2] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Proof of Usage</h3>
                      <p className="benefit-card-text">
                        Proof of usage is documentation that demonstrates how the trademark is being used in the marketplace. The Indian Trademarks Registry requires this documentation to prove that the trademark is being used in connection with the goods and services it is registered for. Examples of proof of usage include invoices, brochures, advertisements, photographs, and other documents that demonstrate the use of the trademark.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">Trademark Opposition Hearing Process</h2>
                  <p className="content-block-text">
                    This process is a legal proceeding that is organized by the Registrar of Trademarks or an appointed hearing officer to resolve any objections mentioned by the Trademark Examiner during the registration process. The following are the steps associated with the show cause hearing trademark process:
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[3] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Examination Report Issuance</h3>
                      <p className="benefit-card-text">
                        Following the filing of the trademark application, it is examined by the Trademark Examiner. If the Examiner discovers any objections, they will issue an Examination Report outlining the issues.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[4] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Examination Report Response</h3>
                      <p className="benefit-card-text">
                        Within one month of issuance, the applicant must respond to the Examination Report, addressing the Examiner's objections. If the response is deemed satisfactory, the trademark application moves on to the next stage.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[5] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Hearing Request</h3>
                      <p className="benefit-card-text">
                        If the Examiner is dissatisfied with the applicant's response, they may request a hearing. The applicant must file a request for a hearing within one month of receiving the trademark hearing notice.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[6] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Evidence Filing</h3>
                      <p className="benefit-card-text">
                        Once the hearing request has been filed, the hearing officer will schedule the hearing. Before the trademark hearing date, both the applicant and the Examiner must file evidence and documents supporting their respective cases.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[7] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Hearing</h3>
                      <p className="benefit-card-text">
                        The applicant and Examiner have the opportunity to present their arguments and evidence before the hearing officer at the hearing. The hearing officer will hear both sides and decide based on the evidence presented.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[8] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Decision</h3>
                      <p className="benefit-card-text">
                        Based on the evidence provided at the hearing, the hearing officer will decide whether to approve or reject the trademark application. If the trademark application is approved, the trademark will be registered and the applicant will be issued a registration certificate.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">How efind24 can help you with Trademark Hearing</h2>
                  <p className="content-block-text">
                    At efind24, we provide trademark hearing services to help businesses protect their valuable trademarks. Our team of experienced IP lawyers is dedicated to providing the highest quality legal service to ensure the trademark registration process goes smoothly with affordable trademark hearing fees.
                  </p>
                  <p className="content-block-text">
                    When a trademark hearing process is necessary, we appoint an IP lawyer to the job responsible for collecting the required supporting documents from the client and uploading them to the registry. After that, we wait for the trademark hearing date to be allotted by the registry. Once the trademark hearing date has been set, we attend the hearing and present our defence.
                  </p>
                  <p className="content-block-text">
                    Our IP lawyers are highly experienced in trademark hearings and understand the importance of building a strong case on behalf of our clients. We use the latest technology and industry best practices to ensure the hearing is conducted efficiently and successfully. Our service justifies the trademark hearing fees you are paying.
                  </p>
                  <p className="content-block-text">
                    Our legal experts can help you understand and navigate the complexities of trademark hearing notice. We understand that a trademark hearing process can be stressful, and our team of IP lawyers are dedicated to ensuring the process is as stress-free as possible. We provide our clients with detailed information about the hearing process so that they can make informed decisions. If you've been served with trademark hearing notice, contact us immediately for professional guidance and representation.
                  </p>
                  <p className="content-block-text">
                    At efind24, we strive to provide our clients with the best possible service with justifiable trademark hearing fees. Our IP lawyers are committed to providing the highest quality legal advice and representing our clients in trademark hearings. We work hard to ensure that our clients' trademarks are protected and that they receive a successful outcome from the hearing.
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
                    <a href="#" className="guide-link">Trademark Registration in Chennai: Register your trademark name, slogan, or logo today</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Opposition and Timelines for Trademark opposition in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Alteration to Registered Trademark</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Step by Step Guide on Trademark Registration Process</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Filing - Process & Documents Required</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section ref={documentsSectionRef} className="documents-required-section">
        <div className="container">
          <h2 ref={documentsTitleRef} className="documents-section-title fade-in-up">Documents Required For Trademark Hearing</h2>
          <div className="documents-wrapper">
            {/* Left Card - Documents List */}
            <div ref={documentsCardRef} className="documents-card doc-req-sec fade-in-left">
              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Invoices</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Website Screenshot</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Domain Registration Records</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Advertisement Copy</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Visiting Card</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Product Images</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Government Registered Certificate</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Letter Head copy</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-outline btn-primary load-more-btn" onClick={handleLoadMore}>
                  {showAllDocuments ? 'Show Less' : 'Load More'}
                </button>
              </div>
            </div>

            {/* Right Card - Related Documents */}
            <div ref={relatedDocumentsCardRef} className="related-documents-card fade-in-right">
              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for LLP Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">8</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for Proprietorship Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">2</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for Company Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">2</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for Trademark Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">7</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for GST Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">10</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="#" className="related-doc-link">Documents Required for Partnership Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="faq-section fade-in-up">
        <div className="container">
          <div className="faq-wrapper">
            <h2 className="faq-title">FAQ's on Trademark Hearing</h2>
            
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1331' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1331')}
                >
                  <span className="accordion-question">What is trademark hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1331' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1331' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1331' ? 'active' : ''}`} id="accordion_1331_content">
                  <div className="page-content">
                    A trademark hearing is a formal meeting between the trademark applicant and the trademark Examiner from the Trademark Office, in which the Examiner reviews the trademark application to determine whether it meets the requirements for registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1332' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1332')}
                >
                  <span className="accordion-question">What is the cause for a trademark hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1332' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1332' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1332' ? 'active' : ''}`} id="accordion_1332_content">
                  <div className="page-content">
                    A trademark hearing is typically requested when the Examiner has determined that the trademark application does not satisfy all the requirements for registration. If the Examiner has questions or concerns about the application, they may request a hearing to discuss them.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1333' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1333')}
                >
                  <span className="accordion-question">Why to attend a trademark hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1333' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1333' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1333' ? 'active' : ''}`} id="accordion_1333_content">
                  <div className="page-content">
                    Attending a trademark hearing is important because it allows the applicant to provide additional information to the Examiner, which may help address any concerns the Examiner may have.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1334' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1334')}
                >
                  <span className="accordion-question">Who should attend a trademark hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1334' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1334' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1334' ? 'active' : ''}`} id="accordion_1334_content">
                  <div className="page-content">
                    The applicant should attend the trademark hearing. If the applicant cannot participate in the hearing, they may designate an authorized representative, such as an attorney, to attend the hearing on their behalf.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1335' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1335')}
                >
                  <span className="accordion-question">What formalities occur post hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1335' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1335' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1335' ? 'active' : ''}`} id="accordion_1335_content">
                  <div className="page-content">
                    After the hearing, the Examiner will make a determination as to whether the trademark application meets the requirements for registration. A Certificate of Registration will be issued if the Examiner decides to register the trademark.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1336' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1336')}
                >
                  <span className="accordion-question">How long does it take for a trademark to be registered post hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1336' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1336' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1336' ? 'active' : ''}`} id="accordion_1336_content">
                  <div className="page-content">
                    Suppose the trademark is accepted during the hearing. In that case, the trademark application status will change to "Accepted and Advertised." It will then be published in the Trademarks Journal for four months before registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1337' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1337')}
                >
                  <span className="accordion-question">What if the Registrar rejects the trademark during hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1337' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1337' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1337' ? 'active' : ''}`} id="accordion_1337_content">
                  <div className="page-content">
                    If the Examiner rejects the trademark during the hearing, the applicant has the right to appeal to the Intellectual Property Appellate Board within three months.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1338' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1338')}
                >
                  <span className="accordion-question">Can the Registrar put any conditions or amendments before accepting a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1338' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1338' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1338' ? 'active' : ''}`} id="accordion_1338_content">
                  <div className="page-content">
                    Yes, the Examiner may request that the applicant make amendments to the trademark application before registration can be granted.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1339' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1339')}
                >
                  <span className="accordion-question">What is "Ready For Show cause hearing"?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1339' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1339' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1339' ? 'active' : ''}`} id="accordion_1339_content">
                  <div className="page-content">
                    Ready For Show Cause Hearing" is a status assigned to a trademark application when the Examiner has determined that the application requires further review. The applicant will then be required to attend a hearing to explain why the trademark should be granted registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1340' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1340')}
                >
                  <span className="accordion-question">What are the trademark hearing fees?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1340' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1340' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1340' ? 'active' : ''}`} id="accordion_1340_content">
                  <div className="page-content">
                    The trademark hearing fees can vary based on several factors, including the complexity of the case and the specific legal services required. Generally, these fees cover the costs of filing necessary documents, attorney fees for case preparation and representation, and any additional administrative expenses associated with the hearing.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1341' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1341')}
                >
                  <span className="accordion-question">What if one does not wish to attend a hearing?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1341' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1341' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1341' ? 'active' : ''}`} id="accordion_1341_content">
                  <div className="page-content">
                    If the applicant does not wish to attend the hearing, they may designate an authorized representative, such as an attorney, to attend the hearing on their behalf.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_3978' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_3978')}
                >
                  <span className="accordion-question">What if a trademark hearing is skipped?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_3978' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_3978' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_3978' ? 'active' : ''}`} id="accordion_3978_content">
                  <div className="page-content">
                    If a trademark hearing is skipped, the Examiner may reject the application.
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-outline btn-primary load-more-faq-btn" onClick={handleLoadMoreFAQs}>
              {showAllFAQs ? 'Show Less' : 'Load More'}
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default TrademarkHearing;

