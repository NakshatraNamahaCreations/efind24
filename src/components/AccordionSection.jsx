import { useState } from 'react';
import './AccordionSection.css';

function AccordionSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const accordionItems = [
    {
      title: "Climate Change",
      items: [
        ["Climate Change", "Energy", "Energy & EPC Matters", "Energy Supply Transactions", "Natural Resources"],
        ["Environmental Compliance", "Oil & Natural Gas", "Regulation & Litigation", "Intellectual Property"]
      ]
    },
    {
      title: "Corporate Law",
      items: [
        ["Mergers & Acquisitions", "Corporate Governance", "Securities Law", "Compliance"],
        ["Business Formation", "Contract Negotiations", "Regulatory Affairs"]
      ]
    },
    {
      title: "Litigation",
      items: [
        ["Commercial Litigation", "Arbitration", "Mediation", "Appeals"],
        ["Class Actions", "Employment Disputes", "Contract Disputes"]
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="accordion-section">
      <div className="container">
        <div className="accordion-list-wrapper">
          {accordionItems.map((item, index) => (
            <div key={index} className="accordion accordion--offset">
              <div 
                className="accordion__header"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="accordion__title">{item.title}</h3>
                <span className={`accordion__icon ${expandedIndex === index ? 'expanded' : ''}`}>
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </div>
              <div 
                className={`accordion__expanded ${expandedIndex === index ? 'active' : ''}`}
              >
                <div className="accordion-list">
                  {item.items.map((column, colIndex) => (
                    <ul key={colIndex}>
                      {column.map((listItem, itemIndex) => (
                        <li key={itemIndex}>{listItem}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;


















