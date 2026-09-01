import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { CustomCursor } from './components/common/CustomCursor';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Luxury Editorial Sections
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Competencies } from './sections/Competencies/Competencies';
import { EngagementTiers } from './sections/EngagementTiers/EngagementTiers';
import { Projects } from './sections/Projects/Projects';
import { Experience } from './sections/Experience/Experience';
import { Skills } from './sections/Skills/Skills';
import { Cricket } from './sections/Cricket/Cricket';
import { TechEcosystem } from './sections/TechEcosystem/TechEcosystem';
import { CaseStudySpotlight } from './sections/CaseStudySpotlight/CaseStudySpotlight';
import { Testimonials } from './sections/Testimonials/Testimonials';
import { CtaBanner } from './sections/CtaBanner/CtaBanner';
import { Disclosures } from './sections/Disclosures/Disclosures';
import { Contact } from './sections/Contact/Contact';

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Lenis Smooth Scrolling
  useLenis();

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Preloader */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Fluid Difference Inverted Cursor & Progress */}
      <CustomCursor />
      <ScrollProgress />

      {/* Ambient Grid Texture */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="grid-pattern" />
      </div>

      {/* Sticky Editorial Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Flow */}
      <main className="main-content-flow">
        <Hero onOpenContact={handleOpenContact} />
        <About />
        <Competencies />
        <EngagementTiers onOpenContact={handleOpenContact} />
        <Projects />
        <Experience />
        <Skills />
        <TechEcosystem />
        <CaseStudySpotlight onOpenContact={handleOpenContact} />
        <Testimonials />
        <CtaBanner onOpenContact={handleOpenContact} />
        <Disclosures />
        <Cricket />
        <Contact />
      </main>

      {/* Global Black Editorial Footer */}
      <Footer />
    </div>
  );
};

export default App;
