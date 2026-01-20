import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/icon/banner2.jpg';
import './TrademarkRegistration.css';
import { FaBalanceScale } from 'react-icons/fa';

function TrademarkRegistration() {
  const [selectedService, setSelectedService] = useState('Objection Response');
  const [formData, setFormData] = useState({
    applicationNumber: '',
    brandName: '',
    class: ''
  });
  const [showAllDocuments, setShowAllDocuments] = useState(false);
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
    <div className="trademark-registration-page">
      <Header />
      {/* <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Registration</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Registration</div>
      </section> */}

      
      <section className="manage-track-section">
        <div className="container">
          <div className="manage-track-wrapper">
            {/* Left Panel - Information */}
            <div ref={infoPanelRef} className="info-panel fade-in-left">
              <span className='manage-track-kicker'><FaBalanceScale size={18}/> TRADEMARK REGISTRATION</span>
              <h2 className="info-heading">
                Register & Protect your Brand. Get Your Trademark Registered Today.
              </h2>
              <p className="info-description">
                A trademark is a unique symbol or word(s) used to represent a business or its products. Once registered, that same symbol or series of words cannot be used by any other organization, forever, as long as it remains in use and proper paperwork and fees are filed.
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
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                  </select>
                </div>

                {selectedService === 'Objection Response' && (
                  <div className="form-info-message">
                    <p className="info-text">Replies can be filed only if your trademark is marked "Objected." Looks like yours isn't there yet.</p>
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

      {/* Trademark Registration Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-wrapper">
            {/* Left Column - Content Card */}
            <div className="process-content-card">
              <div className="card-body">
                <h1 ref={processMainTitleRef} className="process-main-title fade-in-left">Trademark Registration</h1>
                <p className="process-intro">
                  Trademark registration grants you exclusive legal rights over your brand name, logo, or symbol. In India, this process is governed by the Trade Marks Act, 1999, which helps you protect and exclusively use your intellectual property in the market.
                </p>
                <p className="process-intro">
                  To register a trademark, you need to file Form TM-A with the Trademark Office and choose the appropriate class for your goods or services, ensuring your brand receives the right protection. Once registered, you can legally use the ® symbol to indicate your trademark is officially recognised.
                </p>
                <p className="process-intro">
                  At IndiaFilings, we make trademark registration easy. Our expert team guides you through trademark searches, handles any oppositions, and supports you with renewals. With the assistance of our experienced trademark attorneys, you can secure your trademark certificate confidently, safeguarding your intellectual property and establishing a strong legal identity for your brand.
                </p>
                <p className="process-intro">
                  Let IndiaFilings be your trusted partner, securing your brand's identity and protecting your intellectual property.
                </p>

          {/* What is a Trademark */}
          <div ref={(el) => (processContentRefs.current[0] = el)} className="process-content-block fade-in-up">
            <h2 className="content-block-title">What is a Trademark?</h2>
            <p className="content-block-text">
              A trademark is a form of intellectual property that can be a word, phrase, symbol, design, or a combination of these elements, used to uniquely identify and distinguish the goods or services of one business from those of others. According to the Trade Marks Act, 1999, a trademark may also include the shape of products, their packaging, or specific color combinations, as long as these can be graphically represented and serve to differentiate one product or service from another.
            </p>
            <div className="trademark-act-image">
              <img src="https://img.indiafilings.com/product/Trademark-Act.png" alt="Trademarks Act, 1999" />
            </div>
          </div>

          {/* Why Should You Register a Trademark */}
          <div ref={(el) => (processContentRefs.current[1] = el)} className="process-content-block fade-in-left">
            <h2 className="content-block-title">Why Should You Register a Trademark?</h2>
            <p className="content-block-text">
              In India, registering your trademark provides legal protection under the Trademarks Act, 1999, allowing you to take action against infringement or unauthorised use. A registered trademark is valid for 10 years from the filing date and must be renewed to maintain protection.
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">Creates an official public record of ownership through publication in the Trademark Journal.</li>
              <li className="benefit-item">Distinguishes your brand from competitors and enhances recognition.</li>
              <li className="benefit-item">Builds customer trust by associating your brand with quality.</li>
              <li className="benefit-item">Increases business value, attracting investors and partners.</li>
              <li className="benefit-item">Protects against counterfeiting and imitation.</li>
              <li className="benefit-item">Enables you to license the trademark for additional revenue.</li>
              <li className="benefit-item">Grants the right to use the ® symbol, enhancing brand credibility.</li>
              <li className="benefit-item">Becomes a valuable and marketable business asset.</li>
            </ul>
          </div>

          {/* Who can Apply */}
          <div ref={(el) => (processContentRefs.current[2] = el)} className="process-content-block fade-in-right">
            <h2 className="content-block-title">Who can Apply for Trademark Registration Online?</h2>
            <p className="content-block-text">
              Trademark registration online in India is open to a wide range of entities and individuals, including:
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">Individuals</li>
              <li className="benefit-item">Joint owners of a company</li>
              <li className="benefit-item">Proprietorship firms</li>
              <li className="benefit-item">Partnership firms (with a maximum of ten partners)</li>
              <li className="benefit-item">Limited Liability Partnerships (LLPs)</li>
              <li className="benefit-item">Indian companies</li>
              <li className="benefit-item">Foreign companies</li>
              <li className="benefit-item">Trusts</li>
              <li className="benefit-item">Societies</li>
            </ul>
            <p className="content-block-text">
              This inclusivity ensures that various businesses and entities can safeguard their brand identities through trademark or brand name registration online.
            </p>
          </div>

          {/* Types of Trademark */}
          <div ref={(el) => (processContentRefs.current[3] = el)} className="process-content-block fade-in-up">
            <h2 className="content-block-title">Types of Trademark in India</h2>
            <p className="content-block-text">
              In India, various trademark registration online or brand name registrations cater to different needs and purposes, all aimed at enabling consumers to recognize products and services associated with specific manufacturers or service providers. Here, we delve into the distinct categories of trademark India available for registration:
            </p>
            
            <div className="trademark-types-list">
              <div className="type-item">
                <h4 className="type-title">Product Mark</h4>
                <p className="type-text">
                  This type of trademark is affixed to goods or products, aiding in identifying their origin and preserving a company's reputation. Trademark India applications falling under classes 1-34 are typically classified as product marks as they pertain to tangible commodities.
                </p>
                <p className="type-example"><strong>Example:</strong> Coca-Cola® on beverage bottles.</p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Service Mark</h4>
                <p className="type-text">
                  Similar to a product mark, a service mark is used to identify services rather than physical products. Service marks primarily help differentiate the providers of certain services from others. Trademark applications falling under classes 35-45 are often regarded as service marks related to service offerings.
                </p>
                <p className="type-example"><strong>Example:</strong> FedEx® for courier and delivery services.</p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Collective Mark</h4>
                <p className="type-text">
                  A collective mark conveys specific characteristics of products or services associated with a particular group. It allows individuals or entities to protect and represent goods and services collectively. The trademark holder may be an association, a public institution, or a Section 8 corporation.
                </p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Certification Mark</h4>
                <p className="type-text">
                  The owner issues these marks to indicate information about a product's origin, composition, quality, or other pertinent data. Certification marks establish product standards and assure consumers that the product meets standardized quality benchmarks. They are commonly found in packaged goods, toys, and electronics.
                </p>
                <p className="type-example"><strong>Example:</strong> CA® (Chartered Accountants of India) used by members of the Institute of Chartered Accountants of India.</p>
                <p className="type-example"><strong>Example:</strong> ISI mark (Bureau of Indian Standards) for product quality certification.</p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Shape Mark</h4>
                <p className="type-text">
                  Shape marks are employed to secure the distinct shape of a product, making it easily recognizable to consumers as originating from a specific manufacturer. Registration is contingent on the shape being deemed distinctive.
                </p>
                <p className="type-example"><strong>Example:</strong> The Coca-Cola® contour bottle shape.</p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Pattern Mark</h4>
                <p className="type-text">
                  Pattern marks are used for products featuring unique, designed patterns that serve as distinguishing features. To qualify for registration, these patterns must stand out as distinctly recognizable.
                </p>
                <p className="type-example"><strong>Example:</strong> Louis Vuitton® monogram canvas pattern.</p>
              </div>

              <div className="type-item">
                <h4 className="type-title">Sound Mark</h4>
                <p className="type-text">
                  Sound marks are distinctive sounds associated with products or services from suppliers. Sound logos, often known as audio mnemonics, are commonly heard at the beginning or end of commercials. An example in India is the IPL tune.
                </p>
                <p className="type-example"><strong>Example:</strong> Nokia® tune or the IPL cricket theme in India.</p>
              </div>
            </div>
            
            <p className="content-block-text">
              These diverse categories of trademark registrations, like logo trademark registration or trade name registration, offer businesses and entities the flexibility to protect their brand identity following their unique offerings and market presence.
            </p>
          </div>

          {/* Trademark Symbols */}
          <div ref={(el) => (processContentRefs.current[4] = el)} className="process-content-block fade-in-left">
            <h2 className="content-block-title">Trademark Symbols</h2>
            <p className="content-block-text">
              Trademark symbols visually indicate whether a trademark is registered or unregistered. The most common ones are TM (™), R (®), and SM (℠).
            </p>
            
            <div className="symbols-list">
              <div className="symbol-item">
                <h4 className="symbol-title">TM Symbol (™)</h4>
                <p className="symbol-text">
                  Used by brands that have applied for trademark registration and whose application is still pending. It can be used for both goods and services, signalling to others that the mark is claimed and warning against infringement.
                </p>
              </div>

              <div className="symbol-item">
                <h4 className="symbol-title">R Symbol (®)</h4>
                <p className="symbol-text">
                  Indicates that the trademark is officially registered with the Registrar of Trademarks. Unauthorized use of a registered mark can lead to legal action by the trademark owner.
                </p>
              </div>

              <div className="symbol-item">
                <h4 className="symbol-title">SM Symbol (℠)</h4>
                <p className="symbol-text">
                  Used for unregistered service marks. It serves the same purpose as the ™ symbol but applies specifically to services rather than goods.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits of Trademark Registration */}
          <div ref={(el) => (processContentRefs.current[5] = el)} className="process-content-block fade-in-right">
            <h2 className="content-block-title">Benefits of Trademark Registration</h2>
            <p className="content-block-text">
              Trademark registration not only offers legal protection but also grants exclusive rights, strengthens your market position, and sets your products or services apart from competitors. It enhances goodwill, creates a valuable business asset, and supports global brand growth, boosting overall brand strength.
            </p>
            
            <div className="benefits-detailed-list">
              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Exclusive Rights & Legal Protection</h4>
                <p className="benefit-detail-text">
                  Trademark registration grants you the exclusive right to use your mark for specific products and services, preventing unauthorised use and safeguarding your brand identity.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Brand Building & Recognition</h4>
                <p className="benefit-detail-text">
                  A trademark differentiates your offerings and builds a strong, unique identity. Trademark registration boosts consumer trust, loyalty, and recognition — all vital for long-term brand success.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Creation of a Valuable Asset</h4>
                <p className="benefit-detail-text">
                  A registered trademark becomes an intangible business asset that can be sold, licensed, or used as collateral. It protects your investment by stopping others from using a similar name or logo and increases your brand's market value, making it more appealing to investors.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Right to Use the ® Symbol</h4>
                <p className="benefit-detail-text">
                  Once your trademark is officially registered, you gain the right to use the ® symbol, which signals authenticity, credibility, and legal protection.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Protection Against Infringement</h4>
                <p className="benefit-detail-text">
                  A registered trademark enables you to take legal action against infringement and file trademark opposition in disputes, ensuring your rights remain secure.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Long-Term Validity</h4>
                <p className="benefit-detail-text">
                  Trademark registration lasts for ten years from the filing date, offering long-term security for your brand registration with the option for unlimited renewals.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Global Trademark Registration</h4>
                <p className="benefit-detail-text">
                  International trademark registration is made easier through treaties like the Madrid Protocol and Vienna Codification, allowing your brand to be protected in multiple countries.
                </p>
              </div>

              <div className="benefit-detail-item">
                <h4 className="benefit-detail-title">Customer Attraction</h4>
                <p className="benefit-detail-text">
                  Brand registration enhances visibility and credibility, helping your brand stand out in the marketplace and attract more customers by assuring them of authenticity and quality.
                </p>
              </div>
            </div>
            <p className="content-block-text">
              Brand registration in India with the help of IndiaFilings, you can rest assured that your brand is in capable hands. Don't delay any longer ensure the validity and exclusivity of your trademark today. Get started with IndiaFilings and safeguard your valuable intellectual property rights.
            </p>
          </div>

          {/* How to Register Trademark in India Online */}
          <div ref={(el) => (processContentRefs.current[6] = el)} className="process-content-block fade-in-up">
            <h2 className="content-block-title">How to Register Trademark in India Online</h2>
            <p className="content-block-text">
              After completing the trademark search, the next step is filing the brand trademark registration application with the Trademark Registrar. Here are the step by step process on how to register trademark in India online:
            </p>
            
            <div className="qa-container">
              <div className="qa-item">
                <h4 className="qa-question">Trademark Search</h4>
                <p className="qa-answer">
                  Before apply trademark India, conducting a comprehensive trademark search is of paramount importance. This step is critical to safeguard the integrity and exclusivity of your brand. An online trademark search entails furnishing the brand name and the relevant class for scrutiny. This meticulous search aids in identifying pre-existing trademarks in the market, enabling the assessment of potential conflicts and, ultimately, ensuring the protection of your brand. IndiaFilings provides online trademark search tools and support to facilitate this pivotal process, assisting you in making informed decisions regarding your trademark or brand name registration.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Choosing the Correct Trademark Class</h4>
                <p className="qa-answer">
                  Trademark classes are a critical aspect of the registration process, as they categorize goods and services into 45 distinct classes. To register trademark India, you should carefully select the appropriate class because it determines the validity of your trademark registration online or trade name registration concerning your business's products or services. If your company operates across various areas falling into different classes, it's crucial to ensure that you apply for a trademark under all the relevant classes. In India, some commonly chosen trademark classes to register trademark include classes for pharmaceuticals, electronics, food and beverages, clothing, software, and various service industries.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">The Vienna Codification Process</h4>
                <p className="qa-answer">
                  The Vienna Classification, also called the Vienna Codification, is an international system that categorizes the figurative elements of trademarks. After filing the trademark registration application, the Trademark Registrar will apply the Vienna classification to the trademark's figurative elements.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Examination</h4>
                <p className="qa-answer">
                  After completing the Vienna Codification, the trademark registration application will be assigned to a Trademark Registrar's officer. The officer will assess the application for accuracy and generate a trademark examination report. Based on this report, the officer can accept the application, allow it for trademark journal publication, or raise objections to the registration process. In the event of objections, the applicant can address the concerns before the Trademark Officer. If the officer finds the justifications satisfactory, the trademark will be approved for publication in the Trademark Journal.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Journal Publication</h4>
                <p className="qa-answer">
                  Once the Trademark Registrar accepts the application, the trademark will be published in the Trademark journal. This journal, published weekly, contains details of all trademarks the Registrar receives. Members of the public have the opportunity to raise objections if they believe the trademark registration could harm their interests. If no objections are submitted within 90 days of publication, the trademark will be registered within 12 weeks.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Hearing</h4>
                <p className="qa-answer">
                  A Trademark Hearing Officer will schedule a hearing if a third party objects to the application. Both the applicant and the opposing party have the chance to present their arguments. Based on the hearings and evidence, the Trademark Hearing Officer will decide whether to accept or reject the application of brand registration in India.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Registration</h4>
                <p className="qa-answer">
                  In cases where no objections or oppositions are raised, the trademark registration certificate will be prepared and issued. A trademark is officially considered registered when the Trademark Registration Certificate is issued, granting the owner exclusive rights to the mark. For example, a logo trademark registration will be approved if it doesn't receive any objection or opposition. At this point, the ® symbol can be added to the logo or trademark.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Objection</h4>
                <p className="qa-answer">
                  Trademark objections are typically one of the initial stages in the trademark registration process. Instead of outright denial, the Registrar seeks valid reasons or explanations regarding the trademark's registrability.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Opposition</h4>
                <p className="qa-answer">
                  Trademark opposition occurs when a third party files an objection against register trademark. The Registry accepts oppositions from any natural or legal person, including individuals, businesses, partnership firms, and trusts. This is the complete process on how to register brand name in India. After this you need to renew the trademark to extend its validity.
                </p>
              </div>

              <div className="qa-item">
                <h4 className="qa-question">Trademark Renewal</h4>
                <p className="qa-answer">
                  It is important to register trademark. But it is important to know that it remains valid for ten years from the filing date. To ensure the continued protection of your trademark, it is imperative to renew it every ten years. This continual renewal of your brand name registration secures your marks from misuse or exploitation.
                </p>
              </div>
            </div>
          </div>

          {/* Post-Trademark Registration Procedures */}
          <div ref={(el) => (processContentRefs.current[7] = el)} className="process-content-block fade-in-left">
            <h2 className="content-block-title">Post-Trademark Registration Procedures</h2>
            <p className="content-block-text">
              Once trademark registration is complete, you must follow certain steps to maintain protection and enforce your rights.
            </p>
            <ul className="benefits-list">
              <li className="benefit-item">Renewal: Every 10 years via Form TM-R.</li>
              <li className="benefit-item">Amendments: Made through Form TM-P for changes in details.</li>
              <li className="benefit-item">Opposition Handling: Address any filed oppositions within the legal time frame.</li>
              <li className="benefit-item">Transfers/Assignments: Record them with the Registry using Form TM-P.</li>
              <li className="benefit-item">Monitoring: Regular trademark checks to detect potential infringements.</li>
            </ul>
            
            <h4 className="sub-section-title">Trademark Rectification</h4>
            <ul className="benefits-list">
              <li className="benefit-item">Purpose: Correct mistakes/omissions in the trademark register.</li>
              <li className="benefit-item">Reasons: Errors, non-use, or breach of conditions.</li>
              <li className="benefit-item">Procedure: Submit Form TM-26 with supporting evidence.</li>
              <li className="benefit-item">Who Can Apply: Any interested party affected by the trademark.</li>
              <li className="benefit-item">Authority: Trademark Registrar or Intellectual Property Appellate Board (IPAB).</li>
            </ul>
          </div>

          {/* Required Documents & Details */}
          <div ref={(el) => (processContentRefs.current[8] = el)} className="process-content-block fade-in-right">
            <h2 className="content-block-title">Required Documents & Details to Apply for Registration in Trademark India</h2>
            <p className="content-block-text">
              To initiate the company trademark registration online or brand name registration process in India, you will need to furnish the following initial details:
            </p>
            <ul className="benefits-list">
              <li className="benefit-item"><strong>Applicant's Name:</strong> The name of the individual, company, or entity applying for the brand trademark registration.</li>
              <li className="benefit-item"><strong>Business Type:</strong> Specify the type of business entity, such as sole proprietorship, partnership, private limited company, etc.</li>
              <li className="benefit-item"><strong>Business Objectives:</strong> Provide a brief description of your business objectives or activities.</li>
              <li className="benefit-item"><strong>Brand/Logo/Slogan Name:</strong> Clearly mention the name, logo, or slogan that you intend to trademark.</li>
              <li className="benefit-item"><strong>Registration Address:</strong> Furnish the official address of the entity applying for the trademark.</li>
            </ul>
            <p className="content-block-text">
              In addition to these details, you will be required to submit the following documents to apply trademark registration online, or even logo trademark registration process:
            </p>
            
            <div className="documents-table">
              <table className="docs-table">
                <thead>
                  <tr>
                    <th>Applicant Type</th>
                    <th>Required Documents</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Individuals</td>
                    <td>
                      <ul className="table-list">
                        <li>PAN card</li>
                        <li>Aadhar card</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Proprietorship</td>
                    <td>
                      <ul className="table-list">
                        <li>GST certificate</li>
                        <li>PAN card</li>
                        <li>Aadhar card</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Company</td>
                    <td>
                      <ul className="table-list">
                        <li>Incorporation certificate</li>
                        <li>Company PAN card</li>
                        <li>MSME Certificate (if applicable)</li>
                        <li>Logo (if applicable)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Partnership Firms</td>
                    <td>
                      <ul className="table-list">
                        <li>Partnership deed</li>
                        <li>Partnership PAN card</li>
                        <li>MSME registration certificate</li>
                        <li>Logo (if applicable)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Limited Liability Partnerships (LLPs)</td>
                    <td>
                      <ul className="table-list">
                        <li>LLP deed</li>
                        <li>Incorporation certificate</li>
                        <li>LLP PAN card</li>
                        <li>Logo (if applicable)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Trusts</td>
                    <td>
                      <ul className="table-list">
                        <li>Trust deed</li>
                        <li>Trust PAN card</li>
                        <li>Logo (if applicable)</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>


          {/* How IndiaFilings Can Assist You */}
          <div ref={(el) => (processContentRefs.current[9] = el)} className="process-content-block help-block fade-in-up">
            <h2 className="content-block-title">How IndiaFilings Can Assist You with Trademark Registration</h2>
            <p className="content-block-text">
              Online trademark registration in India can be intricate, involving numerous steps and government procedures. At IndiaFilings, we simplify this process. Here's a breakdown of how we can assist you:
            </p>
            
            <div className="assistance-sections">
              <div className="assistance-item">
                <h4 className="assistance-title">Trademark Search</h4>
                <p className="assistance-text">
                  Please start the process by providing us with essential information about your desired trademark and industry. Our experts will thoroughly search the trademark database to determine its availability. Once we identify an available brand, we move on to the next step, that is, to register trademark.
                </p>
              </div>

              <div className="assistance-item">
                <h4 className="assistance-title">Class Selection and Document Collection</h4>
                <p className="assistance-text">
                  Our professional experts will guide you in selecting the appropriate class or classes that comprehensively cover all aspects of your business. Concurrently, you can begin uploading the documents required for the online trademark registration.
                </p>
              </div>

              <div className="assistance-item">
                <h4 className="assistance-title">Trademark Application Filing</h4>
                <p className="assistance-text">
                  Upon receiving your documents, our expert team will verify their accuracy and completeness. We then complete the trademark application form on your behalf, ensuring all required documents are submitted correctly. Throughout this process, we maintain transparency and keep you informed, monitoring notifications from the Trademark Registry until the trademark or brand name registration is completed.
                </p>
                <p className="assistance-text">
                  <strong>Congratulations! Once the application is submitted, you can start using the ™ symbol</strong>
                </p>
              </div>

              <div className="assistance-item">
                <h4 className="assistance-title">Trademark Objection (if applicable)</h4>
                <p className="assistance-text">
                  In cases where the trademark examiner raises questions about your application, you may receive a trademark objection notice. Our experts can aid you in crafting a robust response and submitting the necessary documents and evidence.
                </p>
                <p className="assistance-text">
                  We keep you informed about the status of your application and help you navigate any oppositions or hearings. After successful registration, IndiaFilings can help with trademark renewal, trademark assignment, licensing, and any other post-registration services you may require.
                </p>
              </div>
            </div>
            
            <p className="content-block-text">
              Are you the one who cares about your brand and intends to "trademark my business name"?
            </p>
            <p className="content-block-text">
              Are you ready to protect your brand and secure your trademark in India? Take the initial step in safeguarding your business identity by obtaining Trademark Registration or logo trademark registration through IndiaFilings.
            </p>
          </div>
              </div>
            </div>

          {/* Right Column - Related Guides Card and States List */}
          <div className="right-column-cards">
            <div ref={relatedGuidesCardRef} className="related-guides-card fade-in-right">
                <div className="card-header">
                  <h2 className="guides-title">Related Guides</h2>
                </div>
                <div className="card-body">
                  <div className="guides-list">
                    <a href="#" className="guide-link">Online Trademark Registration at Chennai in Just 24 hours</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Documents required for Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Registration for Slogans</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Evidence of Use – Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">International Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Registration vs Company Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Step by Step Guide on Trademark Registration Process</a>
                  </div>
                </div>
            </div>

            {/* States List Card */}
            <div className="states-list-card">
            <div className="card-header">
              <h2 className="states-title">
                <a href="https://www.indiafilings.com/trademark-registration">Trademark Registration</a>
              </h2>
            </div>
            <div className="card-body">
              <div className="states-content">
                <div className="states-grid">
                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/andhra-pradesh">
                      Andhra Pradesh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/arunachal-pradesh">
                      Arunachal Pradesh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/assam">
                      Assam
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/bihar">
                      Bihar
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/chandigarh">
                      Chandigarh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/chhattisgarh">
                      Chhattisgarh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/delhi">
                      Delhi
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/goa">
                      Goa
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/gujarat">
                      Gujarat
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/haryana">
                      Haryana
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/himachal-pradesh">
                      Himachal Pradesh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/jammu-and-kashmir">
                      Jammu And Kashmir
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/jharkhand">
                      Jharkhand
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/karnataka">
                      Karnataka
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/kerala">
                      Kerala
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/lakshadweep">
                      Lakshadweep
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/madhya-pradesh">
                      Madhya Pradesh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/maharashtra">
                      Maharashtra
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/manipur">
                      Manipur
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/meghalaya">
                      Meghalaya
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/mizoram">
                      Mizoram
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/nagaland">
                      Nagaland
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/odisha">
                      Odisha
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/puducherry">
                      Puducherry
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/punjab">
                      Punjab
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/rajasthan">
                      Rajasthan
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/sikkim">
                      Sikkim
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/tamil-nadu">
                      Tamil Nadu
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/telangana">
                      Telangana
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/tripura">
                      Tripura
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/uttar-pradesh">
                      Uttar Pradesh
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/uttarakhand">
                      Uttarakhand
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>

                  <div className="state-item">
                    <a className="state-link" href="https://www.indiafilings.com/trademark-registration/west-bengal">
                      West Bengal
                      <svg className="state-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke="#1b84ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Documents Required Section */}
      <section ref={documentsSectionRef} className="documents-required-section">
        <div className="container">
          <h2 ref={documentsTitleRef} className="documents-section-title fade-in-up">Documents Required for Trademark Registration</h2>
          <div className="documents-wrapper">
            {/* Left Card - Documents List */}
            <div ref={documentsCardRef} className="documents-card doc-req-sec fade-in-left">
              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Incorporation Certificate</span>
                  <span className="doc-description">If the trademark is registered under a company or LLP.</span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Partnership Deed</span>
                  <span className="doc-description">If the trademark is registered under a partnership firm.</span>
                </div>
              </div>

              <div className="card-group">
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">PAN Card</span>
                  <span className="doc-description">Of the authorised signatory.</span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Aadhaar Card</span>
                  <span className="doc-description">Of the authorised signatory.</span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Form-48 Signed</span>
                  <span className="doc-description">E-sign by using Aadhar authentication from E-sign Desk.</span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">Logo</span>
                  <span className="doc-description">Please upload the logo in black and white to ensure all colors of the trademark are covered under the registration.</span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">MSME Certificate</span>
                  <span className="doc-description"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">GST Registration</span>
                  <span className="doc-description"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">User Affidavit</span>
                  <span className="doc-description"></span>
                </div>
              </div>

              <div className={`card-group ${showAllDocuments ? '' : 'hidden'}`}>
                <div className="flex flex-col justify-center gap-1.5">
                  <span className="doc-title">No Objection Certificate</span>
                  <span className="doc-description"></span>
                </div>
              </div>

              <div className="card-footer">
                <button className="btn btn-outline btn-primary" onClick={handleLoadMore}>
                  {showAllDocuments ? 'Show Less' : 'Load More'}
                </button>
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

export default TrademarkRegistration;

