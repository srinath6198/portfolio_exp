import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SectionTitle } from '../../components/common/SectionTitle';
import { TiltCard } from '../../components/ui/TiltCard';
import { 
  Sparkles, Sliders, Activity, Flame, CheckCircle2, Copy, 
  Check, Bell, TrendingUp, ShieldCheck, ToggleRight, Eye, X 
} from 'lucide-react';
import { FaReact } from 'react-icons/fa';
import './UIPlayground.scss';

export const UIPlayground = () => {
  // Widget 1: Analytics Timeframe State
  const [timeframe, setTimeframe] = useState('7D');
  const [analyticsMetric, setAnalyticsMetric] = useState({ value: '$128,450', change: '+18.4%', trend: 'up' });

  // Widget 2: Form Interaction State
  const [formData, setFormData] = useState({ email: '', role: 'Lead Architect', notifications: true });
  const [formValid, setFormValid] = useState(false);

  // Widget 3: Button Showcase state
  const [liked, setLiked] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Widget 4: Interactive Modal Dialog
  const [modalOpen, setModalOpen] = useState(false);

  // Widget 5: Accent switcher
  const [activeAccent, setActiveAccent] = useState('#6366f1');

  const handleTimeframeChange = (tf) => {
    setTimeframe(tf);
    if (tf === '24H') setAnalyticsMetric({ value: '$14,280', change: '+4.2%', trend: 'up' });
    if (tf === '7D') setAnalyticsMetric({ value: '$128,450', change: '+18.4%', trend: 'up' });
    if (tf === '30D') setAnalyticsMetric({ value: '$542,100', change: '+24.9%', trend: 'up' });
    if (tf === '1Y') setAnalyticsMetric({ value: '$2,890,400', change: '+68.2%', trend: 'up' });
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#06b6d4', '#10b981', '#f43f5e']
    });
    setLiked(!liked);
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText?.('<Button variant="glow" glowColor="#6366f1">Interactive</Button>');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="playground" className="playground-section section-spacing">
      <div className="container">
        <SectionTitle
          badge="Live UI Laboratory"
          title="Interactive Components &amp;"
          highlight="Frontend Playground"
          subtitle="A live sandbox proving UI craft, micro-interactions, spring physics, and modular React state management."
          align="center"
        />

        {/* Playground Grid */}
        <div className="playground-grid">
          {/* Item 1: Real-time Interactive Analytics Card */}
          <TiltCard maxTilt={8} className="pg-card-tilt" glowColor="rgba(99, 102, 241, 0.25)">
            <div className="playground-card glow-card">
              <div className="pg-card-header">
                <div className="card-title-group">
                  <Activity className="title-icon text-gradient-cyan" />
                  <h4 className="card-title">Live Telemetry &amp; Revenue</h4>
                </div>
                <div className="timeframe-buttons font-mono">
                  {['24H', '7D', '30D', '1Y'].map((tf) => (
                    <button
                      key={tf}
                      className={`tf-btn ${timeframe === tf ? 'active' : ''}`}
                      onClick={() => handleTimeframeChange(tf)}
                      data-cursor="hover"
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pg-metric-value-box">
                <div className="val-main font-mono">{analyticsMetric.value}</div>
                <div className="val-badge-positive font-mono">
                  <TrendingUp /> {analyticsMetric.change}
                </div>
              </div>

              {/* Dynamic Animated Bars */}
              <div className="analytics-bar-chart">
                {[65, 80, 45, 90, 75, 95, 85, 100, 70, 88].map((h, i) => (
                  <div key={i} className="chart-bar-wrap">
                    <div 
                      className="chart-bar-fill" 
                      style={{ 
                        height: `${h}%`,
                        background: i === 7 ? 'linear-gradient(180deg, #06b6d4, #6366f1)' : 'rgba(255, 255, 255, 0.15)'
                      }}
                    />
                    <span className="bar-label font-mono">D{i + 1}</span>
                  </div>
                ))}
              </div>

              <div className="pg-card-footer font-mono">
                <span>● Real-time WebSocket Sync</span>
                <span className="text-gradient-cyan">Latency: 2ms</span>
              </div>
            </div>
          </TiltCard>

          {/* Item 2: Micro-Interactions & Button Laboratory */}
          <TiltCard maxTilt={8} className="pg-card-tilt" glowColor="rgba(6, 182, 212, 0.25)">
            <div className="playground-card glow-card">
              <div className="pg-card-header">
                <div className="card-title-group">
                  <Sparkles className="title-icon text-gradient" />
                  <h4 className="card-title">Tactile Buttons &amp; Particle FX</h4>
                </div>
                <span className="badge-tag font-mono">Micro-FX</span>
              </div>

              <div className="buttons-playground-area">
                {/* Confetti Celebration Button */}
                <button
                  className="interactive-fx-btn btn-confetti"
                  onClick={triggerConfetti}
                  data-cursor="hover"
                >
                  <Flame className="btn-icon" />
                  <span>{liked ? '🎉 Spark Triggered!' : 'Click for Delight FX'}</span>
                </button>

                {/* Shimmer Neon Glow Button */}
                <button 
                  className="interactive-fx-btn btn-neon-glow" 
                  onClick={handleCopyCode}
                  data-cursor="hover"
                >
                  {copiedCode ? <Check className="btn-icon" /> : <Copy className="btn-icon" />}
                  <span>{copiedCode ? 'Component Copied!' : 'Copy React Component'}</span>
                </button>

                {/* Modal Trigger Button */}
                <button 
                  className="interactive-fx-btn btn-glass-trigger"
                  onClick={() => setModalOpen(true)}
                  data-cursor="hover"
                >
                  <Eye className="btn-icon" />
                  <span>Launch Glass Modal Dialog</span>
                </button>
              </div>

              <div className="pg-card-footer font-mono">
                <span>Spring Physics Enabled</span>
                <span className="text-gradient-emerald">60 FPS Smooth</span>
              </div>
            </div>
          </TiltCard>

          {/* Item 3: Dynamic Form & Validation */}
          <TiltCard maxTilt={8} className="pg-card-tilt" glowColor="rgba(16, 185, 129, 0.25)">
            <div className="playground-card glow-card">
              <div className="pg-card-header">
                <div className="card-title-group">
                  <ShieldCheck className="title-icon text-gradient-emerald" />
                  <h4 className="card-title">Dynamic Form State &amp; Toggles</h4>
                </div>
                <span className="badge-tag font-mono">Controlled Input</span>
              </div>

              <div className="form-playground-body">
                <div className="pg-input-field">
                  <label className="pg-label font-mono">Developer Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setFormValid(e.target.value.includes('@') && e.target.value.includes('.'));
                    }}
                    className={`pg-input font-mono ${formValid ? 'valid' : ''}`}
                  />
                  {formValid && <span className="valid-check font-mono"><Check /> Valid Format</span>}
                </div>

                <div className="pg-toggle-row">
                  <div className="toggle-text">
                    <span className="toggle-title">System Sound FX</span>
                    <span className="toggle-desc font-mono">Tactile audio feedback on interactions</span>
                  </div>
                  <button
                    className={`pg-switch ${formData.notifications ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, notifications: !formData.notifications })}
                    data-cursor="hover"
                  >
                    <span className="switch-thumb" />
                  </button>
                </div>
              </div>

              <div className="pg-card-footer font-mono">
                <span>WCAG Accessible Form</span>
                <span className="text-gradient">Instant Feedback</span>
              </div>
            </div>
          </TiltCard>

          {/* Item 4: Interactive Accent Palette Controller */}
          <TiltCard maxTilt={8} className="pg-card-tilt" glowColor="rgba(236, 72, 153, 0.25)">
            <div className="playground-card glow-card">
              <div className="pg-card-header">
                <div className="card-title-group">
                  <Sliders className="title-icon text-gradient-violet" />
                  <h4 className="card-title">Tokenized Theme Engine</h4>
                </div>
                <span className="badge-tag font-mono">CSS Variables</span>
              </div>

              <div className="theme-switcher-playground">
                <p className="theme-desc font-mono">Select dynamic token to simulate instant design system adaptation:</p>
                <div className="palette-buttons-row">
                  {[
                    { name: 'Indigo Accent', hex: '#6366f1' },
                    { name: 'Cyan Neon', hex: '#06b6d4' },
                    { name: 'Emerald Glow', hex: '#10b981' },
                    { name: 'Rose Cyber', hex: '#f43f5e' },
                    { name: 'Amber Gold', hex: '#f59e0b' }
                  ].map((p) => (
                    <button
                      key={p.hex}
                      className={`palette-chip ${activeAccent === p.hex ? 'active' : ''}`}
                      style={{ '--chip-color': p.hex }}
                      onClick={() => setActiveAccent(p.hex)}
                      data-cursor="hover"
                    >
                      <span className="chip-circle" style={{ backgroundColor: p.hex }} />
                      <span className="chip-name font-mono">{p.name}</span>
                    </button>
                  ))}
                </div>

                <div 
                  className="preview-accent-box font-mono"
                  style={{ borderColor: activeAccent, background: `${activeAccent}15` }}
                >
                  <span style={{ color: activeAccent }}>● Dynamic Token Active: {activeAccent}</span>
                </div>
              </div>

              <div className="pg-card-footer font-mono">
                <span>Zero-Runtime CSS Engine</span>
                <span className="text-gradient">Token Compliant</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Glass Modal Dialog Overlay */}
        {modalOpen && (
          <div className="pg-modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="pg-modal-dialog glow-card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-dialog-header">
                <div className="modal-title-wrap">
                  <FaReact className="modal-icon text-gradient-cyan" />
                  <h4 className="modal-heading">Glassmorphic React Dialog</h4>
                </div>
                <button className="modal-close-btn" onClick={() => setModalOpen(false)} data-cursor="hover">
                  <X />
                </button>
              </div>

              <div className="modal-dialog-body">
                <p className="modal-paragraph">
                  This modal demonstrates lightweight zero-dependency dialog mechanics with backdrop-blur, spring physics, and keyboard ESC dismiss listeners.
                </p>
                <div className="modal-code-tag font-mono">
                  &lt;Modal isOpen=&#123;true&#125; backdrop="blur" /&gt;
                </div>
              </div>

              <div className="modal-dialog-footer">
                <button className="modal-btn secondary" onClick={() => setModalOpen(false)} data-cursor="hover">
                  Dismiss
                </button>
                <button className="modal-btn primary" onClick={() => setModalOpen(false)} data-cursor="hover">
                  Got It
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
