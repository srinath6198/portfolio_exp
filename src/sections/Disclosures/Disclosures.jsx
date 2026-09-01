import React, { useState } from 'react';
import { faqDisclosures } from '../../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './Disclosures.scss';

export const Disclosures = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="editorial-disclosures-section section-spacing">
      <div className="container">
        <div className="disclosures-layout">
          {/* Left Column: Heading */}
          <div className="disclosures-heading-side">
            <span className="section-kicker">FAQ &amp; Insights</span>
            <h2 className="disclosures-title">
              Engineering standards <span className="serif-accent">&amp; disclosures</span>
            </h2>
            <p className="disclosures-sub">
              Transparent answers regarding working models, code quality gates, delivery timelines, and intellectual property.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="disclosures-accordion-side">
            {faqDisclosures.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx} 
                  className={`disclosure-accordion-row ${isOpen ? 'open' : ''}`}
                  onClick={() => toggleAccordion(idx)}
                >
                  <div className="disclosure-row-header">
                    <h3 className="disclosure-question">{item.question}</h3>
                    <span className={`disclosure-arrow ${isOpen ? 'active' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </div>

                  {isOpen && (
                    <div className="disclosure-row-body">
                      <p className="disclosure-answer">{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclosures;
