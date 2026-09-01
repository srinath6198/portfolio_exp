import React, { useState } from 'react';

import {
  skillsData,
  marqueeTechList
} from '../../data/portfolioData';

import { SectionTitle } from '../../components/common/SectionTitle';
import { TiltCard } from '../../components/ui/TiltCard';
import { getTechIcon } from '../../components/common/TechBadge';

import {
  Code,
  Layers,
  Server,
  Wrench,
  Cpu
} from 'lucide-react';

import './Skills.scss';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'all',
      label: 'All Technologies',
      icon: Cpu
    },
    {
      id: 'frontend',
      label: 'Frontend',
      icon: Code
    },
    {
      id: 'backend',
      label: 'Backend',
      icon: Server
    },
    {
      id: 'uiEngineering',
      label: 'UI Engineering',
      icon: Layers
    },
    {
      id: 'tools',
      label: 'Tools & Workflow',
      icon: Wrench
    }
  ];

  const getFilteredSkills = () => {
    if (activeCategory === 'frontend') {
      return skillsData.frontend;
    }

    if (activeCategory === 'backend') {
      return skillsData.backend;
    }

    if (activeCategory === 'uiEngineering') {
      return skillsData.uiEngineering;
    }

    if (activeCategory === 'tools') {
      return skillsData.tools;
    }

    return [
      ...skillsData.frontend,
      ...skillsData.backend,
      ...skillsData.uiEngineering,
      ...skillsData.tools
    ];
  };

  const filteredSkills = getFilteredSkills();

  return (
    <section
      id="skills"
      className="skills-section section-spacing"
    >
      <div className="container">

        <SectionTitle
          badge="Technical Skills"
          title="My technical"
          highlight="expertise"
          subtitle="Full-Stack Developer experienced in building responsive React applications, REST APIs, backend services, database-driven applications, and cross-platform solutions."
          align="center"
        />

        {/* Category Filters */}
        <div className="skills-category-tabs">

          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                className={`category-tab-btn ${isActive ? 'active' : ''
                  }`}
                onClick={() => setActiveCategory(cat.id)}
                data-cursor="hover"
              >
                <Icon className="cat-icon" />

                <span>
                  {cat.label}
                </span>
              </button>
            );
          })}

        </div>

        {/* Skills Cards */}
        <div className="skills-cards-grid">

          {filteredSkills.map((skill, index) => (

            <TiltCard
              key={`${skill.name}-${index}`}
              maxTilt={12}
              className="skill-card-tilt"
              glowColor={
                skill.color
                  ? `${skill.color}25`
                  : 'rgba(99, 102, 241, 0.2)'
              }
            >

              <div className="skill-card-inner glow-card">

                <div className="skill-top-row">

                  <div
                    className="skill-icon-wrap"
                    style={{
                      borderColor: skill.color
                        ? `${skill.color}40`
                        : 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {getTechIcon(skill.name)}
                  </div>

                  <span className="skill-level-badge font-mono">
                    {skill.level}
                  </span>

                </div>

                <div className="skill-content">

                  <h4 className="skill-title">
                    {skill.name}
                  </h4>

                  <p className="skill-desc">
                    {skill.desc}
                  </p>

                </div>

                <div className="skill-footer font-mono">

                  <span className="skill-indicator-bar">

                    <span
                      className="indicator-fill"
                      style={{
                        width:
                          skill.level === 'Expert'
                            ? '96%'
                            : skill.level === 'Advanced'
                              ? '88%'
                              : '75%',

                        background:
                          skill.color || '#6366f1'
                      }}
                    />

                  </span>

                </div>

              </div>

            </TiltCard>

          ))}

        </div>

      </div>

      {/* Stack Marquee */}
      <div className="skills-marquee-wrapper">

        <div className="marquee-label font-mono">
          FULL-STACK TECHNOLOGY:
        </div>

        <div className="marquee-track">

          <div className="marquee-content">

            {marqueeTechList.map((item, idx) => (

              <div
                key={`m1-${idx}`}
                className="marquee-pill font-mono"
              >
                <span className="pill-icon">
                  {getTechIcon(item)}
                </span>

                <span>
                  {item}
                </span>
              </div>

            ))}

          </div>

          <div
            className="marquee-content"
            aria-hidden="true"
          >

            {marqueeTechList.map((item, idx) => (

              <div
                key={`m2-${idx}`}
                className="marquee-pill font-mono"
              >
                <span className="pill-icon">
                  {getTechIcon(item)}
                </span>

                <span>
                  {item}
                </span>
              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};