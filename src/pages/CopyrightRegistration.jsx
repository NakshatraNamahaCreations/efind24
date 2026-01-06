import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/icon/hero.jpg';
import './CopyrightRegistration.css';

function CopyrightRegistration() {
  const [formData, setFormData] = useState({
    filingType: '',
    titleOfWork: '',
    descriptionOfWork: ''
  });
  const [showAllDocuments, setShowAllDocuments] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  // Refs for scroll animations
  const infoPanelRef = useRef(null);
  const formPanelRef = useRef(null);
  const processMainTitleRef = useRef(null);
  const processContentRefs = useRef([]);
  const relatedGuidesCardRef = useRef(null);
  const documentsSectionRef = useRef(null);
  const documentsTitleRef = useRef(null);
  const documentsCardRef = useRef(null);
  const relatedDocumentsCardRef = useRef(null);
  const comparisonTableRef = useRef(null);
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
    observeElement(documentsSectionRef.current);
    observeElement(documentsTitleRef.current);
    observeElement(documentsCardRef.current);
    observeElement(relatedDocumentsCardRef.current);
    observeElement(comparisonTableRef.current);
    observeElement(faqSectionRef.current);
    
    processContentRefs.current.forEach((ref) => {
      observeElement(ref);
    });

    return () => {
      if (infoPanelRef.current) observer.unobserve(infoPanelRef.current);
      if (formPanelRef.current) observer.unobserve(formPanelRef.current);
      if (processMainTitleRef.current) observer.unobserve(processMainTitleRef.current);
      if (relatedGuidesCardRef.current) observer.unobserve(relatedGuidesCardRef.current);
      if (documentsSectionRef.current) observer.unobserve(documentsSectionRef.current);
      if (documentsTitleRef.current) observer.unobserve(documentsTitleRef.current);
      if (documentsCardRef.current) observer.unobserve(documentsCardRef.current);
      if (relatedDocumentsCardRef.current) observer.unobserve(relatedDocumentsCardRef.current);
      if (comparisonTableRef.current) observer.unobserve(comparisonTableRef.current);
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
    <div className="copyright-registration-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Copyright Registration</h2>
        <div className="breadcrumb_watermark">Copyright <br /> Registration</div>
      </section>
      
      <section className="manage-track-section">
        <div className="container">
          <div className="manage-track-wrapper">
            {/* Left Panel - Information */}
            <div className="info-panel">
              <h2 className="info-heading">
                Simplify <span className="underline-blue">Copyright</span> Registration in <span className="underline-orange">India</span>
              </h2>
              <p className="info-description">
                Secure your creative works with efind24. Our expert-guided online Copyright Registration process protects your artistic, literary, and digital creations—ensuring your ownership and peace of mind.
              </p>
              
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">Protect Your Original Creative Works Legally</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon magnifying">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">Quick & Easy Online Copyright Filing</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon rocket">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-3 16H8v-2h3v2zm0-4H8v-2h3v2zm0-4H8v-2h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3v-2h3v2z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">Get an Official Copyright Registration Certificate</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon graph">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">Expert Guidance Through Every Step</span>
                </div>
                
                <div className="feature-item">
                  <div className="feature-icon checkmark">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="white"/>
                    </svg>
                  </div>
                  <span className="feature-text">Nationwide Copyright Protection</span>
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div ref={formPanelRef} className="form-panel fade-in-right">
              <div className="form-card">
                <h3 className="form-title">Apply For Copyright Registration</h3>
                
                <div className="form-group">
                  <label className="form-label">Select Copyright Filing Type</label>
                  <select 
                    className="form-select"
                    name="filingType"
                    value={formData.filingType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Filing Type</option>
                    <option value="Literary Work">Literary Work</option>
                    <option value="Artistic Work">Artistic Work</option>
                    <option value="Musical Work">Musical Work</option>
                    <option value="Cinematographic Film">Cinematographic Film</option>
                    <option value="Sound Recording">Sound Recording</option>
                    <option value="Software">Software</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Title of the Work</label>
                  <input
                    type="text"
                    name="titleOfWork"
                    className="form-input"
                    placeholder="Enter title of the work"
                    value={formData.titleOfWork}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Description of the Work</label>
                  <textarea
                    name="descriptionOfWork"
                    className="form-input"
                    placeholder="Enter description of the work"
                    rows="4"
                    value={formData.descriptionOfWork}
                    onChange={handleInputChange}
                  />
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
                <h1 ref={processMainTitleRef} className="content-main-title fade-in-left">Copyright Registration: Protect Your Creative Works</h1>
                
                <p className="content-block-text">
                  Copyright is an essential principle that safeguards the creations of artists and authors. It grants them unique rights over their works' distribution, sharing, and replication. Copyright Registration in India provides legal protection and offers creators enhanced authority over their creations.
                </p>
                
                <p className="content-block-text">
                  At efind24, we have streamlined the process of Registration of a Copyright in India to make securing your intellectual property straightforward and effective. With years of experience in intellectual property, our team is equipped with the knowledge to guide you through every step of the Online Copyright Registration process.
                </p>

                <h2 className="content-block-title">What Is Copyright?</h2>
                <p className="content-block-text">
                  Copyright is a legal provision that recognizes the rights of intellectual property owners. At its core, it revolves around the right to replicate or reproduce a piece of creative content. In simple terms, when someone creates intellectual property, they gain specific rights over it. Consequently, only the original creator or individuals they grant permission to can reproduce or use that content. Through copyright India law, creators are endowed with an exclusive privilege to use or reproduce their work for a set duration. After this period elapses, the copyrighted material might transition to the public domain.
                </p>

                <h2 className="content-block-title">What Can You Copyright?</h2>
                <p className="content-block-text">
                  Copyright filing serves as a protective shield for a diverse range of creative outputs. The Registrar of Copyrights has structured a detailed register, segmented into six clear categories, each dedicated to particular types of intellectual creations:
                </p>
                <ul className="content-list">
                  <li className="content-list-item"><strong>Literary Works (Excluding Computer Programs):</strong> This division includes various written works like novels, poems, essays, articles, and similar creations.</li>
                  <li className="content-list-item"><strong>Musical Works:</strong> Items like tunes, song lyrics, and musical notations fall within this category.</li>
                  <li className="content-list-item"><strong>Artistic Works:</strong> Copyright in this realm covers visual arts like paintings, sculptures, drawings, and similar artistic endeavors.</li>
                  <li className="content-list-item"><strong>Cinematography Films:</strong> Films and related audiovisual projects enjoy the benefits of copyright protection in this category.</li>
                  <li className="content-list-item"><strong>Sound Recordings:</strong> Audio recordings, whether they are of music, spoken word, or other sound-driven content, are protected here.</li>
                  <li className="content-list-item"><strong>Computer Programs, Tables, and Compilations:</strong> The digital world's cornerstones, such as software, data tables, and compilations, receive their protection in this segment.</li>
                </ul>
                <p className="content-block-text">
                  You can do copyright filing for all these works and obtain a copyright registration certificate.
                </p>

                <h2 className="content-block-title">Copyright Law</h2>
                <p className="content-block-text">
                  Copyrights are governed by "THE COPYRIGHT ACT, 1957." This legislation has seen numerous updates over the years to remain relevant in the dynamic world of intellectual property rights.
                </p>

                <h2 className="content-block-title">The Importance of Copyright Registration</h2>
                <p className="content-block-text">
                  Registration of a Copyright in India for your original or creative work is crucial. It not only establishes your legal claim over the work but also empowers you with control over its distribution, reproduction, and any subsequent translations or adaptations of the content. Ensure to register copyright online and obtain a copyright registration certificate to reap all these benefits.
                </p>

                <h2 className="content-block-title">Why Should You Register Your Work Under Copyright Law?</h2>
                <p className="content-block-text">
                  Although it's not mandatory to register your work under copyright law, it's strongly advised due to several significant advantages. Acquiring copyright protection grants creators distinct rights over their creations, ensuring that their work remains safeguarded from unauthorized duplication for a specified duration. This legal shield provides peace of mind, fostering inspiration and driving creators to pursue and generate more creative content.
                </p>

                <h2 className="content-block-title">Benefits of Registration of a Copyright in India</h2>
                <p className="content-block-text">
                  Copyright registration in India comes with many advantages for creators and those holding intellectual property rights:
                </p>
                <ul className="content-list">
                  <li className="content-list-item"><strong>Protection for the Owner:</strong> Through online copyright registration in India, owners receive exclusive rights covering activities like reproduction, distribution, adaptation, sharing, and translation of their work.</li>
                  <li className="content-list-item"><strong>Robust Legal Safeguard:</strong> Registration with a valid copyright registration certificate ensures that the work can't be copied without the rightful owner's permission.</li>
                  <li className="content-list-item"><strong>Boosts Brand Image:</strong> Holding a registered copyright is a testament to ownership and can be leveraged in marketing, enhancing brand reputation and goodwill.</li>
                  <li className="content-list-item"><strong>International Protection:</strong> Once copyrighted in a given country, that work is typically granted similar rights in many other countries, including India.</li>
                  <li className="content-list-item"><strong>Treat Copyright as an Asset:</strong> Recognized as an intellectual property asset, Copyright can be traded, adding a financial dimension to the creator's portfolio.</li>
                  <li className="content-list-item"><strong>Increased Visibility for the Owner:</strong> Registered works are more prominently showcased, available globally, and easily traceable in copyright databases. This visibility can deter potential unauthorized use.</li>
                  <li className="content-list-item"><strong>Financial Security:</strong> Registration of a Copyright paves the way for economic resilience by allowing creators to diversify and capitalize on their content, leading to sustained income streams.</li>
                </ul>
                <p className="content-block-text">
                  <strong><em>Get expert help from efind24 for streamlined copyright registration with reasonable copyright fees in India - Quick & Reliable!</em></strong>
                </p>

                <h2 className="content-block-title">Copyright Symbol Explanation</h2>
                <p className="content-block-text">
                  After securing a registration of a copyright in India, the copyright symbol (©) becomes a tool at your disposal. This emblem is a direct declaration to the public that the work is shielded by copyright laws. Its presence can act as a deterrent, discouraging unauthorized replication or misuse of the creative piece.
                </p>
                <p className="content-block-text">
                  Legal Rights Afforded to a Copyright Owner Being a copyright owner furnishes you with a set of definitive legal rights, including:
                </p>
                <ul className="content-list">
                  <li className="content-list-item"><strong>Claim of Authorship:</strong> You can assert and acknowledge your role as the creator of your published work.</li>
                  <li className="content-list-item"><strong>Reproduction and Storage:</strong> As the owner, you possess the right to reproduce the content in any tangible medium and store it electronically.</li>
                  <li className="content-list-item"><strong>Publication Control:</strong> You hold the discretion to decide when, where, and how to publish or withhold your work from publication.</li>
                  <li className="content-list-item"><strong>Public Display and Communication:</strong> You are entitled to showcase or share your work with the public. Additionally, you have the prerogative to make translations or adaptations of the original content.</li>
                  <li className="content-list-item"><strong>Reputation Protection:</strong> Should there be a threat to your professional standing or reputation via your work, you have the right to intervene and take protective measures.</li>
                  <li className="content-list-item"><strong>Licensing or Transfer:</strong> You can opt to sell or lease your Copyright, allowing others specified rights to your work as outlined in the agreement.</li>
                </ul>
                <p className="content-block-text">
                  These rights equip copyright owners with the tools to oversee, defend, and exercise control over their creative contributions and intellectual assets.
                </p>
                <p className="content-block-text">
                  Duration of Copyright Protection After registering a work under Copyright, the protection generally lasts for the duration of the creator's life and then extends for an additional 60 years after their demise. This prolonged period guarantees that the work stays protected, allowing the creator's heirs or designated rights holders to benefit from it for an extended time.
                </p>

                <h2 className="content-block-title">Conditions for Filing a Copyright Application in India</h2>
                <p className="content-block-text">
                  When applying for online copyright registration in India, ensure you adhere to the following format and size guidelines for different works:
                </p>
                <ul className="content-list">
                  <li className="content-list-item"><strong>Artistic Works:</strong> Upload in either pdf or jpg format.</li>
                  <li className="content-list-item"><strong>Sound Recording Works:</strong> Submit in mp3 format.</li>
                  <li className="content-list-item"><strong>Literary/Dramatic, Music, and Software Works:</strong> Upload documents in PDF format, ensuring the file size doesn't exceed 10 MB.</li>
                  <li className="content-list-item"><strong>For Software:</strong> Submit a PDF that includes at least the initial ten and the concluding ten pages of the source code. If the source code has fewer than 20 pages, upload the complete code. Ensure there are no redacted or obscured sections.</li>
                </ul>

                <h2 className="content-block-title">How to Register Copyright Online in India?</h2>
                <p className="content-block-text">
                  As emphasized, if you are an artist who produces creative works, copyright registration must be done to give legal protection. Here is step by step processes on how to get copyright in India:
                </p>

                <h3 className="content-subtitle">Submission of Application</h3>
                <p className="content-block-text">
                  Draft an application that includes all required details and a statement of particulars using the designated format (FORM XIV). Remember, individual works require separate applications. Each application must be signed by both the applicant and an Advocate who holds a Vakalatnama or a Power of Attorney (POA). Ensure to pay the required copyright registration fees.
                </p>

                <h3 className="content-subtitle">Issuance of Diary Number</h3>
                <p className="content-block-text">
                  Upon application receipt, the registrar assigns a Diary Number, signifying the commencement of the registration process. Thereafter, a 30-day waiting period is observed to allow for any potential objections.
                </p>

                <h3 className="content-subtitle">Handling of Copyright Objections</h3>
                <p className="content-block-text">
                  Should no objections arise within the 30-day window, a scrutinizer evaluates the application for inconsistencies. If deemed satisfactory, the scrutinizer proceeds with registration and provides the registrar an extract for the Register of Copyright.
                </p>

                <h3 className="content-subtitle">Resolution of Objections</h3>
                <p className="content-block-text">
                  If objections emerge, both involved parties will receive a notification detailing the objections. A subsequent hearing will be convened to address and resolve these concerns.
                </p>

                <h3 className="content-subtitle">Application Scrutiny</h3>
                <p className="content-block-text">
                  Post-hearing, if needed, the scrutinizer conducts a thorough examination of the application. Depending on the findings, the application may be endorsed or declined.
                </p>

                <h3 className="content-subtitle">Issuance of Copyright Registration Certificate</h3>
                <p className="content-block-text">
                  Upon application approval and payment of copyright registration fees, the corresponding authority dispenses the copyright registration certificate. Typically, the entire procedure concludes in around 2 to 3 months.
                </p>

                <h2 className="content-block-title">How efind24 Can Assist You?</h2>
                <p className="content-block-text">
                  At efind24, we're dedicated to streamlining the often complex journey of online copyright registration in India. Our team, comprising experts, provides comprehensive support, ensuring that each step, from initial documentation to handling potential objections and obtaining the final copyright certificate with affordable copyright fees in India. We manage to register copyright online with precision and expertise. By choosing efind24, you can take advantage of seamless registration process, ensuring your creative works are safeguarded at a good copyright registration cost. Whether you are a budding creator or an established intellectual property owner, with efind24 by your side, you can navigate the online copyright registration process with confidence and ease.
                </p>
                <p className="content-block-text">
                  Ready to secure your creative work? Get started with our expert-led copyright registration services today!
                </p>
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
                    <a href="#" className="guide-link">Copyright Act</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Copyright Amendment Act</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Patent vs Copyright vs Trademark</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Copyright Registration Process and Procedure</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Copyright Infringement in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Advantages of Copyright Registration in India</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">International Copyright Registration</a>
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
          <h2 ref={documentsTitleRef} className="documents-section-title fade-in-up">Documents Required For Copyright Registration</h2>
          <div className="documents-wrapper">
            {/* Left Card - Documents List */}
            <div ref={documentsCardRef} className="documents-card doc-req-sec fade-in-left">
              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">PAN Card</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Aadhar Card</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">NOC from Publisher</span>
                  <span className="text-2sm text-gray-700"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">NOC from Author</span>
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
            <h2 className="faq-title">FAQ's on Copyright Registration</h2>
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_184' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_184')}
                >
                  <span className="accordion-question">Can titles or names be copyrighted?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_184' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_184' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_184' ? 'active' : ''}`} id="accordion_184_content">
                  <div className="page-content">
                    A copyright registration does not protect the titles or names, short words, slogans, or any phrases. Only original literary work can get copyright registration.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_185' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_185')}
                >
                  <span className="accordion-question">What is the difference between Copyright registration and trademark registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_185' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_185' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_185' ? 'active' : ''}`} id="accordion_185_content">
                  <div className="page-content">
                    Trademark registration protects the brand name, logo the slogan whereas copyright protection is provided to literary works, music, videos, slogans, and artistic contents.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_186' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_186')}
                >
                  <span className="accordion-question">How Long is the Copyright registration valid?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_186' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_186' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_186' ? 'active' : ''}`} id="accordion_186_content">
                  <div className="page-content">
                    Once obtained copyright registration has a validity of 60 years. In case it is literary, drama, music work the 60-year validity is considered from the death of the author. But in the case of the films, sound recording, photographs the 60 year validity period is considered from the date of publication.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_187' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_187')}
                >
                  <span className="accordion-question">Copyright obtained in India is only valid in India or across the world?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_187' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_187' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_187' ? 'active' : ''}`} id="accordion_187_content">
                  <div className="page-content">
                    According to the Berne Convention, copyright obtained in India will get the status of foreign workers and the copyright protection is extended to the countries which are signatories to the Berne Convention.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_188' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_188')}
                >
                  <span className="accordion-question">What is the copyright registration cost in India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_188' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_188' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_188' ? 'active' : ''}`} id="accordion_188_content">
                  <div className="page-content">
                    The copyright registration cost in India vary based on the type of work being registered, such as literary, artistic, musical, or cinematographic works.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_189' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_189')}
                >
                  <span className="accordion-question">What are the benefits of copyright registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_189' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_189' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_189' ? 'active' : ''}`} id="accordion_189_content">
                  <div className="page-content">
                    The holder can translate, reproduce, adapt, create the work, and also to the right to be credited for his contribution, a right for who can adapt the work to other forms.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_190' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_190')}
                >
                  <span className="accordion-question">How long does it take to obtain the copyright registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_190' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_190' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_190' ? 'active' : ''}`} id="accordion_190_content">
                  <div className="page-content">
                    A copyright registration can be obtained in around 6-8 months considering factors like objection etc.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_191' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_191')}
                >
                  <span className="accordion-question">Is it necessary to publish work before copyrighting it?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_191' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_191' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_191' ? 'active' : ''}`} id="accordion_191_content">
                  <div className="page-content">
                    Both Published as well as unpublished work can be registered, in case work is already published the details of the publishing are to be furnished with the application.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_192' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_192')}
                >
                  <span className="accordion-question">Can a copyright registration application get rejected?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_192' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_192' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_192' ? 'active' : ''}`} id="accordion_192_content">
                  <div className="page-content">
                    Yes in case of any discrepancy or incomplete documents a copyright registration may get rejected.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_193' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_193')}
                >
                  <span className="accordion-question">Who can obtain Copyright registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_193' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_193' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_193' ? 'active' : ''}`} id="accordion_193_content">
                  <div className="page-content">
                    Any person or a business entity can obtain copyright registration. An individual can be an author, creator, musician, photographer, producer, painter, composer, or company.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_194' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_194')}
                >
                  <span className="accordion-question">What to do in case of infringement of copyright?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_194' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_194' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_194' ? 'active' : ''}`} id="accordion_194_content">
                  <div className="page-content">
                    A copyright holder has to send a statutory notice to the person who has infringed the work.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_5438' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_5438')}
                >
                  <span className="accordion-question">What is the role of the Copyright Office India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_5438' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_5438' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_5438' ? 'active' : ''}`} id="accordion_5438_content">
                  <div className="page-content">
                    The Copyright Office India is responsible for registering copyrights, maintaining records, and addressing copyright-related disputes.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_5439' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_5439')}
                >
                  <span className="accordion-question">What is the process of copyright certificate download?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_5439' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_5439' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_5439' ? 'active' : ''}`} id="accordion_5439_content">
                  <div className="page-content">
                    To do the copyright certificate download from the official Copyright Office website using your Dairy Number after successful registration.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_5440' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_5440')}
                >
                  <span className="accordion-question">Can I do logo copyright registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_5440' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_5440' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_5440' ? 'active' : ''}`} id="accordion_5440_content">
                  <div className="page-content">
                    Yes, logo copyright registration can be done as artistic works under copyright law, providing legal protection against unauthorized use.
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

export default CopyrightRegistration;

