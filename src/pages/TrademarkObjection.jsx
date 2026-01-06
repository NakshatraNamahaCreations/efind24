import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/lawyers-handshake-agreement.jpg';
import './TrademarkObjection.css';

function TrademarkObjection() {
  const [selectedService, setSelectedService] = useState('Objection Response');
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
  const comparisonTableRef = useRef(null);
  const documentsSectionRef = useRef(null);
  const documentsTitleRef = useRef(null);
  const documentsCardRef = useRef(null);
  const relatedDocumentsCardRef = useRef(null);
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
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all elements
    if (infoPanelRef.current) observer.observe(infoPanelRef.current);
    if (formPanelRef.current) observer.observe(formPanelRef.current);
    if (processMainTitleRef.current) observer.observe(processMainTitleRef.current);
    if (comparisonTableRef.current) observer.observe(comparisonTableRef.current);
    if (documentsSectionRef.current) observer.observe(documentsSectionRef.current);
    if (documentsTitleRef.current) observer.observe(documentsTitleRef.current);
    if (documentsCardRef.current) observer.observe(documentsCardRef.current);
    if (relatedDocumentsCardRef.current) observer.observe(relatedDocumentsCardRef.current);
    if (relatedGuidesCardRef.current) observer.observe(relatedGuidesCardRef.current);
    if (faqSectionRef.current) observer.observe(faqSectionRef.current);
    
    processContentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (infoPanelRef.current) observer.unobserve(infoPanelRef.current);
      if (formPanelRef.current) observer.unobserve(formPanelRef.current);
      if (processMainTitleRef.current) observer.unobserve(processMainTitleRef.current);
      if (comparisonTableRef.current) observer.unobserve(comparisonTableRef.current);
      if (documentsSectionRef.current) observer.unobserve(documentsSectionRef.current);
      if (documentsTitleRef.current) observer.unobserve(documentsTitleRef.current);
      if (documentsCardRef.current) observer.unobserve(documentsCardRef.current);
      if (relatedDocumentsCardRef.current) observer.unobserve(relatedDocumentsCardRef.current);
      if (relatedGuidesCardRef.current) observer.unobserve(relatedGuidesCardRef.current);
      if (faqSectionRef.current) observer.unobserve(faqSectionRef.current);
      processContentRefs.current.forEach((ref) => {
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
    <div className="trademark-objection-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Objection</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Objection</div>
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
                  <span className="feature-text">100% Legal Validity & Govt. Filing Guarantee</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon magnifying">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="m20 20-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="feature-text">AI-Powered Trademark Search & Filing</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon rocket">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M4.5 16.5c-1.5-1.5-2-4-2-6s.5-4.5 2-6 4-2 6-2 4.5.5 6 2 2 4 2 6-.5 4.5-2 6-4 2-6 2-4.5-.5-6-2z" stroke="white" strokeWidth="2" fill="none"/>
                      <path d="M6 12h12M9 9l3 3-3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="feature-text">Dedicated Experts + Compliance Support</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon graph">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 18v-6h6v6H3zM9 18V9h6v9H9zM15 18V3h6v15h-6z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">MSME Priority Pricing, Corporate Bundles & International Protection</span>
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
                    <option value="Objection Response">Objection Response</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                  </select>
                </div>

                <p className="form-message">
                  Replies can be filed only if your trademark is marked "Objected." Looks like yours isn't there yet.
                </p>

                <div className="form-group">
                  <label className="form-label">Application Number</label>
                  <input
                    type="text"
                    name="applicationNumber"
                    className="form-input"
                    placeholder="Enter application number"
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
                    placeholder="Enter brand name"
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
                    <option value="1">Class 1</option>
                    <option value="2">Class 2</option>
                    <option value="3">Class 3</option>
                    <option value="4">Class 4</option>
                    <option value="5">Class 5</option>
                  </select>
                </div>

                <div className="form-buttons">
                  <button className="btn-get-quote">Get Quote</button>
                  <button className="btn-live-chat">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Live Chat with Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Objection Process Section */}
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
                      <div className="author-details">
                        <span className="author-name">SIRANJEEVI B</span>
                        <span className="author-role">Business Advisor</span>
                      </div>
                    </div>
                  </a>
                  <div className="author-updated">
                    Updated on: <span className="update-date">Jun 24, 2024</span>
                  </div>
                </div>

                <h1 ref={processMainTitleRef} className="process-main-title fade-in-left">Trademark Objection Process in India</h1>
            <p className="process-intro">
                  In India, the trademark objection step is significant during the process of registering a trademark. At this point, the officer carefully checks your chosen brand name to ensure it meets all the rules. If there are any problems or issues, they will let you know. It's essential to fix these issues to ensure your brand name gets registered without problems. This ensures your brand name follows the trademark law and isn't too similar to other brand names. With help from IndiaFilings, dealing with these issues is easier, helping you get your trademark registered smoothly.
                </p>

                {/* What's a Trademark */}
                <div ref={(el) => (processContentRefs.current[1] = el)} className="process-content-block fade-in-up">
                  <h2 className="content-block-title">What's a Trademark?</h2>
                  <p className="content-block-text">
                    Before diving into trademark objections, let's understand what a trademark is. In India, a trademark can be a unique sign, picture, or name that shows people who made a product or offered a service. It is a business's special ID showing its brand and quality. Registering your trademark means you get special rights to use it, and others can't use it without your approval.
                  </p>
                  <p className="content-block-text">
                    Trademark Registration undergoes the following steps:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item">
                      <a href="https://www.indiafilings.com/trademark-search">Trademark search</a>
                    </li>
                    <li className="benefit-item">Filing of trademark application</li>
                    <li className="benefit-item">Formality inspection</li>
                    <li className="benefit-item">Publication in the journal</li>
                    <li className="benefit-item">Grant of <a href="https://www.indiafilings.com/trademark-registration">trademark registration</a></li>
                  </ul>
                  <p className="content-block-text">
                    A registered trademark cannot be used by any third person without authority, thus protecting it from any infringement.
            </p>
          </div>

                {/* Trademark Objection */}
          <div ref={(el) => (processContentRefs.current[2] = el)} className="process-content-block fade-in-left">
                  <h2 className="content-block-title">Trademark Objection</h2>
            <p className="content-block-text">
                    As mentioned above, Upon submitting a trademark application to the Indian Trademark Office, it undergoes a rigorous examination. If the officer identifies inconsistencies or potential overlaps with existing trademarks during this scrutiny, they will issue an objection. In the business context, it's essential to understand that an objection isn't a denial but a request for clarification or adjustment. Addressing this promptly and adequately is vital for ensuring smooth trademark registration.
            </p>
            <p className="content-block-text">
                    If the mark contains offensive or obscene images or words, it might face objection.
            </p>
          </div>

                {/* Reasons for Trademark Objections */}
          <div ref={(el) => (processContentRefs.current[3] = el)} className="process-content-block fade-in-right">
                  <h2 className="content-block-title">Reasons for Trademark Objections</h2>
                  <p className="content-block-text">
                    The Indian Trademark Office might object to a trademark application based on specific grounds detailed in Section 9 and Section 11 of the Indian Trademarks Act. The primary reasons are when the submitted trademarks lack uniqueness, are too descriptive and generic, or clash with previously registered or pending trademarks.
                  </p>
                  
                  <h3 className="sub-section-title">Objections Under Section 11:</h3>
                  <p className="content-block-text">
                    This section concerns objections related to the similarity between the proposed trademark and existing trademarks.
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item">
                      <strong>Identical Marks:</strong> For instance, applying for "Sunshine" as a beverage trademark when "Sunshine" already exists in the same category would invite an objection due to the same names.
                    </li>
                    <li className="benefit-item">
                      <strong>Similar Sound:</strong> An application for "CandyLand" for candy products might be objected to if "KandyLand" is already registered in the same sector because of the similarity in sound.
                    </li>
                    <li className="benefit-item">
                      <strong>Similar Concept:</strong> Applying for "TechSolutions" for a tech company might clash with an existing "TechPro" mark since both suggest similar concepts.
                    </li>
                  </ul>

                  <h3 className="sub-section-title">Objections Under Section 9:</h3>
                  <p className="content-block-text">
                    This section focuses on trademarks that might be too obvious, lack a unique character, or could be misleading.
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item">
                      <strong>Descriptive Terms:</strong> A trademark like "FreshJuice" for juice products could face objection because it directly describes the product.
                    </li>
                    <li className="benefit-item">
                      <strong>Lack of Distinctiveness:</strong> If you were to register a simple geometric design like a square for furniture, it might be objected to for lacking a unique identity.
                    </li>
                    <li className="benefit-item">
                      <strong>Deceptive or Misleading:</strong> Brands that might falsely represent their products, such as "OrganicGarden" for a skincare range with non-organic ingredients, could face objection due to potential consumer deception.
                    </li>
                  </ul>
                </div>

                {/* Responding to Trademark Objections Online */}
                <div ref={(el) => (processContentRefs.current[4] = el)} className="process-content-block fade-in-up">
                  <h2 className="content-block-title">Responding to Trademark Objections Online</h2>
                  <p className="content-block-text">
                    The reviewing officer must confirm that the trademark application meets all necessary standards and regulations. If it doesn't, the applicant will receive a notification, prompting a response within 30 days. The application may be denied if the response does not meet the expected standards. However, the applicant can appeal to the Intellectual Property Appellate Board if rejected.
                </p>
              </div>

                {/* Trademark Objection vs Trademark Opposition */}
                <div ref={(el) => (processContentRefs.current[5] = el)} className="process-content-block fade-in-left">
                  <h2 className="content-block-title">Trademark Objection vs Trademark Opposition</h2>
                  <p className="content-block-text">
                    It's essential to distinguish between "objection" and "opposition." Though often used interchangeably, they have distinct meanings. While an "objection" pertains to concerns raised by the reviewing officer about the registration process's adherence, an <a href="https://www.indiafilings.com/trademark-opposition">trademark opposition</a> is a challenge posed by a third party questioning the trademark's validity.
                  </p>
                </div>

                {/* When to Submit the Trademark Objection Reply */}
                <div ref={(el) => (processContentRefs.current[6] = el)} className="process-content-block fade-in-right">
                  <h2 className="content-block-title">When to Submit the Trademark Objection Reply</h2>
                  <p className="content-block-text">
                    Upon receiving the examination report, filing a trademark reply within 30 days is essential. This trademark reply should be comprehensive and must address the queries raised in the examination report.
                </p>
              </div>

                {/* Documents required for Trademark Objection Reply Note */}
                <div ref={(el) => (processContentRefs.current[7] = el)} className="process-content-block fade-in-up">
                  <h2 className="content-block-title">Documents required for Trademark Objection Reply Note</h2>
                  <p className="content-block-text">
                    To address the objections effectively, the following documents should be submitted in the trademark reply note:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item">Invoices and bills</li>
                    <li className="benefit-item">Affidavits</li>
                    <li className="benefit-item">Business cards and letterheads</li>
                    <li className="benefit-item">Any relevant government documents, such as MSME or FSSCI certificates</li>
                    <li className="benefit-item">Screenshots of social media pages or copies of advertisements</li>
                  </ul>
                </div>

                {/* Trademark Objection Reply Fees */}
                <div ref={(el) => (processContentRefs.current[8] = el)} className="process-content-block fade-in-left">
                  <h2 className="content-block-title">Trademark Objection Reply Fees</h2>
                  <p className="content-block-text">
                    When responding to a trademark objection, it's important to consider the associated fees. The trademark objection reply fees can vary depending on several factors, including the complexity of the objection, the need for legal assistance, and the jurisdiction in which the trademark application is filed.
                  </p>
                  <p className="content-block-text">
                    <strong>IndiaFilings offers exclusive pricing for trademark applications filed through us!</strong>
                </p>
              </div>

                {/* How to File a Trademark Objection Reply */}
                <div ref={(el) => (processContentRefs.current[9] = el)} className="process-content-block fade-in-right">
                  <h2 className="content-block-title">How to File a Trademark Objection Reply?</h2>
                  <p className="content-block-text">
                    Upon receiving the examination report, it's critical to promptly submit a detailed written reply. Failing to do so may result in the application's rejection. The response should be thorough, presenting justifications, supporting evidence, and facts, asserting that the mark meets all requirements for valid registration. If the applicant's response convinces the reviewing officer, the trademark will be listed in the public journal. The public has four months to review and raise any opposition.
                  </p>
                  <p className="content-block-text">
                    When crafting a reply, certain aspects require careful consideration:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item">
                      <strong>Analysis:</strong> It's vital to comprehensively understand and assess the objection. Any vagueness could lead to an inadequate response.
                    </li>
                    <li className="benefit-item">
                      <strong>Drafting:</strong> The response must adhere to the specified format to prevent potential rejection. It should effectively address the objection, referencing applicable laws, prior rulings, and differences between the contested marks. Any supplementary evidence or documents that reinforce the response should be included.
                    </li>
                    <li className="benefit-item">
                      <strong>Affidavit:</strong> If the trademark is set to appear on digital platforms like websites, social media, or e-commerce sites, an accompanying affidavit confirming this must be included with the reply.
                    </li>
                  </ul>
                </div>

                {/* IndiaFilings: Expert Assistance for Trademark Objections */}
                <div ref={(el) => (processContentRefs.current[10] = el)} className="process-content-block fade-in-up">
                  <h2 className="content-block-title">IndiaFilings: Expert Assistance for Trademark Objections</h2>
                  <p className="content-block-text">
                    Expansions can arise during the <a href="https://www.indiafilings.com/trademark-registration">trademark registration</a> process, demanding swift and effective management. If you are seeking adept guidance in addressing these objections and for end-to-end trademark registration services, IndiaFilings is your ideal choice. Our expert team excels in handling the nuances of trademark objections, ensuring your responses to examination reports are comprehensive. With our expert advice, you boost your chances of bypassing these obstacles and confidently obtaining your trademark.
                  </p>
                  <p className="content-block-text">
                    For tailored trademark registration servces, connect with our trademark experts now!
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
                    <a href="#" className="guide-link">Who can file trademark opposition?</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Top Reasons for Trademark Objection</a>
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
          <h2 ref={documentsTitleRef} className="documents-section-title fade-in-up">Documents Required For Trademark Objection</h2>
          <div className="documents-wrapper">
            {/* Left Card - Documents List */}
            <div ref={documentsCardRef} className="documents-card fade-in-left">
              <div className="card-group">
                <span className="doc-title">Advertisement Copy</span>
              </div>
              <div className="card-group">
                <span className="doc-title">Product Images</span>
              </div>
              <div className="card-group">
                <span className="doc-title">Sales Invoice</span>
              </div>
              <div className="card-group">
                <span className="doc-title">Domain Registration copy</span>
              </div>
              <div className="card-group">
                <span className="doc-title">Website Screenshot</span>
            </div>
          </div>

            {/* Right Card - Related Documents */}
            <div ref={relatedDocumentsCardRef} className="related-documents-card fade-in-right">
              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/llp-registration#doc_req_sec" className="related-doc-link">Documents Required for LLP Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">8</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/proprietorship#doc_req_sec" className="related-doc-link">Documents Required for Proprietorship Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">2</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/company-registration#doc_req_sec" className="related-doc-link">Documents Required for Company Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">2</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/trademark-registration#doc_req_sec" className="related-doc-link">Documents Required for Trademark Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">7</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/gst-registration#doc_req_sec" className="related-doc-link">Documents Required for GST Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">10</span>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="related-doc-title">
                    <a href="https://www.indiafilings.com/partnership#doc_req_sec" className="related-doc-link">Documents Required for Partnership Registration</a>
                  </span>
                </div>
                <span className="badge badge-primary badge-pill">5</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark vs Copyright vs Patent Comparison Table Section */}
      <section ref={comparisonTableRef} className="comparison-table-section fade-in-up">
        <div className="container">
          <h2 className="comparison-table-title">Trademark vs Copyright vs Patent</h2>
          <div className="comparison-table-card">
            <div className="card-table scrollable-x-auto">
              <table className="comparison-table">
                <thead>
                  <tr className="table-header-row">
                    <td className="table-header-cell"></td>
                    <td className="table-header-cell text-center">Trademark</td>
                    <td className="table-header-cell text-center">Patent</td>
                    <td className="table-header-cell text-center">Copyright</td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row-alt">
                    <td className="table-cell-alt">
                      What's protected
                    </td>
                    <td className="table-cell-alt">
                      Any word, phrase, symbol or design that recognizes and differentiates the source of one party's goods from those of another.
                    </td>
                    <td className="table-cell-alt">
                      Inventions, such as procedure, manufacturer, composition, machines of matter as well as improvements to these.
                    </td>
                    <td className="table-cell-alt">
                      Books, articles, music, photography, sculptures, dances, sound recordings, motion films and other original works of authorship.
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell">
                      Requirements for protection
                    </td>
                    <td className="table-cell">
                      A mark must be distinguishable, in the sense that it must be able to identify the source of a certain good.
                    </td>
                    <td className="table-cell">
                      A fresh, valuable, and unusual invention is required.
                    </td>
                    <td className="table-cell">
                      A work must be unique, original, and created in a tangible manner.
                    </td>
                  </tr>
                  <tr className="table-row-alt">
                    <td className="table-cell-alt">
                      Term of protection
                    </td>
                    <td className="table-cell-alt">
                      As long as the mark is used in commerce.
                    </td>
                    <td className="table-cell-alt">
                      20 years
                    </td>
                    <td className="table-cell-alt">
                      Author's life span+ 60 years.
                    </td>
                  </tr>
                  <tr>
                    <td className="table-cell">
                      Rights Granted
                    </td>
                    <td className="table-cell">
                      Right to use the mark and to prohibit others from using identical marks in a way that could create confusion about the goods or services' origin.
                    </td>
                    <td className="table-cell">
                      Right to restrict others from manufacturing, selling, or importing the patented invention.
                    </td>
                    <td className="table-cell">
                      Copyrighted works have the power to dictate their reproduction, creative works, circulation, public performance, and display.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqSectionRef} className="faq-section fade-in-up">
        <div className="container">
          <div className="faq-wrapper">
            <h2 className="faq-title">FAQ's on Trademark Objection</h2>
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_315' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_315')}
                >
                  <span className="accordion-question">What is a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_315' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_315' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_315' ? 'active' : ''}`} id="accordion_315_content">
                  <div className="page-content">
                    In India, a trademark can be a unique sign, image, or name that signifies who created a product or provided a service. It stands as a unique identifier for a business, showcasing its brand and quality. Registering a trademark grants exclusive rights to use it, preventing unauthorized usage by others.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_316' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_316')}
                >
                  <span className="accordion-question">Why is the trademark objection step crucial in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_316' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_316' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_316' ? 'active' : ''}`} id="accordion_316_content">
                  <div className="page-content">
                    The trademark objection step is pivotal during the trademark registration process. It involves an officer meticulously checking the chosen brand name to ensure compliance with all rules. Objections indicate issues or conflicts, which need rectification for successful registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_317' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_317')}
                >
                  <span className="accordion-question">What are the primary steps for Trademark Registration in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_317' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_317' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_317' ? 'active' : ''}`} id="accordion_317_content">
                  <div className="page-content">
                    Trademark registration involves:
                    <ul className="faq-list">
                      <li>✓ Trademark search</li>
                      <li>✓ Filing of trademark application</li>
                      <li>✓ Formality inspection</li>
                      <li>✓ Publication in the journal</li>
                      <li>✓ Grant of trademark registration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_318' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_318')}
                >
                  <span className="accordion-question">What happens if there's a Trademark Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_318' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_318' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_318' ? 'active' : ''}`} id="accordion_318_content">
                  <div className="page-content">
                    Upon submitting a trademark application, it undergoes rigorous examination. If any inconsistencies or overlaps with existing trademarks are found, an objection is issued. It's vital to note that an objection isn't a denial but a request for clarification or adjustment.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_319' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_319')}
                >
                  <span className="accordion-question">Why do I need to pay trademark objection reply fees?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_319' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_319' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_319' ? 'active' : ''}`} id="accordion_319_content">
                  <div className="page-content">
                    These fees cover the administrative costs of processing your reply and the jurisdiction in which the trademark application is filed. We offers exclusive and competitive pricing for responding to trademark objections.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_320' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_320')}
                >
                  <span className="accordion-question">What are objections under Section 11?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_320' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_320' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_320' ? 'active' : ''}`} id="accordion_320_content">
                  <div className="page-content">
                    Section 11 objections relate to the similarity between the proposed trademark and existing ones. These can be due to identical marks, similar sounds, or shared concepts among trademarks.
              </div>
            </div>
          </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_321' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_321')}
                >
                  <span className="accordion-question">What are objections under Section 9?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_321' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_321' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_321' ? 'active' : ''}`} id="accordion_321_content">
                  <div className="page-content">
                    Section 9 deals with objections raised due to trademarks that are too descriptive, lack distinctiveness, or are potentially misleading to consumers.
              </div>
            </div>
          </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_322' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_322')}
                >
                  <span className="accordion-question">How does one respond to trademark objections online?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_322' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_322' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_322' ? 'active' : ''}`} id="accordion_322_content">
                  <div className="page-content">
                    If the trademark application fails to meet standards, a notification is sent to the applicant. They must respond within 30 days, addressing the concerns raised. Failure to satisfy the standards may result in application denial, though appeals can be made to the Intellectual Property Appellate Board.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_323' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_323')}
                >
                  <span className="accordion-question">What's the difference between Trademark Objection and Trademark Opposition?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_323' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_323' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_323' ? 'active' : ''}`} id="accordion_323_content">
                  <div className="page-content">
                    While the terms are sometimes used interchangeably, they are different. An "objection" relates to concerns raised by the reviewing officer about the registration process. In contrast, "trademark opposition" involves challenges by third parties disputing the trademark's validity.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_324' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_324')}
                >
                  <span className="accordion-question">When should one submit the objection reply?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_324' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_324' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_324' ? 'active' : ''}`} id="accordion_324_content">
                  <div className="page-content">
                    Upon receiving the examination report, it's crucial to file a reply within 30 days, comprehensively addressing all queries raised.
                  </div>
                </div>
              </div>

              {/* Hidden FAQs that show on Load More */}
              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2112' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2112')}
                >
                  <span className="accordion-question">What documents are needed for the reply note?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2112' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2112' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2112' ? 'active' : ''}`} id="accordion_2112_content">
                  <div className="page-content">
                    To effectively address objections, one should submit:
                    <ul className="faq-list">
                      <li>✓ Invoices and bills</li>
                      <li>✓ Affidavits</li>
                      <li>✓ Business cards and letterheads</li>
                      <li>✓ Relevant government documents, such as MSME or FSSCI certificates</li>
                      <li>✓ Screenshots of social media pages or advertisement copies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2113' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2113')}
                >
                  <span className="accordion-question">How should one respond to the Trademark Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2113' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2113' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2113' ? 'active' : ''}`} id="accordion_2113_content">
                  <div className="page-content">
                    On receiving the examination report, a detailed written reply should be promptly submitted. This response should present justifications, evidence, and facts, asserting the mark's eligibility for valid registration.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2114' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2114')}
                >
                  <span className="accordion-question">What are critical aspects to consider when crafting a reply?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2114' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2114' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2114' ? 'active' : ''}`} id="accordion_2114_content">
                  <div className="page-content">
                    Crafting a reply demands:
                    <ul className="faq-list">
                      <li>✓ Comprehensive objection analysis</li>
                      <li>✓ Adherence to the specified format</li>
                      <li>✓ References to applicable laws, prior rulings, and mark differences</li>
                      <li>✓ Including any supporting documents or evidence</li>
                      <li>✓ An affidavit if the trademark appears on digital platforms</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2115' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2115')}
                >
                  <span className="accordion-question">What role does IndiaFilings play in the Trademark Objection process?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2115' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2115' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2115' ? 'active' : ''}`} id="accordion_2115_content">
                  <div className="page-content">
                    IndiaFilings offers expert guidance on trademark objections and end-to-end registration services. Their team specializes in addressing objections, ensuring responses are comprehensive, boosting the chances of successful trademark registration.
              </div>
            </div>
          </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2116' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2116')}
                >
                  <span className="accordion-question">Why should I consider IndiaFilings for managing Trademark Objections?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2116' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2116' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2116' ? 'active' : ''}`} id="accordion_2116_content">
                  <div className="page-content">
                    IndiaFilings boasts expertise in the intricacies of trademark objections. By choosing them, you enhance your chances of navigating these challenges and securing your trademark with confidence.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2117' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2117')}
                >
                  <span className="accordion-question">Can a trademark application be denied?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2117' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2117' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2117' ? 'active' : ''}`} id="accordion_2117_content">
                  <div className="page-content">
                    Yes, if the applicant's response to an objection doesn't meet the expected standards, the application may be denied. However, the applicant can appeal against this decision.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2118' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2118')}
                >
                  <span className="accordion-question">How does one differentiate between identical and similar trademarks?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2118' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2118' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2118' ? 'active' : ''}`} id="accordion_2118_content">
                  <div className="page-content">
                    Identical marks are exactly the same, while similar trademarks might have differences in appearance, sound, or concept but can still cause confusion among consumers.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2119' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2119')}
                >
                  <span className="accordion-question">Why is a descriptive trademark objectionable?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2119' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2119' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2119' ? 'active' : ''}`} id="accordion_2119_content">
                  <div className="page-content">
                    Descriptive trademarks, like "FreshJuice" for juice products, directly describe the product. Such trademarks lack uniqueness, making them objectionable as they don't distinctly identify the source of the goods or services.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2120' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2120')}
                >
                  <span className="accordion-question">What is the public's role after the objection is addressed?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2120' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2120' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2120' ? 'active' : ''}`} id="accordion_2120_content">
                  <div className="page-content">
                    After addressing the objection, the trademark is listed in a public journal. The public then has four months to review and raise any opposition against it.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2121' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2121')}
                >
                  <span className="accordion-question">What happens if an objection isn't addressed within the stipulated time?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2121' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2121' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2121' ? 'active' : ''}`} id="accordion_2121_content">
                  <div className="page-content">
                    If objections aren't addressed within the provided timeframe, the trademark application may face rejection.
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

export default TrademarkObjection;

