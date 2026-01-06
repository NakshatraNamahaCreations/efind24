// import { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// function Header() {
//   const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
//   const servicesDropdownRef = useRef(null);
//   const closeTimeoutRef = useRef(null);
  
//   const servicesList = [
//     'Trademark Registration',
//     'Trademark Objection',
//     'Trademark Certificate',
//     'Trademark Opposition',
//     'Trademark Hearing',
//     'Trademark Rectification',
//     'Copyright Registration',
//     'Copyright Objection',
//     'Trademark Renewal',
//     'Expedited TM Registration'
//   ];

//   const handleMouseEnter = () => {
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current);
//       closeTimeoutRef.current = null;
//     }
//     setIsServicesDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setIsServicesDropdownOpen(false);
//     }, 200); // 200ms delay before closing
//   };

//   useEffect(() => {
//     return () => {
//       if (closeTimeoutRef.current) {
//         clearTimeout(closeTimeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <header className="header header--secondary">
//       <div className="container">
//         <div className="header-upper visible--md">
//           <ul className="header-contact">
//             <li>
//               <a className="header-contact__link" href="mailto:company@example.com">
//                 <strong>19/1, F5, First floor, KCD complex, CSI compound, 3rd Cross, Mission road, Bangalore - 560 027</strong>
//               </a>
//             </li>
//             <li>
             
//             </li>
//           </ul>
//           <ul className="social">
//             <li>
//               <a className="social__link" href="#" target="_blank" rel="noopener noreferrer">
//                 <svg width="15" height="14" viewBox="0 0 15 14">
//                   <path d="M11.8133 0H14.1133L9.08845 5.74336L15 13.5586H10.3712L6.74593 8.81856L2.59772 13.5586H0.296162L5.67082 7.41551L0 0H4.74606L8.0231 4.33242L11.8133 0ZM11.006 12.1818H12.2806L4.0536 1.3045H2.68603L11.006 12.1818Z"></path>
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="social__link" href="#" target="_blank" rel="noopener noreferrer">
//                 <svg width="10" height="16" viewBox="0 0 15 24">
//                   <path d="M13.0836 13.5L13.7492 9.15469H9.58203V6.3375C9.58203 5.14687 10.1633 3.98906 12.0289 3.98906H13.9227V0.295313C13.9227 0.295313 12.207 0 10.5664 0C7.13516 0 4.88984 2.08125 4.88984 5.84531V9.15469H1.07422V13.5H4.88984V24H9.58672V13.5H13.0836Z"></path>
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="social__link" href="#" target="_blank" rel="noopener noreferrer">
//                 <svg width="15" height="15" viewBox="0 0 12 12">
//                   <path d="M2.68661 12H0.198214V3.98839H2.68661V12ZM1.44107 2.89554C0.645536 2.89554 0 2.23661 0 1.44107C0 1.05888 0.151827 0.692333 0.42208 0.42208C0.692333 0.151827 1.05888 0 1.44107 0C1.82327 0 2.18981 0.151827 2.46006 0.42208C2.73032 0.692333 2.88214 1.05888 2.88214 1.44107C2.88214 2.23661 2.23661 2.89554 1.44107 2.89554ZM11.9973 12H9.51429V8.1C9.51429 7.17054 9.49554 5.97857 8.22054 5.97857C6.92679 5.97857 6.72857 6.98839 6.72857 8.03304V12H4.24286V3.98839H6.62946V5.08125H6.66429C6.99643 4.45179 7.80804 3.7875 9.01875 3.7875C11.5366 3.7875 12 5.44554 12 7.59911V12H11.9973Z"></path>
//                 </svg>
//               </a>
//             </li>
//             <li>
//               <a className="social__link" href="#" target="_blank" rel="noopener noreferrer">
//                 <svg width="15" height="16" viewBox="0 0 15 16">
//                   <path d="M7.42745 4.47857C5.29918 4.47857 3.5825 6.19525 3.5825 8.32352C3.5825 10.4518 5.29918 12.1685 7.42745 12.1685C9.55573 12.1685 11.2724 10.4518 11.2724 8.32352C11.2724 6.19525 9.55573 4.47857 7.42745 4.47857ZM7.42745 10.8232C6.05211 10.8232 4.92773 9.70222 4.92773 8.32352C4.92773 6.94483 6.04876 5.8238 7.42745 5.8238C8.80615 5.8238 9.92718 6.94483 9.92718 8.32352C9.92718 9.70222 8.8028 10.8232 7.42745 10.8232ZM12.3265 4.32129C12.3265 4.8199 11.9249 5.21811 11.4297 5.21811C10.9311 5.21811 10.5329 4.81655 10.5329 4.32129C10.5329 3.82603 10.9344 3.42447 11.4297 3.42447C11.9249 3.42447 12.3265 3.82603 12.3265 4.32129ZM14.8731 5.2315C14.8162 4.03016 14.5418 2.96602 13.6617 2.08928C12.785 1.21253 11.7208 0.938135 10.5195 0.8779C9.28133 0.807627 5.57023 0.807627 4.33208 0.8779C3.13409 0.934788 2.06995 1.20919 1.18986 2.08593C0.309775 2.96267 0.0387205 4.02681 -0.0215138 5.22815C-0.0917871 6.4663 -0.0917871 10.1774 -0.0215138 11.4155C0.0353741 12.6169 0.309775 13.681 1.18986 14.5578C2.06995 15.4345 3.13075 15.7089 4.33208 15.7691C5.57023 15.8394 9.28133 15.8394 10.5195 15.7691C11.7208 15.7123 12.785 15.4379 13.6617 14.5578C14.5384 13.681 14.8128 12.6169 14.8731 11.4155C14.9434 10.1774 14.9434 6.46965 14.8731 5.2315ZM13.2735 12.744C13.0125 13.3999 12.5072 13.9052 11.848 14.1696C10.8608 14.5611 8.51836 14.4708 7.42745 14.4708C6.33655 14.4708 3.99076 14.5578 3.00693 14.1696C2.35105 13.9086 1.84575 13.4033 1.58139 12.744C1.18986 11.7569 1.28022 9.41443 1.28022 8.32352C1.28022 7.23261 1.19321 4.88682 1.58139 3.903C1.8424 3.24711 2.3477 2.74182 3.00693 2.47745C3.9941 2.08593 6.33655 2.17628 7.42745 2.17628C8.51836 2.17628 10.8642 2.08928 11.848 2.47745C12.5039 2.73847 13.0092 3.24377 13.2735 3.903C13.665 4.89017 13.5747 7.23261 13.5747 8.32352C13.5747 9.41443 13.665 11.7602 13.2735 12.744Z"></path>
//                 </svg>
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="header-under">
//           <div className="header-inner">
//             <Link to="/" className="header-inner__logo">
//               <div className="logo-container">
//                 <span className="logo-icon">⚖</span>
//                 <span className="logo-text">efind24</span>
//               </div>
//             </Link>
//           </div>
//           <div className="nav-drop">
//             <nav className="nav">
//               <ul className="menu">
//                 <li className="menu__item has-submenu">
//                   <Link className="menu__link" to="/">Home</Link>
//                 </li>
//                 <li><Link className="menu__link" to="/about">About us</Link></li>
//                 <li 
//                   className="menu__item has-submenu"
//                   ref={servicesDropdownRef}
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <span 
//                     className="menu__link" 
//                     style={{ cursor: 'pointer' }}
//                   >
//                     Trademark
//                     <span className={`dropdown-arrow ${isServicesDropdownOpen ? 'open' : ''}`}>▼</span>
//                   </span>
//                   {isServicesDropdownOpen && (
//                     <ul className="services-dropdown-menu">
//                       {servicesList.map((service, index) => {
//                         // Map service names to their routes
//                         const getServiceRoute = (serviceName) => {
//                           if (serviceName === 'Trademark Registration') {
//                             return '/trademark-registration';
//                           }
//                           if (serviceName === 'Trademark Objection') {
//                             return '/trademark-objection';
//                           }
//                           if (serviceName === 'Trademark Certificate') {
//                             return '/trademark-certification';
//                           }
//                           if (serviceName === 'Trademark Opposition') {
//                             return '/trademark-opposition';
//                           }
//                           if (serviceName === 'Trademark Hearing') {
//                             return '/trademark-hearing';
//                           }
//                           if (serviceName === 'Trademark Rectification') {
//                             return '/trademark-rectification';
//                           }
//                           if (serviceName === 'Trademark Renewal') {
//                             return '/trademark-renewal';
//                           }
//                           if (serviceName === 'Expedited TM Registration') {
//                             return '/expedited-trademark-registration';
//                           }
//                           if (serviceName === 'Copyright Registration') {
//                             return '/copyright-registration';
//                           }
//                           if (serviceName === 'Copyright Objection') {
//                             return '/copyright-objection';
//                           }
//                           // Add more routes as pages are created
//                           return '#';
//                         };
                        
//                         return (
//                           <li key={index} className="services-dropdown-item">
//                             <Link 
//                               to={getServiceRoute(service)} 
//                               className="services-dropdown-link"
//                               onClick={() => setIsServicesDropdownOpen(false)}
//                             >
//                               {service}
//                             </Link>
//                           </li>
//                         );
//                       })}
//                     </ul>
//                   )}
//                 </li>
//                 <li><Link className="menu__link" to="/case-studies">Case Studies</Link></li>
//                 <li className="menu__item has-submenu">
//                   <Link className="menu__link" to="/contact">Contact Us</Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <span className="nav-opener"><span></span></span>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;




import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimer = useRef(null);

  const servicesList = [
    "Trademark Registration",
    "Trademark Objection",
    "Trademark Certificate",
    "Trademark Opposition",
    "Trademark Hearing",
    "Trademark Rectification",
    "Trademark Renewal",
    "Expedited TM Registration",
    "Copyright Registration",
    "Copyright Objection",
  ];

  const getServiceRoute = (name) => {
    const map = {
      "Trademark Registration": "/trademark-registration",
      "Trademark Objection": "/trademark-objection",
      "Trademark Certificate": "/trademark-certification",
      "Trademark Opposition": "/trademark-opposition",
      "Trademark Hearing": "/trademark-hearing",
      "Trademark Rectification": "/trademark-rectification",
      "Trademark Renewal": "/trademark-renewal",
      "Expedited TM Registration": "/expedited-trademark-registration",
      "Copyright Registration": "/copyright-registration",
      "Copyright Objection": "/copyright-objection",
    };
    return map[name] || "/";
  };

  const onEnter = () => {
    clearTimeout(closeTimer.current);
    setIsDropdownOpen(true);
  };

  const onLeave = () => {
    closeTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 180);
  };

  useEffect(() => {
    return () => clearTimeout(closeTimer.current);
  }, []);

  return (
    <header className="header-modern">
      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <span>
           19/1, F5, First floor, KCD complex, CSI compound, 3rd Cross, Mission road, Bangalore - 560 027
          </span>
          <div className="top-social">
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaLinkedin/></a>
            <a href="#"><FaInstagram/></a>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="nav-glass">
        <div className="container nav-inner">
          {/* LOGO */}
          <Link to="/" className="logo">
            <span className="logo-icon">⚖</span>
            <span className="logo-text">efind24</span>
          </Link>

          {/* MENU */}
          <nav>
            <ul className="menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>

              <li
                className="dropdown"
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
              >
                <span className="dropdown-trigger">
                  Trademark
                  <span className={`arrow ${isDropdownOpen ? "open" : ""}`}>▾</span>
                </span>

                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    {servicesList.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={getServiceRoute(item)}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li><Link to="/case-studies">Case Studies</Link></li>
              <li>
                <Link to="/contact" className="cta">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
