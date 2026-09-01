import React, { useState } from 'react';
import { testimonialsData } from '../../data/portfolioData';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Testimonials.scss';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="editorial-testimonials-section section-spacing">
      <div className="container">
        <div className="testimonials-wrap">
          <div className="testimonials-header">
            <span className="section-kicker">Client Perspectives</span>
            <h2 className="testimonials-title">
              Trusted by engineering <span className="serif-accent">&amp; product leaders</span>
            </h2>
          </div>

          {/* Large Editorial Quote Card */}
          <div className="editorial-quote-card">
            <div className="quote-icon-box">
              <Quote size={32} className="quote-mark" />
            </div>

            <p className="quote-text">
              "{current.quote}"
            </p>

            <div className="quote-author-row">
              <div className="author-info">
                {/* <img src={current.image} alt={current.author} className="author-avatar" /> */}
                <div>
                  <h4 className="author-name">{current.author}</h4>
                  <span className="author-role">{current.role}</span>
                </div>
              </div>

              <div className="quote-controls">
                <div className="rating-stars">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={15} className="star-filled" />
                  ))}
                </div>

                <div className="nav-arrow-btns">
                  <button onClick={handlePrev} className="arrow-btn" aria-label="Previous review">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={handleNext} className="arrow-btn" aria-label="Next review">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
