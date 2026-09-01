import React from 'react';
import { experienceData } from '../../data/portfolioData';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TechBadge } from '../../components/common/TechBadge';
import {
  Briefcase, Calendar, MapPin, CheckCircle2, Building2
} from 'lucide-react';
import './Experience.scss';

export const Experience = () => {
  return (
    <section id="experience" className="experience-section section-spacing">
      <div className="container">
        <SectionTitle
          badge="Career Progression"
          title="Proven experience across"
          highlight="scale &amp; high impact"
          subtitle="A track record of crafting high-performance user interfaces and standardizing design systems in production."
          align="center"
        />

        <div className="timeline-container">
          {/* Vertical Progress Line */}
          <div className="timeline-line-glow" />

          {/* Timeline Cards */}
          <div className="timeline-items-list">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="timeline-item">
                {/* Timeline Dot Beacon */}
                <div className="timeline-node">
                  <div className="node-outer">
                    <div className="node-inner" />
                  </div>
                </div>

                {/* Timeline Content Card */}
                <div className="timeline-card glow-card">
                  <div className="exp-card-header">
                    <div className="role-group">
                      <span className="exp-badge font-mono">{exp.badge}</span>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="company-meta font-mono">
                        <span className="company-name"><Building2 className="meta-icon" /> {exp.company}</span>
                        <span className="meta-sep">&bull;</span>
                        <span className="exp-location"><MapPin className="meta-icon" /> {exp.location}</span>
                      </div>
                    </div>

                    <div className="exp-period-pill font-mono">
                      <Calendar className="cal-icon" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="exp-description">{exp.description}</p>

                  {/* Achievements List */}
                  <div className="exp-achievements">
                    <h4 className="achieve-title font-mono">KEY IMPACT &amp; RESPONSIBILITIES</h4>
                    <ul className="achieve-list">
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="achieve-item">
                          <CheckCircle2 className="check-icon" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack used */}
                  <div className="exp-tech-footer">
                    <span className="tech-label font-mono">STACK:</span>
                    <div className="exp-tech-tags">
                      {exp.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
