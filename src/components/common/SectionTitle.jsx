import React from 'react';
import './SectionTitle.scss';

export const SectionTitle = ({
  badge = '',
  title = '',
  highlight = '',
  subtitle = '',
  align = 'center', // 'center' | 'left'
  className = ''
}) => {
  return (
    <div className={`section-header-wrapper align-${align} ${className}`}>
      {badge && (
        <div className="section-badge-pill">
          <span className="badge-sparkle">✦</span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className="section-main-heading">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>

      {subtitle && <p className="section-sub-text">{subtitle}</p>}
    </div>
  );
};
