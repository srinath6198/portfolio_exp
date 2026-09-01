import React, { useState } from 'react';
import { caseStudiesSpotlight } from '../../data/portfolioData';
import { ArrowUpRight, Activity, Cpu, ShieldCheck, Terminal } from 'lucide-react';
import './CaseStudySpotlight.scss';

export const CaseStudySpotlight = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="editorial-case-spotlight-section section-spacing">
      <div className="container">
        <div className="spotlight-header">
          <span className="section-kicker">Architecture Spotlight</span>
          <h2 className="spotlight-title">
            Deep dive into <span className="serif-accent">mission-critical</span> applications
          </h2>
          <p className="spotlight-subtitle">
            Exploring real-world engineering solutions: from real-time WebSocket state distribution to multi-brand design token compilers.
          </p>
        </div>

        {/* Dual Spotlight Cards (Dark and Light UI Mockups) */}
        <div className="spotlight-cards-stack">
          {caseStudiesSpotlight.map((cs, idx) => (
            <div key={cs.id} className={`spotlight-card ${idx % 2 === 0 ? 'dark-theme-card' : 'light-theme-card'}`}>
              <div className="card-text-side">
                <div className="case-tag-row">
                  <span className="case-badge">Case Study 0{idx + 1}</span>
                  <span className="case-tagline">{cs.tagline}</span>
                </div>

                <h3 className="case-heading">{cs.title}</h3>
                <p className="case-description">{cs.description}</p>

                <div className="metric-box">
                  <span className="metric-num">{cs.metricValue}</span>
                  <span className="metric-lbl">{cs.metricLabel}</span>
                </div>

                <button 
                  className={`btn-pill-${idx % 2 === 0 ? 'primary' : 'primary'} case-cta-btn`}
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                    else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Request Full Case Overview</span>
                  <ArrowUpRight size={15} />
                </button>
              </div>

              {/* Interactive App UI Mockup Panel */}
              <div className="card-ui-side">
                <div className="mockup-window">
                  <div className="window-topbar">
                    <div className="window-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="window-title font-mono">{idx === 0 ? 'telemetry.prod.cluster' : 'design-tokens.v2'}</span>
                  </div>

                  <div className="window-content-preview">
                    <img 
                      src={cs.image} 
                      alt={cs.title} 
                      className="mockup-screen-img"
                      loading="lazy"
                    />
                    <div className="mockup-hud-overlay">
                      <div className="hud-metric">
                        <Activity size={14} />
                        <span>Latency: 4.2ms</span>
                      </div>
                      <div className="hud-metric">
                        <Cpu size={14} />
                        <span>FPS: 60 (Locked)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySpotlight;
