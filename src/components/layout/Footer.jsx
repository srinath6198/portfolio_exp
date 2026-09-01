import React from 'react';
import { personalData, footerLinks } from '../../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="container">
        {/* Top Sitemap Grid */}
        <div className="footer-top-grid">
          {/* Brand Monogram & Mission */}
          <div className="footer-brand-side">
            <div className="brand-monogram">
              <span className="brand-symbol">✦</span>
              <span className="brand-name">{personalData.brandName || personalData.name}</span>
            </div>
            <p className="footer-mission-text">
              Senior Frontend &amp; UI Engineer specialized in building high-performing web applications, design systems, and fluid interactive interfaces.
            </p>
            <div className="footer-availability-tag">
              <span className="avail-dot" />
              <span>{personalData.availability}</span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col">
            <h4 className="footer-column-heading">Navigation</h4>
            <ul className="footer-links-list">
              {footerLinks.navigation.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Column */}
          <div className="footer-nav-col">
            <h4 className="footer-column-heading">Connect</h4>
            <ul className="footer-links-list">
              {footerLinks.socials.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="social-link-item">
                    <span>{link.label}</span>
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Tech Column */}
          <div className="footer-nav-col">
            <h4 className="footer-column-heading">Engineering</h4>
            <p className="footer-small-copy">
              Built with React 19, Vite, Modular SCSS &amp; Lenis Smooth Scroll. Hosted on high-availability global CDN.
            </p>
            <button onClick={scrollToTop} className="back-top-btn">
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="footer-bottom-divider" />

        {/* Bottom Disclaimers & Copyright Row */}
        <div className="footer-bottom-row">
          <p className="footer-legal-copy">
            {footerLinks.disclaimer}
          </p>
          <div className="footer-copyright">
            <span>© {currentYear} {personalData.name}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
