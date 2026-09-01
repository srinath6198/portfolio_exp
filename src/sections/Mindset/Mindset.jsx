import React, { useState } from 'react';
import { processSteps } from '../../data/portfolioData';
import { SectionTitle } from '../../components/common/SectionTitle';
import { 
  Lightbulb, Layers, Palette, Code2, Sparkles, Check, ArrowRight 
} from 'lucide-react';
import './Mindset.scss';

export const Mindset = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [Lightbulb, Layers, Palette, Code2, Sparkles];

  const currentStep = processSteps[activeStepIndex];
  const StepIcon = stepIcons[activeStepIndex];

  return (
    <section id="process" className="mindset-section section-spacing">
      <div className="container">
        <SectionTitle
          badge="Engineering Philosophy"
          title="From abstract idea to"
          highlight="production interface"
          subtitle="A battle-tested 5-step workflow designed to deliver maintainable, high-craft React applications on schedule."
          align="center"
        />

        {/* 5-Step Process Interactive Selector */}
        <div className="process-timeline-nav">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx];
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                className={`timeline-step-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveStepIndex(idx)}
                data-cursor="hover"
              >
                <div className="step-number-wrap font-mono">
                  <span className="step-num">{step.step}</span>
                </div>
                <div className="step-text-wrap">
                  <span className="step-title">{step.title}</span>
                  <span className="step-sub font-mono">{step.subtitle.split(' ')[0]}</span>
                </div>
                {idx < processSteps.length - 1 && <div className="step-connector-line" />}
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Display Card */}
        <div className="active-process-card glow-card">
          <div className="process-card-header">
            <div className="step-badge font-mono">
              <span className="step-index">PHASE {currentStep.step}</span>
              <span className="step-divider">/ 05</span>
            </div>
            <div className="step-icon-badge">
              <StepIcon className="phase-icon" />
            </div>
          </div>

          <div className="process-card-content">
            <div className="phase-headline-group">
              <h3 className="phase-title">
                {currentStep.title} — <span className="text-gradient">{currentStep.subtitle}</span>
              </h3>
              <p className="phase-description">{currentStep.description}</p>
            </div>

            <div className="phase-deliverables-panel">
              <h4 className="deliverables-title font-mono">KEY DELIVERABLES &amp; STANDARDS</h4>
              <ul className="deliverables-list">
                {currentStep.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="deliverable-item font-mono">
                    <span className="check-box"><Check /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="process-nav-controls">
            <button 
              className="proc-ctrl-btn" 
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1))}
              data-cursor="hover"
            >
              Previous Phase
            </button>
            
            <div className="proc-dots-indicator">
              {processSteps.map((_, i) => (
                <span 
                  key={i} 
                  className={`dot-indicator ${activeStepIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveStepIndex(i)} 
                />
              ))}
            </div>

            <button 
              className="proc-ctrl-btn next font-mono" 
              onClick={() => setActiveStepIndex((prev) => (prev + 1) % processSteps.length)}
              data-cursor="hover"
            >
              <span>Next Phase</span>
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
