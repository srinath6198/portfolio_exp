import React from 'react';
import { engagementTiers } from '../../data/portfolioData';
import { Check, ArrowUpRight } from 'lucide-react';
import './EngagementTiers.scss';

export const EngagementTiers = ({ onOpenContact }) => {
  return (
    <section id="engagement" className="editorial-engagement-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-center">
          <span className="section-kicker">Engagement Models</span>
          <h2 className="section-title">
            Structured for <span className="serif-accent">velocity &amp; precision</span>
          </h2>
          <p className="section-subtitle">
            Flexible, high-accountability collaboration models tailored for venture-backed startups and engineering teams.
          </p>
        </div>

        {/* 2-Column Bento Cards */}
        <div className="engagement-cards-grid">
          {engagementTiers.map((tier) => (
            <div key={tier.id} className="engagement-bento-card">
              <div className="card-top-row">
                <span className="tier-tag">{tier.tag}</span>
                <span className="tier-scope-pill">{tier.highlight}</span>
              </div>

              <h3 className="tier-title">{tier.title}</h3>
              <p className="tier-desc">{tier.description}</p>

              <div className="tier-divider" />

              <div className="tier-features-list">
                <span className="features-label">Core Deliverables &amp; Focus:</span>
                <ul>
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="bullet-check"><Check size={14} /></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-action-row">
                <button 
                  className="btn-pill-primary tier-cta-btn"
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                    else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementTiers;
