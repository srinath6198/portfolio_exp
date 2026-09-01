import React from 'react';
import { techStackEcosystem } from '../../data/portfolioData';
import { FaReact, FaSass, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGreensock, SiRedux, SiVite } from 'react-icons/si';
import './TechEcosystem.scss';

const ICON_MAP = {
  FaReact: FaReact,
  SiTypescript: SiTypescript,
  SiNextdotjs: SiNextdotjs,
  SiGreensock: SiGreensock,
  FaSass: FaSass,
  FaFigma: FaFigma,
  SiRedux: SiRedux,
  SiVite: SiVite,
};

export const TechEcosystem = () => {
  return (
    <section className="editorial-tech-ecosystem-section section-spacing">
      <div className="container">
        <div className="tech-ecosystem-grid">
          {/* Left Column: Heading & Description */}
          <div className="ecosystem-text-col">
            <span className="section-kicker">Technology Architecture</span>
            <h2 className="ecosystem-title">
              Powered by modern, <span className="serif-accent">battle-tested</span> engineering tools.
            </h2>
            <p className="ecosystem-desc">
              I curate a focused tech stack optimized for developer velocity, strict type safety, predictable state orchestration, and high-framerate rendering across all platforms.
            </p>
            <div className="ecosystem-metric-callout">
              <span className="callout-val">100%</span>
              <span className="callout-lbl">Standardized on Type Safety, Responsive CSS &amp; Clean React Patterns</span>
            </div>
          </div>

          {/* Right Column: Sandy Bento Card with Logo Grid */}
          <div className="ecosystem-bento-col">
            <div className="ecosystem-sand-card">
              <div className="tech-logos-grid">
                {techStackEcosystem.map((item, idx) => {
                  const IconComp = ICON_MAP[item.iconName] || FaReact;
                  return (
                    <div key={idx} className="tech-logo-tile">
                      <div className="tile-icon-wrap">
                        <IconComp className="tech-icon-svg" />
                      </div>
                      <span className="tile-name">{item.name}</span>
                      <span className="tile-category">{item.category}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechEcosystem;
