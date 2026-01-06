import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/close-up-lawyer-signing-papers.jpg';
import './TrademarkRenewal.css';

function TrademarkRenewal() {
  const [formData, setFormData] = useState({
    applicationNumber: '',
    brandName: '',
    class: ''
  });
  const [selectedService, setSelectedService] = useState('Renewal');
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  // Refs for scroll animations
  const bannerSectionRef = useRef(null);
  const infoPanelRef = useRef(null);
  const formPanelRef = useRef(null);
  const processContentRef = useRef(null);
  const relatedGuidesRef = useRef(null);
  const comparisonTableRef = useRef(null);
  const documentsSectionRef = useRef(null);
  const documentsTitleRef = useRef(null);
  const documentsCardRef = useRef(null);
  const relatedDocumentsCardRef = useRef(null);
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
    observeElement(bannerSectionRef.current);
    observeElement(infoPanelRef.current);
    observeElement(formPanelRef.current);
    observeElement(processContentRef.current);
    observeElement(relatedGuidesRef.current);
    observeElement(comparisonTableRef.current);
    observeElement(documentsSectionRef.current);
    observeElement(documentsTitleRef.current);
    observeElement(documentsCardRef.current);
    observeElement(relatedDocumentsCardRef.current);
    observeElement(faqSectionRef.current);

    return () => {
      if (bannerSectionRef.current) observer.unobserve(bannerSectionRef.current);
      if (infoPanelRef.current) observer.unobserve(infoPanelRef.current);
      if (formPanelRef.current) observer.unobserve(formPanelRef.current);
      if (processContentRef.current) observer.unobserve(processContentRef.current);
      if (relatedGuidesRef.current) observer.unobserve(relatedGuidesRef.current);
      if (comparisonTableRef.current) observer.unobserve(comparisonTableRef.current);
      if (documentsSectionRef.current) observer.unobserve(documentsSectionRef.current);
      if (documentsTitleRef.current) observer.unobserve(documentsTitleRef.current);
      if (documentsCardRef.current) observer.unobserve(documentsCardRef.current);
      if (relatedDocumentsCardRef.current) observer.unobserve(relatedDocumentsCardRef.current);
      if (faqSectionRef.current) observer.unobserve(faqSectionRef.current);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoadMore = () => {
    setShowAllDocuments(!showAllDocuments);
  };

  const handleAccordionToggle = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handleLoadMoreFAQs = () => {
    setShowAllFAQs(!showAllFAQs);
  };

  return (
    <div className="trademark-renewal-page">
      <Header />
      <section ref={bannerSectionRef} className="trademark-renewal-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="trademark-renewal-title">Trademark Renewal</h2>
        <div className="trademark-renewal-watermark">Trademark <br /> Renewal</div>
      </section>

      <section className="trademark-renewal-manage-track-section">
        <div className="container">
          <div className="trademark-renewal-manage-track-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="trademark-renewal-info-panel fade-in-left">
              <h2 className="trademark-renewal-info-heading">
                <span className="trademark-renewal-underline-blue">Manage</span> & <span className="trademark-renewal-underline-orange">Track</span> your Trademark Application. Consult our Trademark Experts.
              </h2>
              <p className="trademark-renewal-info-description">
                AI-powered search and government-backed filings, handled end-to-end by India's most trusted compliance platform. Tailored for MSMEs, Corporates, and Global Founders.
              </p>
              
              <div className="trademark-renewal-features-list">
                <div className="trademark-renewal-feature-item">
                  <div className="trademark-renewal-feature-icon trademark-renewal-checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                    </svg>
                  </div>
                  <p className="trademark-renewal-feature-text">100% Legal Validity & Govt. Filing Guarantee</p>
                </div>
                
                <div className="trademark-renewal-feature-item">
                  <div className="trademark-renewal-feature-icon trademark-renewal-magnifying">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                    </svg>
                  </div>
                  <p className="trademark-renewal-feature-text">AI-Powered Trademark Search & Filing</p>
                </div>
                
                <div className="trademark-renewal-feature-item">
                  <div className="trademark-renewal-feature-icon trademark-renewal-rocket">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M2.81 14.12L5.64 11.3l-1.42-1.42L1.39 12.7c-.39.39-.39 1.02 0 1.41l1.42 1.01zm17.57-4.96l-1.59 1.59-1.42-1.42-2.87 2.87-1.42-1.42 2.87-2.87-1.42-1.42-1.59 1.59-4.24-4.24 5.66-5.66 4.24 4.24zm-6.36-6.36l1.42 1.42-7.07 7.07-1.42-1.42 7.07-7.07zM5.64 16.7l-1.42-1.42 1.41-1.41 1.42 1.41-1.41 1.42z" fill="white"/>
                    </svg>
                  </div>
                  <p className="trademark-renewal-feature-text">Dedicated Experts + Compliance Support</p>
                </div>
                
                <div className="trademark-renewal-feature-item">
                  <div className="trademark-renewal-feature-icon trademark-renewal-graph">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" fill="white"/>
                    </svg>
                  </div>
                  <p className="trademark-renewal-feature-text">MSME Priority Pricing, Corporate Bundles & International Protection</p>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div ref={formPanelRef} className="trademark-renewal-form-panel fade-in-right">
              <div className="trademark-renewal-form-card">
                <h3 className="trademark-renewal-form-title">Trademark Services</h3>
                
                <div className="trademark-renewal-form-group">
                  <label className="trademark-renewal-form-label">Trademark Services</label>
                  <select 
                    className="trademark-renewal-form-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="Renewal">Renewal</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Certificate">Certificate</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                  </select>
                </div>

                {selectedService === 'Renewal' && (
                  <div className="trademark-renewal-form-info-message">
                    <p className="trademark-renewal-info-text">Renewals are possible only for registered trademarks. Your mark isn't registered yet, so renewal isn't needed.</p>
                  </div>
                )}

                <div className="trademark-renewal-form-group">
                  <label className="trademark-renewal-form-label">Application Number</label>
                  <input
                    type="text"
                    name="applicationNumber"
                    className="trademark-renewal-form-input"
                    placeholder="Application Number"
                    value={formData.applicationNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="trademark-renewal-form-group">
                  <label className="trademark-renewal-form-label">Brand Name</label>
                  <input
                    type="text"
                    name="brandName"
                    className="trademark-renewal-form-input"
                    placeholder="Brand Name"
                    value={formData.brandName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="trademark-renewal-form-group">
                  <label className="trademark-renewal-form-label">Class</label>
                  <select 
                    className="trademark-renewal-form-select"
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
                    <option value="11">Class 11 - Appliances</option>
                    <option value="12">Class 12 - Vehicles</option>
                    <option value="13">Class 13 - Firearms</option>
                    <option value="14">Class 14 - Jewelry</option>
                    <option value="15">Class 15 - Musical Instruments</option>
                    <option value="16">Class 16 - Paper Goods</option>
                    <option value="17">Class 17 - Rubber Products</option>
                    <option value="18">Class 18 - Leather Goods</option>
                    <option value="19">Class 19 - Building Materials</option>
                    <option value="20">Class 20 - Furniture</option>
                    <option value="21">Class 21 - Housewares</option>
                    <option value="22">Class 22 - Ropes</option>
                    <option value="23">Class 23 - Yarns</option>
                    <option value="24">Class 24 - Fabrics</option>
                    <option value="25">Class 25 - Clothing</option>
                    <option value="26">Class 26 - Fancy Goods</option>
                    <option value="27">Class 27 - Floor Coverings</option>
                    <option value="28">Class 28 - Games</option>
                    <option value="29">Class 29 - Meats</option>
                    <option value="30">Class 30 - Staple Foods</option>
                    <option value="31">Class 31 - Natural Agricultural Products</option>
                    <option value="32">Class 32 - Beverages</option>
                    <option value="33">Class 33 - Alcoholic Beverages</option>
                    <option value="34">Class 34 - Smoking Products</option>
                    <option value="35">Class 35 - Advertising</option>
                    <option value="36">Class 36 - Insurance</option>
                    <option value="37">Class 37 - Construction</option>
                    <option value="38">Class 38 - Telecommunications</option>
                    <option value="39">Class 39 - Transportation</option>
                    <option value="40">Class 40 - Treatment of Materials</option>
                    <option value="41">Class 41 - Education</option>
                    <option value="42">Class 42 - Computer Services</option>
                    <option value="43">Class 43 - Restaurants</option>
                    <option value="44">Class 44 - Medical Services</option>
                    <option value="45">Class 45 - Legal Services</option>
                  </select>
                </div>

                <div className="trademark-renewal-form-buttons">
                  <button className="trademark-renewal-btn-get-quote">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="trademark-renewal-process-section">
        <div className="container">
          <div className="trademark-renewal-process-wrapper">
            {/* Left Column - Content Card */}
            <div ref={processContentRef} className="trademark-renewal-process-content-card">
              <div className="trademark-renewal-card-body">
                {/* Author Info */}
                <div className="trademark-renewal-author-info-card">
                  <a href="https://www.efind24.com/expert/siranjeevi-b/" className="trademark-renewal-author-link">
                    <div className="trademark-renewal-author-content">
                      <img 
                        src="https://img.indiafilings.com/catalog/professionals/118381561.jpg" 
                        alt="SIRANJEEVI B" 
                        className="trademark-renewal-author-image"
                        loading="lazy"
                      />
                      <div className="trademark-renewal-author-details">
                        <span className="trademark-renewal-author-name">SIRANJEEVI B</span>
                        <span className="trademark-renewal-author-role">Business Advisor</span>
                      </div>
                    </div>
                  </a>
                  <div className="trademark-renewal-author-updated">
                    Updated on: <span className="trademark-renewal-update-date">Jul 07, 2025</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="trademark-renewal-content-wrapper">
                  <h1 className="trademark-renewal-content-main-title">Trademark Renewal</h1>
                  
                  <p className="trademark-renewal-content-block-text">
                    In the dynamic business world, having a trademark sets your brand apart and ensures its distinct identity. Once your trademark is officially registered, it's pivotal to remain vigilant about its ongoing validity and protection. This is where the importance of trademark renewal comes in. By updating your trademark within the designated time frames, you preserve your brand's exclusivity, uphold its legal status, and reinforce its place in the market. Initiating the trademark renewal process at the right time will continue the validity of the trademark.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    Whether you are a seasoned entrepreneur or a new business owner, understanding the significance of trademark renewal online is fundamental to preserving the reputation and endurance of your brand in the market.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">What's a Trademark?</h2>
                  <p className="trademark-renewal-content-block-text">
                    A trademark is a unique emblem, logo, word, phrase, design, or a mix of these elements that visually signifies and points to the origin of goods or services from a specific company or individual. Trademarks are important assets that allow consumers to recognize and connect products or services with a certain brand.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Trademark Renewal</h2>
                  <p className="trademark-renewal-content-block-text">
                    Trademark owners have the privilege to extend their trademark's validity every decade. Before the end of these ten years, the Registrar offers a six-month grace period, during which the trademark holder can begin the trademark renewal process and retain its advantages. If the renewal doesn't occur, the Registrar will announce the trademark's removal in the Trademark Journal.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Trademark Renewal Provision (Section 25)</h2>
                  <p className="trademark-renewal-content-block-text">
                    According to the Trade Marks Act of 1999, a registered trademark can be renewed for an additional decade following the end date of its initial registration or its most recent renewal. To commence the renewal procedure, the trademark's owner must formally apply to the Registrar of Trademarks, ensuring it's done within the stipulated time frame and following the set guidelines. Once the application is submitted along with the mandatory fee, the Registrar will extend the trademark's registration for another ten years.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Deletion of Registered Trademark Due to Non-Renewal (Section 25)</h2>
                  <p className="trademark-renewal-content-block-text">
                    Before a <a href="/trademark-registration" className="trademark-renewal-content-link">trademark's registration</a> expiration, the Registrar must notify the trademark owner about the impending expiry and the terms for its renewal. If these renewal terms aren't met within the designated time frame, the Registrar possesses the right to strike the trademark off the register.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    However, the Act does allow a grace period of six months post the expiration date. During this window, the trademark owner can still renew their mark by settling a surcharge in addition to the regular renewal fee.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    Moreover, in cases where a trademark has been delisted due to the non-settlement of the renewal charge, the trademark holder can request a reinstatement within a year from the last registration's end date. Upon receiving this application and the stipulated fee, the Registrar can reinstate and renew the trademark, potentially with specific conditions or limitations attached.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Benefits of Renewing a Trademark</h2>
                  <p className="trademark-renewal-content-block-text">
                    Renewing a trademark offers an array of advantages for its holder:
                  </p>

                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item">It offers legal protection and rights that are upheld by the law.</li>
                    <li className="trademark-renewal-benefit-item">Renewal aids in guarding against trademark breaches and serves as a foundation for seeking damages in instances of such violations.</li>
                    <li className="trademark-renewal-benefit-item">Renewed trademarks allow the holder to transfer the trademark to another party, whether an individual or a business.</li>
                    <li className="trademark-renewal-benefit-item">A validly registered trademark can be licensed, thus enhancing its financial worth.</li>
                    <li className="trademark-renewal-benefit-item">Renewing ensures the holder retains exclusive rights, upholding the brand's unique identity and prestige.</li>
                  </ul>

                  <h2 className="trademark-renewal-content-block-title">Methods of Trademark Renewal</h2>
                  <p className="trademark-renewal-content-block-text">
                    There are two primary methods to renew a trademark:
                  </p>

                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item"><strong>Renew with alterations:</strong> This option lets you update specific signs or words in the current trademark during renewal.</li>
                    <li className="trademark-renewal-benefit-item"><strong>Renew without alterations:</strong> This option allows for the trademark's extension without any modifications to its existing design or text.</li>
                  </ul>

                  <h2 className="trademark-renewal-content-block-title">Restoring Your Trademark</h2>
                  <p className="trademark-renewal-content-block-text">
                    Should a trademark lapse after ten years, the holder isn't out of options. They can opt for trademark restoration. This process mirrors the renewal procedure but with an added catch: the holder needs to pay an extra penalty for surpassing the expiration date.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Trademark Renewal Filing Deadline</h2>
                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item">The renewal application for a trademark should be lodged before the mark's expiration. While it's possible to initiate the renewal application up to a year before its expiration, the precise deadline is six months before the trademark's expiration date.</li>
                    <li className="trademark-renewal-benefit-item">Suppose a trademark's registration has elapsed due to non-renewal before its due date. In that case, renewal is still attainable within six months post-expiration, but this comes with an additional surcharge on the standard government renewal fee.</li>
                    <li className="trademark-renewal-benefit-item">Should the trademark not be renewed before its expiration or within the subsequent six months (with the added fee), the trademark registration will be revoked.</li>
                  </ul>

                  <p className="trademark-renewal-content-block-text">
                    However, if a trademark gets canceled, there's a possibility for restoration. An application for reinstatement must be submitted within six months following the cancellation.
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Documentation Needed for Trademark Renewal</h2>
                  <p className="trademark-renewal-content-block-text">
                    For trademark renewal online, the following documents must accompany the TM-12 renewal form when submitted to the Registrar of Trademarks (RoT):
                  </p>

                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item">A certified copy of the original trademark registration certificate.</li>
                    <li className="trademark-renewal-benefit-item">A certified copy of the TM-A form used during the initial trademark registration.</li>
                    <li className="trademark-renewal-benefit-item">Identification proof of the applicant.</li>
                    <li className="trademark-renewal-benefit-item">Residence proof of the applicant.</li>
                    <li className="trademark-renewal-benefit-item">A Power of Attorney is required if the applicant is representing the trademark owner.</li>
                  </ul>

                  <h2 className="trademark-renewal-content-block-title">Trademark Renewal Online Procedure in India</h2>
                  <p className="trademark-renewal-content-block-text">
                    The trademark renewal process in India is comprehensive, ensuring enduring protection for your trademark. Here's a concise overview of the steps involved and the accompanying documentation:
                  </p>

                  <h3 className="trademark-renewal-content-subtitle"><strong>Step 1:</strong> Submitting the Application</h3>
                  <p className="trademark-renewal-content-block-text">
                    Fill out and submit Form TM-R to the Trademark Registry. Include details such as:
                  </p>

                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item">Trademark registration number</li>
                    <li className="trademark-renewal-benefit-item">Current trademark status</li>
                    <li className="trademark-renewal-benefit-item">Applicant's contact details</li>
                  </ul>

                  <h3 className="trademark-renewal-content-subtitle"><strong>Step 2:</strong> Scrutiny and Review</h3>
                  <p className="trademark-renewal-content-block-text">
                    Renewal eligibility is determined based on the trademark's remaining validity and adherence to renewal prerequisites.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    If discrepancies arise, the Registry will voice its concerns, prompting the applicant to respond within a set timeframe.
                  </p>

                  <h3 className="trademark-renewal-content-subtitle"><strong>Step 3:</strong> Announcement in the Trademark Journal</h3>
                  <p className="trademark-renewal-content-block-text">
                    Once any concerns are addressed, details concerning the renewed trademark are publicized in the Trademark Journal for 4 months. This period allows third parties to express any objections.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    Should objections surface, the applicant must provide a timely response. A hearing may be organized to clarify and settle the matter if not addressed.
                  </p>

                  <h3 className="trademark-renewal-content-subtitle"><strong>Step 4:</strong> Granting the Renewal Certificate</h3>
                  <p className="trademark-renewal-content-block-text">
                    After the designated publication duration and the amicable resolution of potential disputes, the Registry presents the Trademark Renewal Certificate. This document affirms the renewed status of your trademark, valid for another decade.
                  </p>

                  <p className="trademark-renewal-content-block-text">
                    <strong><em>Our efind24 expert-driven trademark renewal service helps you to renew your trademark on time effortlessly!</em></strong>
                  </p>

                  <h2 className="trademark-renewal-content-block-title">Streamline Trademark Renewal with efind24</h2>
                  <p className="trademark-renewal-content-block-text">
                    efind24 provides an all-encompassing trademark renewal service, ensuring a smooth and hassle-free experience for trademark owners.
                  </p>

                  <ul className="trademark-renewal-benefits-list">
                    <li className="trademark-renewal-benefit-item">Our seasoned experts gather all requisite details and kick-start the renewal process on your behalf.</li>
                    <li className="trademark-renewal-benefit-item">We diligently craft the renewal application, upholding precision and adherence to pertinent rules.</li>
                    <li className="trademark-renewal-benefit-item">Our team then scrutinizes the application, tweaking it to optimize its efficacy.</li>
                    <li className="trademark-renewal-benefit-item">Once the application meets our rigorous standards, we manage the submission process with the Registrar of Trademarks, guaranteeing timely and accurate document delivery.</li>
                  </ul>

                  <p className="trademark-renewal-content-block-text">
                    With efind24's expert-assisted trademark renewal service, entrust us to effortlessly guide you through the intricate renewal steps and ensure unwavering protection for your invaluable trademarks.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Related Guides */}
            <div className="trademark-renewal-right-column-cards">
              <div ref={relatedGuidesRef} className="trademark-renewal-related-guides-card fade-in-right">
                <div className="trademark-renewal-card-header">
                  <h3 className="trademark-renewal-guides-title">Related Guides</h3>
                </div>
                <div className="trademark-renewal-card-body">
                  <div className="trademark-renewal-guides-list">
                    <a href="/trademark-alteration" className="trademark-renewal-guide-link">Alteration to Registered Trademark</a>
                    <div className="trademark-renewal-guide-separator"></div>
                    <a href="/trademark-patent-startup" className="trademark-renewal-guide-link">Trademark and patent under startup in India</a>
                    <div className="trademark-renewal-guide-separator"></div>
                    <a href="/trademark-registration-types" className="trademark-renewal-guide-link">Types of trademark registrations</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark vs Copyright vs Patent Comparison Table Section */}
      <section ref={comparisonTableRef} className="trademark-renewal-comparison-table-section fade-in-up">
        <div className="container">
          <h2 className="trademark-renewal-comparison-table-title">Trademark vs Copyright vs Patent</h2>
          <div className="trademark-renewal-comparison-table-card">
            <div className="trademark-renewal-card-table scrollable-x-auto">
              <table className="trademark-renewal-comparison-table">
                <thead>
                  <tr className="trademark-renewal-table-header-row">
                    <td className="trademark-renewal-table-header-cell"></td>
                    <td className="trademark-renewal-table-header-cell text-center">Trademark</td>
                    <td className="trademark-renewal-table-header-cell text-center">Patent</td>
                    <td className="trademark-renewal-table-header-cell text-center">Copyright</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="trademark-renewal-table-row-alt">
                    <td className="trademark-renewal-table-cell-alt">
                      What's protected
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      Any word, phrase, symbol or design that recognizes and differentiates the source of one party's goods from those of another.
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      Inventions, such as procedure, manufacturer, composition, machines of matter as well as improvements to these.
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      Books, articles, music, photography, sculptures, dances, sound recordings, motion films and other original works of authorship.
                    </td>
                  </tr>
                  <tr>
                    <td className="trademark-renewal-table-cell">
                      Requirements for protection
                    </td>
                    <td className="trademark-renewal-table-cell">
                      A mark must be distinguishable, in the sense that it must be able to identify the source of a certain good.
                    </td>
                    <td className="trademark-renewal-table-cell">
                      A fresh, valuable, and unusual invention is required.
                    </td>
                    <td className="trademark-renewal-table-cell">
                      A work must be unique, original, and created in a tangible manner.
                    </td>
                  </tr>
                  <tr className="trademark-renewal-table-row-alt">
                    <td className="trademark-renewal-table-cell-alt">
                      Term of protection
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      As long as the mark is used in commerce.
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      20 years
                    </td>
                    <td className="trademark-renewal-table-cell-alt">
                      Author's life span+ 60 years.
                    </td>
                  </tr>
                  <tr>
                    <td className="trademark-renewal-table-cell">
                      Rights Granted
                    </td>
                    <td className="trademark-renewal-table-cell">
                      Right to use the mark and to prohibit others from using identical marks in a way that could create confusion about the goods or services' origin.
                    </td>
                    <td className="trademark-renewal-table-cell">
                      Right to restrict others from manufacturing, selling, or importing the patented invention.
                    </td>
                    <td className="trademark-renewal-table-cell">
                      Copyrighted works have the power to dictate their reproduction, creative works, circulation, public performance, and display.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section ref={documentsSectionRef} className="trademark-renewal-documents-required-section">
        <div className="container">
          <h2 ref={documentsTitleRef} className="trademark-renewal-documents-section-title fade-in-up">Documents Required For Trademark Renewal</h2>
          <div className="trademark-renewal-documents-wrapper">
            {/* Left Card - Documents List */}
            <div ref={documentsCardRef} className="trademark-renewal-documents-card trademark-renewal-doc-req-sec fade-in-left">
              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-doc-title">Form-48</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-doc-title">Copy of Form-48</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>
            </div>

            {/* Right Card - Related Documents */}
            <div ref={relatedDocumentsCardRef} className="trademark-renewal-related-documents-card fade-in-right">
              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for LLP Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">8</span>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for Proprietorship Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">2</span>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for Company Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">2</span>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for Trademark Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">7</span>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for GST Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">10</span>
              </div>

              <div className="trademark-renewal-card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="trademark-renewal-related-doc-title">
                    <a href="#" className="trademark-renewal-related-doc-link">Documents Required for Partnership Registration</a>
                  </span>
                </div>
                <span className="trademark-renewal-badge trademark-renewal-badge-primary trademark-renewal-badge-pill">5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="trademark-renewal-faq-section fade-in-up">
        <div className="container">
          <div className="trademark-renewal-faq-wrapper">
            <h2 className="trademark-renewal-faq-title">FAQ's on Trademark Renewal</h2>
            <div className="trademark-renewal-accordion" id="accordion-faq">
              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_352' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_352')}
                >
                  <span className="trademark-renewal-accordion-question">What is a trademark?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_352' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_352' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_352' ? 'active' : ''}`} id="accordion_352_content">
                  <div className="trademark-renewal-page-content">
                    A trademark is a specific sign capable of graphical representation which can differentiate the goods or services of one enterprise from those of other enterprises. This can include a name, word, phrase, logo, symbol, design, image, or a combination of these elements. It's essential for protecting a brand's unique identity in the marketplace.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_353' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_353')}
                >
                  <span className="trademark-renewal-accordion-question">Why is trademark renewal important?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_353' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_353' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_353' ? 'active' : ''}`} id="accordion_353_content">
                  <div className="trademark-renewal-page-content">
                    Trademark renewal ensures the continued protection of the brand's unique identity in the market. Without renewal, the rights to the trademark can be lost, meaning others could potentially use the trademark without facing any legal consequences. Renewal preserves the brand's exclusivity, legal status, and market position.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_354' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_354')}
                >
                  <span className="trademark-renewal-accordion-question">How often do I need to renew my trademark?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_354' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_354' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_354' ? 'active' : ''}`} id="accordion_354_content">
                  <div className="trademark-renewal-page-content">
                    Trademarks need to be renewed every ten years. It's important to note the expiration date of your trademark to avoid lapses in protection.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_355' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_355')}
                >
                  <span className="trademark-renewal-accordion-question">Is there a grace period for trademark renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_355' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_355' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_355' ? 'active' : ''}`} id="accordion_355_content">
                  <div className="trademark-renewal-page-content">
                    Yes, there is a six-month grace period after the initial ten-year validity during which the owner can still renew the trademark. This offers flexibility and a safety net for trademark owners who might miss the initial deadline.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_356' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_356')}
                >
                  <span className="trademark-renewal-accordion-question">What happens if I don't renew my trademark within the grace period?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_356' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_356' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_356' ? 'active' : ''}`} id="accordion_356_content">
                  <div className="trademark-renewal-page-content">
                    If a trademark isn't renewed within this grace period, the Registrar will announce the trademark's removal in the official Trademark Journal, leading to a loss of all the rights and protections associated with that trademark.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_357' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_357')}
                >
                  <span className="trademark-renewal-accordion-question">How can I initiate the renewal process?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_357' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_357' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_357' ? 'active' : ''}`} id="accordion_357_content">
                  <div className="trademark-renewal-page-content">
                    To renew, you need to submit a formal application to the Registrar of Trademarks. This application must adhere to the set guidelines, be submitted within the given time frame, and be accompanied by the necessary renewal fee.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_358' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_358')}
                >
                  <span className="trademark-renewal-accordion-question">Are there different methods to renew a trademark?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_358' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_358' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_358' ? 'active' : ''}`} id="accordion_358_content">
                  <div className="trademark-renewal-page-content">
                    Yes. Owners can either:
                    <ul className="trademark-renewal-faq-list">
                      <li>Renew with alterations: This allows updating or changing parts of the current trademark during the renewal process.</li>
                      <li>Renew without alterations: This simply extends the trademark's validity without making any changes to it.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_359' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_359')}
                >
                  <span className="trademark-renewal-accordion-question">What if my trademark lapses after the ten-year duration?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_359' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_359' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_359' ? 'active' : ''}`} id="accordion_359_content">
                  <div className="trademark-renewal-page-content">
                    If a trademark expires and isn't renewed, owners can still restore it. This requires undergoing a restoration process which is similar to renewal, but with an additional penalty fee due to the delay.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2122' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2122')}
                >
                  <span className="trademark-renewal-accordion-question">How is the cost to renew trademark determined and why is it important to plan for it?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2122' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2122' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2122' ? 'active' : ''}`} id="accordion_2122_content">
                  <div className="trademark-renewal-page-content">
                    The cost to renew trademark is determined based on the type of trademark, the number of classes, and the mode of filing (online or offline). Understanding the cost to renew trademark is essential for businesses to maintain continuous protection of their brand without interruptions. Planning ahead for trademark renewal and its cost ensures that you avoid last-minute penalties and safeguard your trademark rights for the long term.
                  </div>
                </div>
              </div>

              <div className="trademark-renewal-accordion-item">
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2123' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2123')}
                >
                  <span className="trademark-renewal-accordion-question">What is the filing deadline for trademark renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2123' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2123' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2123' ? 'active' : ''}`} id="accordion_2123_content">
                  <div className="trademark-renewal-page-content">
                    The renewal application should ideally be initiated six months before the trademark's expiration. Although renewal is possible up to a year before expiration, aiming for the six-month mark provides a safety buffer.
                  </div>
                </div>
              </div>

              {/* Hidden FAQs that show on Load More */}
              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2124' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2124')}
                >
                  <span className="trademark-renewal-accordion-question">What if I miss the deadline?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2124' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2124' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2124' ? 'active' : ''}`} id="accordion_2124_content">
                  <div className="trademark-renewal-page-content">
                    If the renewal deadline is missed, there's still a grace period of six months post-expiration where the trademark can be renewed by paying an additional surcharge.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2125' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2125')}
                >
                  <span className="trademark-renewal-accordion-question">Can a cancelled trademark be restored?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2125' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2125' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2125' ? 'active' : ''}`} id="accordion_2125_content">
                  <div className="trademark-renewal-page-content">
                    Yes, if a trademark gets cancelled due to non-renewal, there's a window for its restoration. The owner must submit a reinstatement application within six months following the cancellation.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2126' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2126')}
                >
                  <span className="trademark-renewal-accordion-question">What documents are required for trademark renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2126' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2126' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2126' ? 'active' : ''}`} id="accordion_2126_content">
                  <div className="trademark-renewal-page-content">
                    When renewing a trademark, several documents are necessary:
                    <ul className="trademark-renewal-faq-list">
                      <li>A copy of the original trademark registration certificate.</li>
                      <li>A copy of the TM-A form from the initial registration.</li>
                      <li>Applicant's identification and residence proof.</li>
                      <li>If someone else is representing the trademark owner, a Power of Attorney is necessary.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2127' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2127')}
                >
                  <span className="trademark-renewal-accordion-question">Can you briefly describe the trademark renewal process in India?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2127' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2127' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2127' ? 'active' : ''}`} id="accordion_2127_content">
                  <div className="trademark-renewal-page-content">
                    In India, the renewal process is structured to ensure thorough protection:
                    <ul className="trademark-renewal-faq-list">
                      <li>Submission of Form TM-R to the Trademark Registry.</li>
                      <li>A comprehensive review of the application by the Registry to ensure no conflicts.</li>
                      <li>Details of the renewed trademark are publicized in the Trademark Journal for four months, allowing third parties to raise objections.</li>
                      <li>Following this, and after resolving any disputes, the Trademark Renewal Certificate is issued, marking the trademark's renewed status for another decade.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2128' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2128')}
                >
                  <span className="trademark-renewal-accordion-question">Is the renewal process complicated?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2128' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2128' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2128' ? 'active' : ''}`} id="accordion_2128_content">
                  <div className="trademark-renewal-page-content">
                    The renewal process involves several steps and careful documentation. While it can appear complex, entities like efind24 offer services that handle the intricate details, making the renewal process more streamlined for trademark owners.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2129' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2129')}
                >
                  <span className="trademark-renewal-accordion-question">What is the Trademark Journal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2129' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2129' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2129' ? 'active' : ''}`} id="accordion_2129_content">
                  <div className="trademark-renewal-page-content">
                    The Trademark Journal is an official publication where renewed trademarks are listed. This allows for transparency and offers third parties a chance to raise any objections they might have against a particular renewal.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2130' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2130')}
                >
                  <span className="trademark-renewal-accordion-question">What if there are objections to my renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2130' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2130' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2130' ? 'active' : ''}`} id="accordion_2130_content">
                  <div className="trademark-renewal-page-content">
                    If objections are raised, they must be addressed by the applicant. If unresolved, the Registrar might organize a hearing to understand and settle the matter.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2131' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2131')}
                >
                  <span className="trademark-renewal-accordion-question">After renewing, how long will my trademark be valid?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2131' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2131' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2131' ? 'active' : ''}`} id="accordion_2131_content">
                  <div className="trademark-renewal-page-content">
                    Once successfully renewed, a trademark remains valid for an additional ten years from the date of renewal.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2132' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2132')}
                >
                  <span className="trademark-renewal-accordion-question">What role does efind24 play in trademark renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2132' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2132' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2132' ? 'active' : ''}`} id="accordion_2132_content">
                  <div className="trademark-renewal-page-content">
                    efind24 is a service provider that aids in the entire trademark renewal process. From gathering details, crafting the application, to managing the submission process with the Registrar of Trademarks, they ensure the renewal is accurate and timely.
                  </div>
                </div>
              </div>

              <div className={`trademark-renewal-accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`trademark-renewal-accordion-toggle ${openAccordion === 'accordion_2133' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2133')}
                >
                  <span className="trademark-renewal-accordion-question">Why should I consider efind24 for my trademark renewal?</span>
                  <i className={`trademark-renewal-accordion-icon ${openAccordion === 'accordion_2133' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2133' ? '−' : '+'}
                  </i>
                </button>
                <div className={`trademark-renewal-accordion-content ${openAccordion === 'accordion_2133' ? 'active' : ''}`} id="accordion_2133_content">
                  <div className="trademark-renewal-page-content">
                    efind24 boasts expertise in trademark renewal. Their meticulous approach and dedication to client satisfaction ensures that the renewal process is smooth and efficient, safeguarding the trademark and the associated rights for the owner.
                  </div>
                </div>
              </div>

              <button className="trademark-renewal-btn trademark-renewal-btn-outline trademark-renewal-btn-primary trademark-renewal-load-more-faq-btn" onClick={handleLoadMoreFAQs}>
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

export default TrademarkRenewal;

