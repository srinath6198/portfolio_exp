import React, { useState, useEffect } from 'react';
import { personalData } from '../../data/portfolioData';
import './LoadingScreen.scss';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // Fast, elegant 1.2s loader

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`editorial-loader-overlay ${isFinished ? 'fade-out' : ''}`}>
      <div className="loader-center-box">
        <div className="loader-brand-symbol">✦</div>
        <div className="loader-brand-title">{personalData.brandName || personalData.name}</div>
        <div className="loader-role-subtitle">Full-Stack  &amp; Software Engineer</div>

        <div className="loader-progress-bar-track">
          <div className="loader-progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="loader-counter font-mono">{progress}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
