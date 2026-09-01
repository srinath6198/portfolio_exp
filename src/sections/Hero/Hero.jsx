import React from 'react';
import { personalData, heroStats } from '../../data/portfolioData';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import './Hero.scss';

export const Hero = ({ onOpenContact }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="editorial-hero-section">
      <div className="container">
        {/* Main 2-Column Hero Grid */}
        <div className="hero-editorial-grid">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="hero-text-content">
            <span className="section-kicker">Software Engineer • Full-Stack Developer</span>

            <h1 className="hero-editorial-headline">
              Scaling products with modern, performant full-stack <span className="serif-accent">engineering</span>.
            </h1>

            <p className="hero-lead-text">
              Building scalable full-stack applications using React.js, JavaScript, TypeScript, Node.js, Express.js, Python, MongoDB, and MySQL—focused on clean architecture, responsive UI, reliable APIs, and high-performance solutions.
            </p>


            <div className="hero-action-buttons">
              <button
                className="btn-pill-primary hero-main-btn"
                onClick={() => {
                  if (onOpenContact) onOpenContact();
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </button>

              <button
                className="btn-pill-secondary hero-sec-btn"
                onClick={scrollToProjects}
              >
                <span>Explore Selected Work</span>
                <ChevronRight size={16} />
              </button>
            </div>

            <div className="hero-editorial-footnote">
              <span className="footnote-dot" />
              <span>Available for full-stack frontend contracts &amp; strategic architecture</span>
            </div>
          </div>

          {/* Right Column: Curated Unsplash Editorial Photo */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                src={personalData.images.heroTeam}
                alt="High-performing product collaboration"
                className="editorial-img hero-photo"
                loading="eager"
              />
              <div className="image-overlay-badge">
                <span className="badge-dot" />
                <span className="badge-text">Crafted in India • Global Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row with Hairline Dividers (Directly matching reference) */}
        <div className="hero-stats-row">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="hero-stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
