import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import bannerImage from '../assets/images/close-up-law-hammer.jpg';
import './TrademarkCertification.css';

function TrademarkCertification() {
  const [selectedService, setSelectedService] = useState('Certificate');
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

  return (
    <div className="trademark-certification-page">
      <Header />
      <section className="breadcrumb_section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2 className="breadcrumb_title">Trademark Certification</h2>
        <div className="breadcrumb_watermark">Trademark <br /> Certification</div>
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
                    <option value="Certificate">Certificate</option>
                    <option value="Trademark Registration">Trademark Registration</option>
                    <option value="Trademark Objection">Trademark Objection</option>
                    <option value="Trademark Renewal">Trademark Renewal</option>
                    <option value="Trademark Opposition">Trademark Opposition</option>
                  </select>
                </div>

                {selectedService === 'Certificate' && (
                  <div className="form-info-message">
                    <p className="info-text">Certificates are issued once a trademark is registered. Since your mark isn't registered, a certificate isn't available right now.</p>
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
                    Updated on: <span className="update-date">Oct 24, 2025</span>
                  </div>
                </div>

                {/* Main Content */}
                <div ref={(el) => (processContentRefs.current[0] = el)} className="process-content-block fade-in-left">
                  <h1 ref={processMainTitleRef} className="content-main-title fade-in-left">Trademark Registration Certificate</h1>
                  
                  <p className="content-block-text">
                    A Trademark Registration Certificate is a legal document issued by the Indian Trademark Registry that certifies the successful registration of a trademark in India. The trademark certificate is proof of the exclusive ownership of the trademark and grants the trademark owner the absolute right to use the trademark for its goods and services. The certificate of trademark also shows the trademark's official registration date, class of goods and services and the geographical region where the trademark is registered. The Trademark Registration Certificate is a valuable asset to the trademark owner and must be renewed to ensure its validity.
                  </p>

                  <h2 className="content-block-title">What is Trademark Registration?</h2>
                  <p className="content-block-text">
                    Trademark registration is the process of registering a trademark with the government to protect it from being used without permission. A trademark is a identifiable symbol or expression which identifies a source's products or services from those of others. Trademark registration in India is governed by the Trademarks Act 1999 and is administered by the Controller General of Patents, Designs, and Trademarks.
                  </p>
                  <p className="content-block-text">
                    Trademark registration and obtaining a trademark certificate is an important part of protecting a business's intellectual property. It helps to prevent others from using a similar or identical trademark without permission. The registration process also serves to notify the public that a business owns a particular trademark, which can help deter infringement.
                  </p>

                  <h2 className="content-block-title">What is Trademark Certificate?</h2>
                  <p className="content-block-text">
                    A Trademark Certificate is an official legal document issued by the Indian Trademark Registry that confirms the successful registration of a trademark under the Trade Marks Act, 1999. This certificate serves as proof of exclusive ownership of the trademark, granting the owner the sole right to use it for their goods or services. It includes critical details such as the registration date, trademark class, and geographical scope of protection. The certificate is vital for protecting intellectual property, deterring unauthorized use, and enabling legal action against infringement. Additionally, it allows the owner to license or monetize the trademark and ensures nationwide recognition and enforcement of rights.
                  </p>

                  <h2 className="content-block-title">Benefits of Certificate of Trademark</h2>
                  <p className="content-block-text">
                    A trademark registration certificate is a powerful tool for brand protection and helps avoid future costly disputes. It also offers a variety of benefits, such as exclusive rights to use the trademark, the ability to file a suit for trademark infringement and statutory damages for trademark infringement. Furthermore, it allows for a broader scope of protection for the trademark, including foreign countries.
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[0] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Protection of Unique Brand Name</h3>
                      <p className="benefit-card-text">
                        Registering a trademark provides you with exclusive rights to use the mark on goods and services in the class it is registered. This means that no other person or entity can use the same mark or any confusingly similar mark on similar goods and services. This certificate of trademark provides strong legal protection for the uniqueness of your brand name or logo.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[1] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Prevent Unauthorized Use</h3>
                      <p className="benefit-card-text">
                        Once the trademark is registered, it can be used to prevent any third party from using it without authorization. This is especially important when someone tries to pass off their goods or services as those of the registered trademark owner. In such cases, the trademark owner can take legal action against the infringer and protect their rights.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[2] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Ability to License and Franchise</h3>
                      <p className="benefit-card-text">
                        One of the significant benefits of registering a trademark is that it allows the trademark owner to license and franchise their mark to third parties. This means the trademark owner can enter into commercial agreements with other parties, allowing them to use the mark in return for payment. It is a great way to monetize the trademark and grow the business.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[3] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Increased Brand Value</h3>
                      <p className="benefit-card-text">
                        A registered trademark can help increase the value of a brand. This is because it gives the brand a unique identity and makes it easier for customers to identify the brand and its products and services. This can help increase the brand's recognition and create a loyal customer base.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[4] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Increased Investment Opportunities</h3>
                      <p className="benefit-card-text">
                        A registered trademark can be used as an asset to attract investors. This is because investors are more likely to invest in a business with a registered trademark, indicating that the company has taken steps to protect its intellectual property.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[5] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Protection in Foreign Markets</h3>
                      <p className="benefit-card-text">
                        A trademark registration in India can also be used to protect the brand in foreign markets. This is because the registration provides exclusive rights to use the mark in India, which can be used as a basis for seeking protection in foreign countries.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">How to Get Trademark Certificate?</h2>
                  <p className="content-block-text">
                    Obtaining a Trademark Registration Certificate is an important step in protecting your brand or product. It gives legal recognition to your mark and serves as irrefutable proof of ownership. It serves as a deterrent to potential infringers, as it serves as an official notice that your mark is a registered trademark. Additionally, registering your trademark gives you the exclusive right to use the trademark throughout India. This makes it easier to enforce your rights if someone attempts to use a similar mark without your permission. Here is the step by step process on how to get trademark certificate:
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[6] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Selection of Trademark</h3>
                      <p className="benefit-card-text">
                        The first step in obtaining a trademark registration certificate in India is to select the trademark. The trademark should be unique, distinctive, and capable of recognising the goods or services of one person from those of another.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[7] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Trademark Application</h3>
                      <p className="benefit-card-text">
                        The next step is to file an application with the Trade Marks Registry in India. The application must be filed online and should include the following:
                      </p>
                      <ul className="benefit-list">
                        <li className="benefit-list-item">The name and address of the applicant.</li>
                        <li className="benefit-list-item">Details of the trademark.</li>
                        <li className="benefit-list-item">The goods and/or services to which the trademark applies.</li>
                        <li className="benefit-list-item">The class or classes of goods and/or services in which the trademark is to be registered.</li>
                      </ul>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[8] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Examination of Trademark</h3>
                      <p className="benefit-card-text">
                        Once the application is filed, it is examined by the Trade Marks Registry. During this examination, the registry will determine whether the trademark is eligible for registration and verify that it is not identical or deceptively similar to any existing trademark.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[9] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Publication of Trademark</h3>
                      <p className="benefit-card-text">
                        If the examination is successful, the trademark will be published in the trademark journal. This will allow any third parties who may have objections to the registration to file their objections
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[10] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Response to Objections</h3>
                      <p className="benefit-card-text">
                        If any objections are raised, the applicant will have to respond to them. The applicant may also have to provide additional evidence in support of the application.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[11] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Grant of Trademark Registration</h3>
                      <p className="benefit-card-text">
                        If the objections are addressed and the application is deemed eligible for registration, the Trade Marks Registry will grant and issue the trademark certificate. Once you are granted permission, your trademark is registered, and you can do the <a href="https://www.indiafilings.com/learn/how-to-download-trademark-certificate/" className="content-link">trademark certificate download</a> India.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">Renewing a Trademark Registration Certificate</h2>
                  <p className="content-block-text">
                    Renewing a trademark registration certificate ensures that the protection of the brand or logo is maintained. Without the renewal of the trademark certificate, the brand or logo can become vulnerable to infringement and may result in a loss of exclusive rights and legal action. When the certificate is renewed, it extends the duration of the registered trademark and provides additional legal protection. This is especially important if the brand or logo is widely used and recognized by the public. Renewing a trademark registration certificate is an important step in preserving the brand's or logo's value and preventing any potential issues from arising.
                  </p>

                  <div className="benefits-grid">
                    <div ref={(el) => (benefitCardsRefs.current[12] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Determine the Renewal Period</h3>
                      <p className="benefit-card-text">
                        Trademark registration in India is valid for 10 years from the registration date. Trademark owners need to renew their registration before the expiration of the 10 years to continue enjoying the benefits of trademark registration.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[13] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Prepare Renewal Application</h3>
                      <p className="benefit-card-text">
                        Trademark owners must file a renewal application before the expiration date of the 10 years. The renewal application must be filed with the Trademark Registrar or the Intellectual Property Office of India (IPO).
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[14] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Submit Necessary Documents</h3>
                      <p className="benefit-card-text">
                        Trademark owners should submit the following documents along with the renewal application:
                      </p>
                      <ul className="benefit-list">
                        <li className="benefit-list-item">Copy of the existing registration certificate</li>
                        <li className="benefit-list-item">Affidavit of use of the trademark</li>
                        <li className="benefit-list-item">A power of attorney</li>
                        <li className="benefit-list-item">Copy of the trademark certificate from the Trademark Office</li>
                        <li className="benefit-list-item">Payment of the renewal fee</li>
                      </ul>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[15] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Receive Acknowledgement</h3>
                      <p className="benefit-card-text">
                        Upon receipt of the renewal application, the Trademark Registry will send an acknowledgement to the trademark owner.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[16] = el)} className="benefit-card fade-in-left">
                      <h3 className="benefit-card-title">Review of the Renewal Application</h3>
                      <p className="benefit-card-text">
                        Following the renewal application submission, the Trademark Registry will review the application and check for any discrepancies.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[17] = el)} className="benefit-card fade-in-right">
                      <h3 className="benefit-card-title">Issue of Renewal Trademark Certificate</h3>
                      <p className="benefit-card-text">
                        After the Trademark Registry has approved the renewal application, a new registration certificate will be issued. The new registration certificate will have the updated expiration date and will be valid for 10 years from the renewal date.
                      </p>
                    </div>

                    <div ref={(el) => (benefitCardsRefs.current[18] = el)} className="benefit-card fade-in-up">
                      <h3 className="benefit-card-title">Publication of Renewal Certificate</h3>
                      <p className="benefit-card-text">
                        The renewed trademark certificate will also be published in the Trademarks Journal.
                      </p>
                    </div>
                  </div>

                  <h2 className="content-block-title">How efind24 can help you get Trademark Registration Certificate</h2>
                  <p className="content-block-text">
                    efind24 can help customers with trademark registration certificate by providing them with up-to-date information about the process and the necessary documents that need to be submitted. Our team of experts guide our customers through each step of the registration process and ensures they clearly understand what is required. Our experts can review documents, provide feedback on any potential issues, and help resolve any conflicts that may arise. Additionally, we can help customers to understand the implications of registering a trademark and the potential legal problems that may occur.
                  </p>
                  <p className="content-block-text">
                    We also provide comprehensive services to help ensure that customers have a successful trademark registration. Our team can help customers to create an effective trademark that meets all the criteria set by the Indian Trademark Office, and we can provide advice on how to protect their trademark from infringement. Once the application is complete, our team will ensure that the application to ensure it is complete and accurate and will provide any necessary guidance to the customer.
                  </p>
                  <p className="content-block-text">
                    At efind24, we understand the importance of having a secure, reliable trademark registration and are committed to helping our customers to achieve this goal. We strive to provide the best customer service and guidance to ensure our customers can register their trademarks without hassle.
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
                    <a href="#" className="guide-link">Online Trademark Registration at Chennai in Just 5 Days</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Documents required for Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Trademark Registration for Slogans</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Absolute Grounds for Refusal of Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">International Trademark Registration</a>
                    <div className="guide-separator"></div>
                    <a href="#" className="guide-link">Step by Step Guide on Trademark Registration Process</a>
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
            <h2 className="faq-title">FAQ's on Trademark Certificate & Brand Monitoring</h2>
            <div className="accordion" id="accordion-faq">
              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1360' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1360')}
                >
                  <span className="accordion-question">What is a Trademark Registration Certificate?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1360' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1360' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1360' ? 'active' : ''}`} id="accordion_1360_content">
                  <div className="page-content">
                    A Trademark Registration Certificate is a document issued by the Indian Trademark Registry (TMR) that confirms a trademark has been successfully registered in India. It serves as proof of the trademark holders ownership and protects the trademark against unauthorised use.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1361' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1361')}
                >
                  <span className="accordion-question">What information does a Trademark Registration Certificate include?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1361' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1361' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1361' ? 'active' : ''}`} id="accordion_1361_content">
                  <div className="page-content">
                    The Trademark Registration Certificate includes the trademark name, registration number, registration date, the goods and services covered by the registration, the trademark owners name and address, and the duration of protection.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1362' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1362')}
                >
                  <span className="accordion-question">How long does it take to obtain a Trademark Registration Certificate?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1362' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1362' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1362' ? 'active' : ''}`} id="accordion_1362_content">
                  <div className="page-content">
                    The time frame for obtaining a Trademark Registration Certificate varies depending on the applications complexity and the time it takes for the TMR to process the application. On average, it usually takes 6 months to 1 year for the application to be processed and the certificate issued.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1363' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1363')}
                >
                  <span className="accordion-question">How much does it cost to register a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1363' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1363' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1363' ? 'active' : ''}`} id="accordion_1363_content">
                  <div className="page-content">
                    The cost of registering a trademark in India depends on the type of application, the number of classes and the goods or services being registered.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1364' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1364')}
                >
                  <span className="accordion-question">What is the process for registering a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1364' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1364' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1364' ? 'active' : ''}`} id="accordion_1364_content">
                  <div className="page-content">
                    The process for registering a trademark in India includes filing an application with the Trademark Registry, conducting a search to ensure no other trademarks exist with a similar name, and then providing evidence of the use of the trademark. Once the application is accepted, the Trademark Registry will issue a Registration Certificate.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1365' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1365')}
                >
                  <span className="accordion-question">Is it necessary to register a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1365' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1365' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1365' ? 'active' : ''}`} id="accordion_1365_content">
                  <div className="page-content">
                    Yes, it is necessary to register a trademark in India to protect your brand and to prevent anyone else from using the same name or logo. Registration of a trademark in India is done by applying with the Indian Trademarks Registry.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1366' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1366')}
                >
                  <span className="accordion-question">What are the benefits of registering a trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1366' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1366' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1366' ? 'active' : ''}`} id="accordion_1366_content">
                  <div className="page-content">
                    By registering a trademark in India, you are legally entitled to exclusive rights to use the trademark in your business and to protect it from infringement. Additionally, registered trademarks can be used to prevent others from using similar trademarks and can also be used as a basis for filing a lawsuit in case of trademark infringement.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1367' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1367')}
                >
                  <span className="accordion-question">What is the difference between a trademark and a copyright?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1367' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1367' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1367' ? 'active' : ''}`} id="accordion_1367_content">
                  <div className="page-content">
                    A trademark is a form of intellectual property that protects a brand, logo, or slogan from being used by others. A copyright is a type of intellectual property that safeguards original works like books, music, and software.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1368' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1368')}
                >
                  <span className="accordion-question">How can I protect my trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1368' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1368' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1368' ? 'active' : ''}`} id="accordion_1368_content">
                  <div className="page-content">
                    You can protect your trademark by registering it with the Indian Trademarks Registry, monitoring the use of your trademark, and taking legal action against anyone who uses it without permission.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1369' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1369')}
                >
                  <span className="accordion-question">What happens if I dont register my trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1369' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1369' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1369' ? 'active' : ''}`} id="accordion_1369_content">
                  <div className="page-content">
                    If you do not register your trademark, you may be unable to take legal action against anyone who uses the trademark without permission. Additionally, you may not be able to prevent others from using similar trademarks or logos.
                  </div>
                </div>
              </div>

              {/* Hidden FAQs that show on Load More */}
              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1370' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1370')}
                >
                  <span className="accordion-question">What types of trademarks can be registered?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1370' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1370' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1370' ? 'active' : ''}`} id="accordion_1370_content">
                  <div className="page-content">
                    In India, trademarks can be registered for words, phrases, symbols, logos, designs, jingles, smells, sounds, and any combination.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1371' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1371')}
                >
                  <span className="accordion-question">How can I search to see if a trademark is already registered?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1371' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1371' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1371' ? 'active' : ''}`} id="accordion_1371_content">
                  <div className="page-content">
                    You can search the Indian Trademark Registry to see if a trademark is registered. You can also search the Trademark Electronic Search System (TESS) for a comprehensive search of trademarks registered in the United States.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1372' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1372')}
                >
                  <span className="accordion-question">What happens if my trademark application is rejected?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1372' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1372' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1372' ? 'active' : ''}`} id="accordion_1372_content">
                  <div className="page-content">
                    If your trademark application is rejected, you will receive an Office Action explaining the reasons for the rejection. You may be able to respond to the Office Action and overcome the objections raised by the trademark examiner.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1373' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1373')}
                >
                  <span className="accordion-question">Can I register a trademark for a logo, slogan or phrase?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1373' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1373' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1373' ? 'active' : ''}`} id="accordion_1373_content">
                  <div className="page-content">
                    You can register a trademark for a logo, slogan or phrase. You must provide evidence that the logo, slogan or phrase is unique and not already used by another party.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1374' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1374')}
                >
                  <span className="accordion-question">What evidence do I need to prove my trademark is unique?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1374' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1374' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1374' ? 'active' : ''}`} id="accordion_1374_content">
                  <div className="page-content">
                    You can provide evidence of your trademark use, such as advertising materials or photographs of the trademark in service. You can also provide evidence of the trademarks distinctiveness, such as third-party endorsements or testimonials.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1375' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1375')}
                >
                  <span className="accordion-question">What is the scope of protection for a registered trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1375' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1375' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1375' ? 'active' : ''}`} id="accordion_1375_content">
                  <div className="page-content">
                    The scope of protection for a registered trademark in India is extensive. It provides the holder with the absolute right to use the mark in relation to the registered goods/services for which it is registered. It also gives the holder a legal right to take action against any unauthorized use of the trademark.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1376' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1376')}
                >
                  <span className="accordion-question">What is the difference between an unregistered and a registered trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1376' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1376' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1376' ? 'active' : ''}`} id="accordion_1376_content">
                  <div className="page-content">
                    An unregistered trademark is a trademark that has not been registered with the Indian Trademark Office. It may still be protected under the common law, but it does not have the same legal protection as a registered trademark. A registered trademark is a mark that has been officially registered with the Indian Trademark Office, and it has complete protection of the law.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1377' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1377')}
                >
                  <span className="accordion-question">What is the renewal process for a registered trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1377' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1377' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1377' ? 'active' : ''}`} id="accordion_1377_content">
                  <div className="page-content">
                    The renewal process for a registered trademark in India is simple. Trademark holders must file a renewal application with the Indian Trademark Office before the expiration date of the trademark. The application must include the current trademark and a declaration of continued use of the trademark. Once the renewal is approved, the trademark is automatically renewed for another 10 years.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1378' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1378')}
                >
                  <span className="accordion-question">What is the duration of trademark registration?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1378' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1378' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1378' ? 'active' : ''}`} id="accordion_1378_content">
                  <div className="page-content">
                    Trademark registrations in India are valid for 10 years from the applications filing date. The registration must be renewed every ten years to maintain trademark protection.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_1379' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_1379')}
                >
                  <span className="accordion-question">Is it possible to dispute a registered trademark?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_1379' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_1379' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_1379' ? 'active' : ''}`} id="accordion_1379_content">
                  <div className="page-content">
                    Yes, it is possible to dispute a registered trademark in India. Any party can file an opposition against registering a trademark with the Indian Trademark Office. The party must provide sufficient evidence to support their claim that the trademark is not eligible for registration or conflicts with an existing trademark.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_5432' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_5432')}
                >
                  <span className="accordion-question">What is the process for trademark certificate download India?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_5432' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_5432' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_5432' ? 'active' : ''}`} id="accordion_5432_content">
                  <div className="page-content">
                    The process of trademark certificate download India is as follows - visit the IP India website and use the e-Register. You must enter your trademark application number to verify its status. If it shows as "Registered," you can proceed to download the certificate by clicking on the appropriate option.
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${showAllFAQs ? '' : 'hidden'}`}>
                <button 
                  className={`accordion-toggle ${openAccordion === 'accordion_5433' ? 'active' : ''}`}
                  onClick={() => handleAccordionToggle('accordion_5433')}
                >
                  <span className="accordion-question">How to download trademark certificate PDF?</span>
                  <i className={`accordion-icon ${openAccordion === 'accordion_5433' ? 'minus' : 'plus'}`}>
                    {openAccordion === 'accordion_5433' ? '−' : '+'}
                  </i>
                </button>
                <div className={`accordion-content ${openAccordion === 'accordion_5433' ? 'active' : ''}`} id="accordion_5433_content">
                  <div className="page-content">
                    To get started with the process of how to download trademark certificate, go to the IP India website, select "Trade Mark Application/Registered Mark," and enter your trademark application number. After verifying the captcha, click "View" to access your certificate, which can then be downloaded in PDF format.
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

export default TrademarkCertification;

