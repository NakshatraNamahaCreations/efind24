import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/close-up-lawyer-signing-papers.jpg';
import './CopyrightObjection.css';

function CopyrightObjection() {
  const [formData, setFormData] = useState({
    objectionType: '',
    ccNumber: '',
    receiptNumber: '',
    dairyNumber: ''
  });

  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  // Refs for scroll animations
  const bannerSectionRef = useRef(null);
  const infoPanelRef = useRef(null);
  const formPanelRef = useRef(null);
  const processContentRef = useRef(null);
  const relatedGuidesRef = useRef(null);
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
    observeElement(faqSectionRef.current);

    return () => {
      if (bannerSectionRef.current) observer.unobserve(bannerSectionRef.current);
      if (infoPanelRef.current) observer.unobserve(infoPanelRef.current);
      if (formPanelRef.current) observer.unobserve(formPanelRef.current);
      if (processContentRef.current) observer.unobserve(processContentRef.current);
      if (relatedGuidesRef.current) observer.unobserve(relatedGuidesRef.current);
      if (faqSectionRef.current) observer.unobserve(faqSectionRef.current);
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
    <div className="copyright-objection-page">
      <Header />
      <section ref={bannerSectionRef} className="copyright-objection-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="copyright-objection-title">Copyright Objection</h2>
        <div className="copyright-objection-watermark">Copyright Objection</div>
      </section>
      
      <section className="copyright-objection-content-section">
        <div className="container">
          <div className="copyright-objection-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="copyright-objection-info-panel fade-in-left">
              <h2 className="copyright-objection-heading">
                File an Effective Reply to Copyright <span className="copyright-objection-underline">Objections</span>
              </h2>
              <p className="copyright-objection-description">
                Got a copyright objection? Our experts help you draft and file a clear, effective reply to resolve it quickly. Protect your creative work and secure your legal rights under the Copyright Act with a timely response.
              </p>
              
              <div className="copyright-objection-features-list">
                <div className="copyright-objection-feature-item">
                  <div className="copyright-objection-feature-icon checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                    </svg>
                  </div>
                  <span className="copyright-objection-feature-text">Resolve Copyright Objections Quickly and Effectively</span>
                </div>
                
                <div className="copyright-objection-feature-item">
                  <div className="copyright-objection-feature-icon document">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="white"/>
                    </svg>
                  </div>
                  <span className="copyright-objection-feature-text">Professional Drafting and Submission of Objection Replies</span>
                </div>
                
                <div className="copyright-objection-feature-item">
                  <div className="copyright-objection-feature-icon briefcase">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" fill="white"/>
                    </svg>
                  </div>
                  <span className="copyright-objection-feature-text">100% Online Process for Easy and Secure Objection Handling</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div ref={formPanelRef} className="copyright-objection-form-panel fade-in-right">
              <div className="copyright-objection-form-card">
                <h3 className="copyright-objection-form-title">Apply For Copyright Objection</h3>
                
                <div className="copyright-objection-form-group">
                  <label className="copyright-objection-form-label">Copyright Objection Type</label>
                  <select 
                    className="copyright-objection-form-select"
                    name="objectionType"
                    value={formData.objectionType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Copyright Objection Type</option>
                    <option value="Formality Objection">Formality Objection</option>
                    <option value="Substantive Objection">Substantive Objection</option>
                    <option value="Procedural Objection">Procedural Objection</option>
                  </select>
                </div>

                <div className="copyright-objection-form-group">
                  <label className="copyright-objection-form-label">CC Number</label>
                  <input
                    type="text"
                    name="ccNumber"
                    className="copyright-objection-form-input"
                    placeholder="CC Number"
                    value={formData.ccNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="copyright-objection-form-group">
                  <label className="copyright-objection-form-label">Receipt Number</label>
                  <input
                    type="text"
                    name="receiptNumber"
                    className="copyright-objection-form-input"
                    placeholder="Receipt Number"
                    value={formData.receiptNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="copyright-objection-form-group">
                  <label className="copyright-objection-form-label">Dairy Number</label>
                  <input
                    type="text"
                    name="dairyNumber"
                    className="copyright-objection-form-input"
                    placeholder="Dairy Number"
                    value={formData.dairyNumber}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="copyright-objection-form-buttons">
                  <button className="copyright-objection-btn-get-quote">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-wrapper">
            {/* Left Column - Content Card */}
            <div className="process-content-card">
              <div className="card-body">
                <h1 ref={processContentRef} className="process-main-title fade-in-left">Copyright Objection - Craft an Effective Reply</h1>
                
                <p className="process-intro">
                  A&nbsp;<a className="copyright-objection-content-link" href="/copyright-objection">copyright objection</a>&nbsp;arises when the Registrar identifies a resemblance between the work submitted in a copyright application and existing market content. This prompts the Registrar to allow the applicant to contest the objection by presenting a compelling argument in their defence. A persuasive objection reply is crucial for securing copyright registration and ensuring the applicant's creation is legally protected. Have you been notified about a similar issue? This article will guide you through responding effectively to a copyright objection notice
                </p>
                
                <p className="process-intro">
                  Has someone objected to your copyright application? Have you received a notice in this regard? efind24 experts can help you file effective replies for&nbsp;copyright objections.
                </p>

                {/* Copyright Registration */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Copyright Registration</h2>
                  <p className="content-block-text">
                    Copyright signifies the legal ownership a creator holds over their work. To obtain formal recognition of this right, it's essential to register your copyright. The&nbsp;<a className="copyright-objection-content-link" href="/copyright-registration">Copyright Registration</a>&nbsp;process in India is regulated by the Copyright Act of 1957 and the Copyright Rules of 2013. These laws allow for the copyrighting of various forms of original works, including artistic creations, cinematographic films, musical compositions, literary and dramatic pieces, sound recordings, and software, as long as the work represents a concrete expression of an idea.&nbsp;Throughout the registration journey, an applicant may be alerted to objections concerning their claim to the work or potential issues within their application. The applicant must address these concerns in such instances by responding to the copyright objection notice.
                  </p>
                </div>
                
                {/* Copyright Registration Process */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Copyright Registration Process</h2>
                  <p className="content-block-text">
                    The&nbsp;<a className="copyright-objection-content-link" href="/copyright-registration">copyright registration process</a>&nbsp;typically unfolds through several formal stages:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item"><strong>Application:</strong>&nbsp;The applicant submits a completed application form along with the necessary fees and deposit copies of the work for which copyright protection is sought.</li>
                    <li className="benefit-item"><strong>Examination:</strong>&nbsp;The copyright office reviews the application to ensure compliance with legal requirements, including the work's originality and the correctness of the application details.</li>
                    <li className="benefit-item"><strong>Objection:</strong>&nbsp;During the examination, if any issues arise—such as potential conflicts with existing copyrighted works or errors within the application—the office raises an objection, prompting the applicant to respond satisfactorily.</li>
                    <li className="benefit-item"><strong>Registration:</strong>&nbsp;Upon resolving objections and confirming the work meets all copyright criteria, the office approves the application.</li>
                    <li className="benefit-item"><strong>Copyright Issuance:</strong>&nbsp;The office then issues a copyright certificate, formally recognizing the applicant's rights over the work and making the copyright information part of the public record.</li>
                  </ul>
                </div>
                
                {/* Copyright Objections in the Registration Process */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Copyright Objections in the Registration Process</h2>
                  <p className="content-block-text">
                    As mentioned above, A copyright objection occurs when the copyright registration authority, such as the Copyright Office, identifies issues or conflicts with a submitted copyright application. These concerns may arise due to several reasons, such as:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item"><strong>Similarity to Existing Works:</strong>&nbsp;The work submitted for copyright may appear similar to an already copyrighted work, leading to questions about originality and potential infringement.</li>
                    <li className="benefit-item"><strong>Incomplete or Incorrect Application:</strong>&nbsp;The application may have missing details or incorrect information, hindering the evaluation process.</li>
                    <li className="benefit-item"><strong>Lack of Distinctiveness:</strong>&nbsp;The work may not demonstrate a tangible expression of an idea or lacks the creativity and originality required for copyright protection.</li>
                    <li className="benefit-item"><strong>Documentation Issues:</strong>&nbsp;Required documents may be missing, incomplete, or not properly authenticated, which are necessary to establish the ownership and originality of the work.</li>
                  </ul>
                  <p className="content-block-text">
                    When an objection is raised, the applicant is notified and allowed to respond to the objections. The response must address and clarify the issues raised by the Copyright Office, providing additional information, corrections, or evidence as needed to support the copyright claim. Resolving these objections is crucial for continuing and completing the copyright registration process.
                  </p>
                </div>
                
                {/* Responding to Copyright Objections */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Responding to Copyright Objections</h2>
                  <p className="content-block-text">
                    If an objection arises during the copyright registration process, the Registrar will notify the applicant, detailing the specific objections and requesting supplementary documents to address these concerns. Filing a reply to a copyright objection is pivotal in asserting your rights over your creative work. This process involves crafting a detailed and legally sound response that addresses the concerns raised by the Copyright Office. It requires a careful presentation of facts, evidence, and legal arguments to clarify the originality and ownership of your work.&nbsp;Responding to the copyright objection letter is a legal requirement for the applicant. Failure to provide a timely response can lead to the cancellation of the application and its subsequent marking as 'rejected.'&nbsp;For assistance crafting a precise and persuasive reply to address the&nbsp;<a className="copyright-objection-content-link" href="/copyright-objection">objections</a>&nbsp;or discrepancies, consider contacting the professionals at efind24.&nbsp;
                  </p>
                </div>
                
                {/* Things to Remember */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Things to Remember while Filing Reply to Copyright Objection</h2>
                  <p className="content-block-text">
                    Responding to a copyright objection with care and attention to detail is important. Here are some key points to remember:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item"><strong>Understand the Objection:</strong>&nbsp;Before drafting your reply, make sure you fully understand the grounds of the objection. This might involve the aspects of your work that are allegedly infringing or your use does not comply with copyright laws.</li>
                    <li className="benefit-item"><strong>Review Copyright Laws:</strong>&nbsp;Familiarize yourself with the relevant copyright laws that apply to your case. This might involve understanding fair use (in jurisdictions where this applies), copyright exceptions, and the specific requirements for copyright infringement to be established.</li>
                    <li className="benefit-item"><strong>Gather Evidence:</strong>&nbsp;Collect all necessary evidence that supports your case. This might include evidence of original creation, licenses or permissions you have for using the copyrighted material, or evidence supporting a fair use defence.</li>
                    <li className="benefit-item"><strong>Articulate Your Arguments:</strong>&nbsp;Clearly and concisely articulate why your work does not infringe on the copyright holder's rights. If you're claiming fair use, for example, be prepared to explain how your use of the material falls within the criteria for fair use, such as its purpose and character, the nature of the copyrighted work, the amount and substantiality of the portion used, and the effect of the use on the potential market for the copyrighted work.</li>
                    <li className="benefit-item"><strong>Be Professional and Respectful:</strong>&nbsp;Always maintain a professional and respectful tone in your communication. Remember that copyright objections can sometimes arise from misunderstandings or misinterpretations, so aim for clarity and openness in your response.</li>
                    <li className="benefit-item"><strong>Consider Legal Advice:</strong>&nbsp;Depending on the complexity of the case and the potential risks involved, consider seeking legal advice from an attorney specializing in copyright law. They can guide your situation and help you draft a more effective response.</li>
                    <li className="benefit-item"><strong>Timeliness:</strong>&nbsp;Pay attention to any deadlines by which you need to respond to the objection. Failing to reply in time might limit your options or weaken your position.</li>
                    <li className="benefit-item"><strong>Keep Records:</strong>&nbsp;Keep detailed records of all communications and documents related to the copyright objection and your response. This includes copies of the objection, your reply, any supporting documents you submitted, and records of any correspondence.</li>
                    <li className="benefit-item"><strong>Consider Settlement Options:</strong>&nbsp;In some cases, negotiating a settlement with the copyright holder might be in your best interest. This could involve agreeing to cease using the material, paying a licensing fee, or other arrangements that resolve the dispute amicably.</li>
                    <li className="benefit-item"><strong>Follow-Up:</strong>&nbsp;After submitting your reply, monitor for any responses or further communication from the copyright holder or their representatives. Be prepared to engage in further dialogue or legal proceedings if necessary.</li>
                  </ul>
                  <p className="content-block-text">
                    By considering these points and carefully preparing your response, you can more effectively address a copyright objection and work towards a resolution.
                  </p>
                </div>
                
                {/* Documents Required */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Documents Required to File Copyright Objection Reply</h2>
                  <p className="content-block-text">
                    When submitting your reply to a copyright objection, it's essential to include the following documents to support your response:
                  </p>
                  <ul className="benefits-list">
                    <li className="benefit-item"><strong>Copy of the Copyright Registration Application:</strong>&nbsp;This refers to the original submission and clarifies the work for which copyright protection is sought.</li>
                    <li className="benefit-item"><strong>Affidavit for the Reply:</strong>&nbsp;If necessary, this legal statement sworn before a notary public supports the claims made in your response.</li>
                    <li className="benefit-item"><strong>Supporting Documents:</strong>&nbsp;Any additional evidence substantiating your claim of originality and ownership of the work.</li>
                    <li className="benefit-item"><strong>Power of Attorney:</strong>&nbsp;If someone is representing you, this document authorizes them to act on your behalf.</li>
                    <li className="benefit-item"><strong>Copy of the Discrepancy Letter:</strong>&nbsp;Including the letter issued by the Registrar that outlines the specific objections or discrepancies aids in directly addressing the raised concerns.</li>
                  </ul>
                  <p className="content-block-text">
                    The decision to arrange a hearing depends on the Registrar's assessment of the response letter's contents.
                  </p>
                </div>
                
                {/* Consequences */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Consequences of Not Responding to Copyright Objections</h2>
                  <p className="content-block-text">
                    If the applicant fails to submit a reply to the copyright objection within the stipulated timeframe, the Registrar is entitled to cancel the copyright application. Consequently, the application status will be updated to "Rejected". Hence, responding to copyright objections promptly is imperative to prevent such adverse actions by the Registrar.
                  </p>
                </div>
                
                {/* Streamline with efind24 */}
                <div className="process-content-block">
                  <h2 className="content-block-title">Streamline Your Copyright Objection Reply with efind24</h2>
                  <p className="content-block-text">
                    efind24 supports filing replies to&nbsp;copyright objections, providing a straightforward and efficient service for individuals and businesses. Our team of experts assists in understanding the nature of the objection, gathering the necessary documentation, and crafting a well-articulated reply that addresses the concerns raised. With their expertise in copyright laws and procedures, efind24 simplifies the process, ensuring that your response is timely, professional, and compliant with legal requirements, thereby streamlining the resolution of copyright disputes.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Related Guides */}
            <div className="right-column-cards">
              <div ref={relatedGuidesRef} className="related-guides-card fade-in-right">
                <div className="card-header">
                  <h2 className="guides-title">Related Guides</h2>
                </div>
                <div className="card-body">
                  <div className="guides-list">
                    <a href="/copyright-objection" className="guide-link">How to reply to a Copyright Objection?</a>
                    <div className="guide-separator"></div>
                    <a href="/copyright-registration" className="guide-link">Copyright Registration Process and Procedure</a>
                    <div className="guide-separator"></div>
                    <a href="/copyright-registration" className="guide-link">A Guide to Copyright Registration Cost Slabs in India</a>
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
            <h2 className="faq-title">FAQ's on Copyright Objection</h2>
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2802' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2802')}
                >
                  <span className="accordion-question">What is Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2802' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2802' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2802' ? 'active' : ''}`} id="accordion_2802_content">
                  <div className="page-content">
                    Copyright Objection is a formal challenge raised during the process of copyright registration when potential issues or discrepancies are identified.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2803' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2803')}
                >
                  <span className="accordion-question">Why does Copyright Objection occur?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2803' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2803' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2803' ? 'active' : ''}`} id="accordion_2803_content">
                  <div className="page-content">
                    Copyright Objection can occur due to reasons like similarities with existing copyrighted material, potential conflicts in originality, or lack of distinctiveness in the new work.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2804' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2804')}
                >
                  <span className="accordion-question">What is the eligibility criteria for replying to a Copyright Objection in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2804' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2804' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2804' ? 'active' : ''}`} id="accordion_2804_content">
                  <div className="page-content">
                    The primary requirement is to provide substantial evidence of the originality of your work.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2805' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2805')}
                >
                  <span className="accordion-question">How much time is given to respond to a Copyright Objection in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2805' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2805' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2805' ? 'active' : ''}`} id="accordion_2805_content">
                  <div className="page-content">
                    Typically, you have a 30-day period to respond, starting when the Registrar issues a discrepancy letter within 30 days of the initial filing.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2806' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2806')}
                >
                  <span className="accordion-question">What happens if I don't file a reply to a Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2806' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2806' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2806' ? 'active' : ''}`} id="accordion_2806_content">
                  <div className="page-content">
                    Failure to respond may lead to the cancellation of the copyright application, resulting in a 'rejected' status.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2807' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2807')}
                >
                  <span className="accordion-question">What are the benefits of filing a reply to a Copyright Objection in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2807' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2807' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2807' ? 'active' : ''}`} id="accordion_2807_content">
                  <div className="page-content">
                    Filing a reply preserves legal rights, avoids application cancellation, meets legal document requirements, offers drafting flexibility, and provides strong argumentation.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2808' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2808')}
                >
                  <span className="accordion-question">What documents are required for a Copyright Objection reply?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2808' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2808' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2808' ? 'active' : ''}`} id="accordion_2808_content">
                  <div className="page-content">
                    Typically, you need a copy of the registration application, the discrepancy letter issued by the registrar, supporting documents, and possibly an affidavit if required.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2809' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2809')}
                >
                  <span className="accordion-question">What is the process of responding to a Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2809' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2809' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2809' ? 'active' : ''}`} id="accordion_2809_content">
                  <div className="page-content">
                    The process involves analyzing the objection, drafting a well-founded reply, filing the reply with supporting documents, and proceeding to copyright registration if the reply is accepted.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2810' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2810')}
                >
                  <span className="accordion-question">Can I personally draft the reply to a Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2810' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2810' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2810' ? 'active' : ''}`} id="accordion_2810_content">
                  <div className="page-content">
                    Yes, you have the flexibility to draft the reply yourself or seek assistance from a legal expert.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2811' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2811')}
                >
                  <span className="accordion-question">What is the role of efind24 in responding to Copyright Objections?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2811' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2811' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2811' ? 'active' : ''}`} id="accordion_2811_content">
                  <div className="page-content">
                    efind24 provides expert assistance at every stage, including analysis, drafting, filing, and ensuring a compelling response to objections.
                  </div>
                </div>
              </div>

              {/* Hidden FAQs that show on Load More */}
              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2812' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2812')}
                >
                  <span className="accordion-question">How does Copyright registration protect my work?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2812' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2812' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2812' ? 'active' : ''}`} id="accordion_2812_content">
                  <div className="page-content">
                    Copyright registration provides legal evidence of ownership, safeguards your original creative work from unauthorized use, and establishes your rights as a creator.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2813' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2813')}
                >
                  <span className="accordion-question">What types of works are eligible for Copyright Registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2813' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2813' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2813' ? 'active' : ''}`} id="accordion_2813_content">
                  <div className="page-content">
                    Copyright Registration is available for a wide range of works, including artistic, literary, musical, sound recordings, cinematographic films, architectural plans, and more.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2814' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2814')}
                >
                  <span className="accordion-question">What are the reasons for Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2814' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2814' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2814' ? 'active' : ''}`} id="accordion_2814_content">
                  <div className="page-content">
                    Copyright Objection can be raised for reasons such as the existence of similar works in the public domain or significant similarities between the application and existing copyrighted material.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2815' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2815')}
                >
                  <span className="accordion-question">What is the timeframe for filing a reply to Copyright Objections?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2815' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2815' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2815' ? 'active' : ''}`} id="accordion_2815_content">
                  <div className="page-content">
                    Typically, you have 30 days to submit your response, starting within 30 days of the initial application when the discrepancy letter is issued.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2816' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2816')}
                >
                  <span className="accordion-question">What are the consequences of not filing a reply to Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2816' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2816' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2816' ? 'active' : ''}`} id="accordion_2816_content">
                  <div className="page-content">
                    Failure to file a reply within the specified period may result in the cancellation of the copyright application by the registrar, leading to a 'rejected' status.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2817' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2817')}
                >
                  <span className="accordion-question">What is the process of filing a reply to a Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2817' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2817' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2817' ? 'active' : ''}`} id="accordion_2817_content">
                  <div className="page-content">
                    The process involves analyzing the objection, drafting a well-founded response, filing the reply with necessary documents within 30 days, and proceeding to copyright registration if accepted.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2818' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2818')}
                >
                  <span className="accordion-question">How can I strengthen my reply to a Copyright Objection?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2818' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2818' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2818' ? 'active' : ''}`} id="accordion_2818_content">
                  <div className="page-content">
                    To strengthen your reply, ensure it contains robust arguments supported by relevant case laws, is legally sound, and well-structured.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2819' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2819')}
                >
                  <span className="accordion-question">What documents are typically required for a Copyright Objection reply?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2819' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2819' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2819' ? 'active' : ''}`} id="accordion_2819_content">
                  <div className="page-content">
                    You will typically need a copy of the registration application, the discrepancy letter issued by the registrar, supporting documents, and possibly an affidavit, depending on the case.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_2820' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_2820')}
                >
                  <span className="accordion-question">Why should I choose efind24 for handling Copyright Objections?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_2820' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_2820' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_2820' ? 'active' : ''}`} id="accordion_2820_content">
                  <div className="page-content">
                    efind24 offers expertise, professionalism, tailored services, and legal compliance to protect your creative works effectively. Our team of experts ensures a compelling response to objections.
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

export default CopyrightObjection;

