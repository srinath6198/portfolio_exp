import React from 'react';
import { personalData } from '../../data/portfolioData';
import { ArrowUpRight, Mail } from 'lucide-react';
import './CtaBanner.scss';

export const CtaBanner = ({ onOpenContact }) => {
  return (
    <section className="editorial-cta-banner-section section-spacing">
      <div className="container">
        <div className="cta-banner-card">
          {/* Left Column: Heading & Button */}
          <div className="cta-text-content">
            <span className="section-kicker">Initiate Project</span>
            <h2 className="cta-headline">
              For moments when <span className="serif-accent">craft matters</span>
            </h2>
            <p className="cta-sub">
              Available for strategic frontend consulting, full application builds, and design system contracts. Let's build something enduring.
            </p>

            <div className="cta-btn-group">
              <button 
                className="btn-pill-primary cta-action-btn"
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Let's Collaborate</span>
                <ArrowUpRight size={16} />
              </button>

              <a 
                href={`mailto:${personalData.email}`} 
                className="btn-pill-secondary cta-mail-btn"
              >
                <Mail size={16} />
                <span>{personalData.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Landmark Image */}
          <div className="cta-image-wrapper">
            <img 
              src={personalData.images.architecturalCta} 
              alt="Monochrome architectural craft landmark" 
              className="editorial-img cta-arch-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
