import boxBg1 from '../assets/cards/box_bg_1.jpg';
import boxBg2 from '../assets/cards/box_bg_2.jpg';
import boxBg3 from '../assets/cards/box_bg_3.jpg';
import './ServiceCards.css';

function ServiceCards() {
  const services = [
    {
      title: "Experienced Court Performance",
      image: boxBg1
    },
    {
      title: "We Provide Solid Law Practice",
      image: boxBg2
    },
    {
      title: "Winners for Global Legal Innovation",
      image: boxBg3
    }
  ];

  return (
    <section className="service-section">
      <ul className="service-list">
        {services.map((service, index) => (
          <li key={index} className="service-list__item">
            <div className="service-card">
              <div className="service-card__bg">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="glow-orbs">
  <span></span>
  <span></span>
  <span></span>
</div>
              <h2 className="service-card__title">{service.title}</h2>
              <div className="service-card__separator"></div>
              <a href="#" className="service-card__link">
  Find Out More
  <span className="icon-wrap">
    <svg className="icon" width="21" height="12" viewBox="0 0 21 12">
      <path fillRule="evenodd" clipRule="evenodd" d="M15 6.75L0 6.75L0 5.25L15 5.25V6.75Z"></path>
      <path d="M21 5.99986L14.25 11.196L14.25 0.803711L21 5.99986Z"></path>
    </svg>
  </span>
</a>

            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceCards;

