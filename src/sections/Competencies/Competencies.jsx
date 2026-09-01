import React from 'react';
import { competenciesData } from '../../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';
import './Competencies.scss';

export const Competencies = () => {
  return (
    <section id="competencies" className="editorial-competencies-section section-spacing">
      <div className="container">
        <div className="competencies-grid">
          {/* Left Column: Capabilities List */}
          <div className="competencies-text-col">
            <span className="section-kicker">{competenciesData.kicker}</span>
            <h2 className="competencies-title">
              {competenciesData.title}
            </h2>
            <p className="competencies-lead">
              {competenciesData.subtitle}
            </p>

            <div className="competencies-points-list">
              {competenciesData.points.map((pt, idx) => (
                <div key={idx} className="competency-item">
                  <div className="item-icon-box">
                    <CheckCircle2 size={19} className="check-icon" />
                  </div>
                  <div className="item-details">
                    <h3 className="item-heading">{pt.title}</h3>
                    <p className="item-desc">{pt.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Portrait Photography */}
          <div className="competencies-photo-col">
            <div className="photo-card-frame">
              <img
                src={competenciesData.portraitImage}
                alt="Senior software engineer at work"
                className="editorial-img competency-portrait"
                loading="lazy"
              />
              <div className="photo-caption-tag">
                <span className="caption-label">Development Approach</span>
                <span className="caption-sub">
                  Clean code, reusable components, and reliable API integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competencies;
