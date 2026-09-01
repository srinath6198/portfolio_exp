import React, { useState } from 'react';
import { philosophyPillars } from '../../data/portfolioData';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './About.scss';

export const About = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="philosophy" className="editorial-philosophy-section section-spacing">
      <div className="container">
        <div className="philosophy-grid">
          {/* Left Column: Heading & Context */}
          <div className="philosophy-headline-col">
            <span className="section-kicker">Core Principles</span>

            <h2 className="philosophy-main-title">
              Building reliable and <span className="serif-accent">user-friendly</span>{" "}
              applications with React.
            </h2>

            <p className="philosophy-lead-paragraph">
              I focus on writing clean, maintainable React code and building responsive
              interfaces that solve real business requirements. I believe in reusable
              components, clear state management, reliable API integration, and
              continuously improving application quality.
            </p>

            <div className="philosophy-badge-list">
              <span className="pill-badge">Reusable Components</span>
              <span className="pill-badge">Clean React Code</span>
              <span className="pill-badge">API Integration</span>
            </div>
          </div>

          {/* Right Column: Interactive Numbered Accordion / List */}
          <div className="philosophy-pillars-col">
            {philosophyPillars.map((pillar, idx) => {
              const isOpen = activeItem === idx;
              return (
                <div
                  key={pillar.id}
                  className={`philosophy-pillar-card ${isOpen ? 'active' : ''}`}
                  onClick={() => setActiveItem(isOpen ? -1 : idx)}
                >
                  <div className="pillar-header">
                    <div className="pillar-index-badge">
                      <span className="pillar-num">{pillar.id}</span>
                      <h3 className="pillar-title">{pillar.title}</h3>
                    </div>
                    <span className={`pillar-toggle-icon ${isOpen ? 'open' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </div>

                  {isOpen && (
                    <div className="pillar-content">
                      <p className="pillar-desc">{pillar.description}</p>
                      <div className="pillar-footer">
                        <span className="pillar-tag">{pillar.badge}</span>
                      </div>
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

export default About;
