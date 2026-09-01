import React from 'react';
import { statsData } from '../../data/portfolioData';
import { AnimatedCounter } from '../../components/ui/AnimatedCounter';
import { TiltCard } from '../../components/ui/TiltCard';
import { Sparkles, TrendingUp } from 'lucide-react';
import './Stats.scss';

export const Stats = () => {
  return (
    <section className="stats-section section-spacing">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <TiltCard
              key={index}
              maxTilt={10}
              className="stat-tilt-card"
              glowColor={index % 2 === 0 ? 'rgba(99, 102, 241, 0.25)' : 'rgba(6, 182, 212, 0.25)'}
            >
              <div className="stat-card glow-card">
                <div className="stat-top-sparkle">
                  <Sparkles className="sparkle-icon" />
                  <span className="stat-index font-mono">0{index + 1}</span>
                </div>

                <div className="stat-number-wrapper font-mono">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2200} />
                </div>

                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-detail font-mono">{stat.detail}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
