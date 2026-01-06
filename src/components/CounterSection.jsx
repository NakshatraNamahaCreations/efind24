import { useState, useEffect, useRef } from 'react';
import icon1 from '../assets/icon/img-11_blue.png';
import icon2 from '../assets/icon/img-12_blue.png';
import icon3 from '../assets/icon/img-13_blue.png';
import icon4 from '../assets/icon/img-14_blue.png';
import icon5 from '../assets/icon/img-15_blue.png';
import icon6 from '../assets/icon/img-16_blue.png';
import './CounterSection.css';

function CounterSection() {
  const [counters, setCounters] = useState({
    criminal: 0,
    commercial: 0,
    lawyers: 0,
    worldwide: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 'criminal',
      icon: icon1,
      target: 90000,
      label: 'Criminal Case Solved'
    },
    {
      id: 'commercial',
      icon: icon2,
      target: 5860,
      label: 'Commercial Space'
    },
    {
      id: 'lawyers',
      icon: icon3,
      target: 92,
      label: 'Active Lawyers'
    },
    {
      id: 'worldwide',
      icon: icon4,
      target: 300,
      label: 'Worldwide Site Firm'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const startCounters = () => {
    stats.forEach((stat) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setCounters((prev) => ({
            ...prev,
            [stat.id]: stat.target
          }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }
      }, duration / steps);
    });
  };

  const formatNumber = (num) => {
    return num.toLocaleString('en-US');
  };

  return (
    <div className="counter-wrapper">
      <div className="about_counter" ref={sectionRef}>
        <div className="about_counter_list ul-li clearfix">
          <ul>
            {stats.map((stat) => (
              <li key={stat.id}>
              <div className="counter_icon_text text-center">
                <div className="counter_icon">
                  <img src={stat.icon} alt={stat.label} width="45" height="45" />
                </div>
                  <div className="counter_number pera-content">
                    <span className="counter-value">
                      {formatNumber(counters[stat.id])}
                    </span>
                    <strong>+</strong>
                    <p>{stat.label}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;

