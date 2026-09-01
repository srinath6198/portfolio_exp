import React, { useState } from 'react';
import { cricketData } from '../../data/portfolioData';
import { SectionTitle } from '../../components/common/SectionTitle';
import { Trophy, ExternalLink, Play, X, Award, Target } from 'lucide-react';
import './Cricket.scss';

export const Cricket = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="cricket" className="cricket-section section-spacing">
      <div className="container">
        <SectionTitle
          badge="Beyond Code"
          title="Cricket"
          highlight="& Team Spirit"
          subtitle="When I'm not coding, I'm on the cricket field — playing as a right-hand batter and right-arm off-break bowler."
          align="center"
        />

        <div className="cricket-grid">
          {/* Player Card */}
          <div className="cricket-player-card">
            <div className="player-image-wrap">
              <img
                src={cricketData.image}
                alt={cricketData.name}
                className="player-image"
              />
              <button
                className="video-play-btn"
                onClick={() => setShowVideo(true)}
                aria-label="Play cricket video"
              >
                <Play size={24} fill="white" />
              </button>
            </div>

            <div className="player-info">
              <h3 className="player-name">{cricketData.name}</h3>
              <p className="player-role">{cricketData.role}</p>
              <span className="player-badge">{cricketData.profileType}</span>
            </div>
          </div>

          {/* Highlights & Stats */}
          <div className="cricket-details">
            <div className="cricket-highlights">
              <div className="highlight-header">
                <Target size={18} />
                <h4>Playing Style</h4>
              </div>
              <ul className="highlights-list">
                {cricketData.highlights.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cricket-achievements">
              <div className="highlight-header">
                <Award size={18} />
                <h4>Achievements</h4>
              </div>
              <ul className="highlights-list">
                {cricketData.achievements.map((item, idx) => (
                  <li key={idx} className="highlight-item">
                    <span className="bullet-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={cricketData.cricheroesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cricheroes-link"
            >
              <Trophy size={16} />
              <span>View CricHeroes Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-close-btn"
              onClick={() => setShowVideo(false)}
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video
              src={cricketData.video}
              controls
              autoPlay
              className="cricket-video"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cricket;
