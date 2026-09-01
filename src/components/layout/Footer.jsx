import React from 'react';
import { personalData, footerLinks } from '../../data/portfolioData';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import './Footer.scss';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer">
      <div className="container">

        {/* Top Sitemap Grid */}
        <div className="footer-top-grid">

          {/* Brand & Mission */}
          <div className="footer-brand-side">

            <div className="brand-monogram">
              <span className="brand-symbol">✦</span>

              <span className="brand-name">
                {personalData.brandName || personalData.name}
              </span>
            </div>

            <p className="footer-mission-text">
              Full-Stack Software Engineer specializing in building
              modern, scalable web applications using React.js,
              Node.js, Express.js, Python, MongoDB, and MySQL.
            </p>

            <div className="footer-availability-tag">
              <span className="avail-dot" />

              <span>
                {personalData.availability}
              </span>
            </div>

          </div>

          {/* Navigation */}
          <div className="footer-nav-col">

            <h4 className="footer-column-heading">
              Navigation
            </h4>

            <ul className="footer-links-list">

              {footerLinks.navigation.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Socials */}
          <div className="footer-nav-col">

            <h4 className="footer-column-heading">
              Connect
            </h4>

            <ul className="footer-links-list">

              {footerLinks.socials.map((link, idx) => (
                <li key={idx}>

                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link-item"
                  >
                    <span>
                      {link.label}
                    </span>

                    <ArrowUpRight size={13} />
                  </a>

                </li>
              ))}

            </ul>

          </div>

          {/* Engineering */}
          <div className="footer-nav-col">

            <h4 className="footer-column-heading">
              Technology
            </h4>

            <p className="footer-small-copy">
              Built with React.js, Vite, TypeScript, SCSS,
              Node.js, Express.js, Python, MongoDB, and MySQL.
            </p>

            <button
              onClick={scrollToTop}
              className="back-top-btn"
            >
              <span>
                Back to Top
              </span>

              <ArrowUp size={14} />
            </button>

          </div>

        </div>

        {/* Divider */}
        <div className="footer-bottom-divider" />

        {/* Bottom Row */}
        <div className="footer-bottom-row">

          <p className="footer-legal-copy">
            {footerLinks.disclaimer}
          </p>

          <div className="footer-copyright">

            <span>
              © {currentYear} {personalData.name}.
              All rights reserved.
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;