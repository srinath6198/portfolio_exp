import React, { useState } from 'react';
import { personalData } from '../../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import './Contact.scss';

export const Contact = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText?.(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#121316', '#1A56DB', '#C85A32']
      });
    }, 800);
  };

  return (
    <section id="contact" className="editorial-contact-section section-spacing">
      <div className="container">
        <div className="contact-editorial-layout">
          {/* Left Column: Direct Inquiries Info */}
          <div className="contact-editorial-info">
            <span className="section-kicker">Direct Communication</span>
            <h2 className="contact-title">
              Let's build something <span className="serif-accent">remarkable</span>
            </h2>
            <p className="contact-lead">
              Have a prospective project, architectural challenge, or design system initiative? Reach out directly via the form or inbox.
            </p>

            {/* Email Copy Card */}
            <div className="editorial-email-card">
              <div className="email-meta-info">
                <span className="label-kicker font-mono">PRIMARY INBOX</span>
                <span className="email-text">{personalData.email}</span>
              </div>
              <button 
                className="copy-pill-btn"
                onClick={handleCopyEmail}
                title="Copy Email Address"
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-meta-points">
              <div className="meta-point">
                <MapPin size={16} className="meta-icon" />
                <span>{personalData.location}</span>
              </div>
              <div className="meta-point">
                <Clock size={16} className="meta-icon" />
                <span>Typical response time: Under 12 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-wrap">
                  <Check size={28} />
                </div>
                <h3>Message Dispatched</h3>
                <p>Thank you for reaching out. I'll review your project details and respond promptly.</p>
                <button 
                  className="btn-pill-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="editorial-form">
                <div className="form-field-group">
                  <label htmlFor="contact-name" className="field-label">Your Name or Organization</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    placeholder="e.g. Alex Morgan"
                    className="editorial-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-email" className="field-label">Email Address</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    placeholder="alex@company.com"
                    className="editorial-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-field-group">
                  <label htmlFor="contact-message" className="field-label">Project Scope &amp; Timeline</label>
                  <textarea 
                    id="contact-message"
                    rows="4" 
                    placeholder="Tell me about your product requirements, stack, and goals..."
                    className="editorial-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-pill-primary submit-btn"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Dispatching...' : 'Send Inquiry'}</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
