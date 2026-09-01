import React, { useState, useEffect } from 'react';
import { personalData } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.scss';

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'competencies', label: 'Capabilities' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'projects', label: 'Work' },
  { id: 'faq', label: 'FAQ' },
];

export const Navbar = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`editorial-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Brand Monogram / Name */}
        <a 
          href="#hero" 
          className="brand-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('hero');
          }}
        >
          <span className="brand-symbol">✦</span>
          <span className="brand-title">{personalData.brandName || personalData.name}</span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="desktop-pill-nav">
          <ul className="nav-pill-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button 
                  className="nav-pill-item"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-right-actions">
          <button 
            className="btn-pill-primary navbar-cta-btn"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                scrollToSection('contact');
              }
            }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <div className="mobile-nav-content">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className="mobile-nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button 
              className="btn-pill-primary mobile-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) onOpenContact();
                else scrollToSection('contact');
              }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
